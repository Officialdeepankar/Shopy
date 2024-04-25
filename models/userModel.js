import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},//we have changed it type from string to {} object inorder to write multiple lines for address.
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);



/* 

Sure, let's go through each field in your Mongoose schema `userSchema` and explain its purpose:

1. **name**:
   - **Type**: String
   - **Description**: This field stores the name of the user.
   - **Validation**: It's marked as required (`required: true`), meaning it must be provided when creating a new user. The `trim: true` option removes leading and trailing whitespace from the input.

2. **email**:
   - **Type**: String
   - **Description**: This field stores the email address of the user.
   - **Validation**: It's marked as required (`required: true`) and unique (`unique: true`), meaning each email must be unique in the database.

3. **password**:
   - **Type**: String
   - **Description**: This field stores the password of the user.
   - **Validation**: It's marked as required (`required: true`). Note: Storing passwords directly in the database is generally not recommended for security reasons. You should hash and salt passwords before storing them.

4. **phone**:
   - **Type**: String
   - **Description**: This field stores the phone number of the user.
   - **Validation**: It's marked as required (`required: true`).

5. **address**:
   - **Type**: Object
   - **Description**: This field stores the address of the user. By using an object type, you can store multiple address-related fields such as street, city, state, and zip code.
   - **Validation**: It's marked as required (`required: true`). However, you might want to further validate individual address fields within your application logic.

6. **role**:
   - **Type**: Number
   - **Description**: This field stores the role of the user, typically representing their level of access or permissions within the system.
   - **Default Value**: It's set to `0` by default.
   
7. **timestamps**:
   - **Type**: Boolean
   - **Description**: This option is passed as the second argument to the schema constructor (`{ timestamps: true }`). It automatically adds two fields to the schema: `createdAt` and `updatedAt`, which are managed by Mongoose and automatically updated when documents are created or modified.

Overall, this schema defines the structure of user documents in your MongoDB collection, including their basic information like name, email, password, phone, and address, as well as their role and timestamp information.

*/
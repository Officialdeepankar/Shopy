import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds); // psswrd+salt;// slat is the random sequence of characters;
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};




/* 
Here's how salting works in the context of password hashing:

a)Generation: When hashing a password, a random salt is generated. This salt is typically a random sequence of characters.
b) Combination: The salt is then combined with the plaintext password. This can be done by concatenating the salt with the password or by using more sophisticated c) c)c)techniques like HMAC (Hash-based Message Authentication Code).
d)Hashing: The combined value (plaintext password + salt) is then hashed using a cryptographic hashing algorithm like bcrypt, SHA-256, etc.
e)Storage: Both the hashed password and the salt are stored together in the database. When a user tries to log in, the stored salt is retrieved and used to hash the entered password again for comparison with the stored hashed password.


*/

import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast"
import axios from "axios"
import{ useNavigate}from"react-router-dom";
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("");
    const Navigate=useNavigate();// it is a hook ;
    //   const handleSubmit=async(e)=>{
    //        e.preventDefalult();
    //        try{

    //         const res=await axios.post("http://localhost:5000/api/v1/auth/register",{name, email, password, phone, address })
    //          if (res.data.success)
    //          {
    //             toast.success(res.data.message)
    //             console.log("sucess")
    //            // agar registration sahi raha tho navigate kara denge waps se login pe 
    //          }
    //          else{
    //             toast.error(res.data.message)
    //          }
    //        }catch(err){
    //         console.log(err);
    //         toast.error("Something went wrong")
    //        }
    //   }

      const handleSubmit=async(e)=>{
            e.preventDefault();
           try{
            const res=await axios.post("http://localhost:5000/api/v1/auth/register",{name, email, password, phone, address })
            console.log(res)
           if(res.data.success){
            toast.success( res.data.message,{
                duration: 5000,
              })
            Navigate("/login")
           }
           else
           {
            toast.error(res.data.message)
           }
           
           }
           catch(error){
               if (error)
               {
                console.log(error)
               }
           }
      }
  return (
    <Layout title="Register-Ecommer App">
      <div className="register">
        <h1>Register page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Phone Number"
               required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter your Address"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const Submit = async(e) => {
   
      e.preventDefault();
      await axios.post("http://localhost:5000/login", {
          email,
          password,
        })
        .then((res)=>{
          console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
    })
      console.log( email+","+ password)
  }
  return (
    <div >
      <h1>Login</h1>
      <form  onSubmit={Submit} className="w-25 m-auto ">
      {/* <div className="d-flex justify-content-between ">
      <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(e) => {setUsername(e.target.value)}}
          placeholder="Username"
          name="username" autoComplete="off" 
        />
        </div><br/> */}
        <div className="d-flex justify-content-between ">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Email"
          name="email" autoComplete="off" 
        />
        </div><br/>
        {/* <div className="d-flex justify-content-between">
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          type="text"
          onChange={(e) => {setPhonenumber(e.target.value)}}
          placeholder="PhoneNumber"
          name="phonenumber" autoComplete="off" 
        />
         </div><br/> */}
       <div className="d-flex justify-content-between">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="Password"
          name="password" autoComplete="off" 
        />
        </div>
        <br/>
        <div className="d-flex flex-column ">
          <button className="w-25 m-auto" type="submit">Login</button>
          <p className=" m-auto">Don't have an account yet?</p>
        </div>
      </form>
      <br />
      <Link className="d-flex justify-content-center" to="/register">Register Here....</Link>
    </div>
  );
};
export default Login;

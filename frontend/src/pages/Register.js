// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       register page
//     </div>
//   )
// }

// export default Register
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/", {
          name,  
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            alert("user already exist");
            // history("/home", { state: { id: email } });
          } else if ((res.data = "no exist")) {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong detail");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form action="POST">
      <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Username"
          name=""
          id=""
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />

        <input type="submit" onClick={Submit} />
      </form>
      <p>OR</p>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}
export default Register;

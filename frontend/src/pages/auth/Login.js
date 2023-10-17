import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Login() {
  const { isAuthenticated, setIsAuthenticated, email, setEmail,password, setPassword } = useContext(AuthContext);
  console.log(email);
  const navigate = useNavigate();
  const Submit =async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/login", {
          email,
          password,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        })
        .then((res)=>{
          console.log(res.data);
          setIsAuthenticated(true);
          console.log("first")
          // localStorage.setItem("Token",JSON.stringify(accessToken));

      })
    //   .then((data)=>{
    //     console.log(data,"user Login");
    //     if(data.status =="ok"){
    //       alert("login successfully!");
    //       window.localStorage.setItem("token",data.data);
    //       window.localStorage.setItem("loggedIn",true);

    //       window.location.href="./userDetails"
    //     }
    //     else{
    //       alert("Invalid Credentials")
    //     }
    // })
      .catch((error) => {
        console.log(error)
    })
      console.log( email+","+ password)
    localStorage.setItem("Email", JSON.stringify(email));
    
    // console.log(email);
    // setIsAuthenticated(true);
  };
  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }
  }, [isAuthenticated,navigate]);
  // const handleMail = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };
  return (
    <div>
    <Form  onSubmit={Submit} className="w-25 m-auto ">
      <h2 className="text-center">Login</h2>
      <div className="d-flex justify-content-between ">
         <label htmlFor="email">Email</label>
         <input
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Email"
          name="email" autoComplete="off" 
        />
        </div><br/>
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
      <br />
      <Link className="d-flex justify-content-center" to="/register">Register Here....</Link>
    
    </Form>
    </div>
  );
}

export default Login;

// ========================


// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//     const Submit = async(e) => {
   
//       e.preventDefault();
//       await axios.post("http://localhost:5000/login", {
//           email,
//           password,
//         })
//         .then((res)=>{
//           console.log(res.data);
//       })
//       .catch((error) => {
//         console.log(error)
//     })
//       console.log( email+","+ password)
//   }
//   return (
//     <div >
//       <h1>Login</h1>
//       <form  onSubmit={Submit} className="w-25 m-auto ">
//       {/* <div className="d-flex justify-content-between ">
//       <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           onChange={(e) => {setUsername(e.target.value)}}
//           placeholder="Username"
//           name="username" autoComplete="off" 
//         />
//         </div><br/> */}
//         <div className="d-flex justify-content-between ">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           onChange={(e) => {setEmail(e.target.value)}}
//           placeholder="Email"
//           name="email" autoComplete="off" 
//         />
//         </div><br/>
//         {/* <div className="d-flex justify-content-between">
//         <label htmlFor="phonenumber">Phone Number</label>
//         <input
//           type="text"
//           onChange={(e) => {setPhonenumber(e.target.value)}}
//           placeholder="PhoneNumber"
//           name="phonenumber" autoComplete="off" 
//         />
//          </div><br/> */}
//        <div className="d-flex justify-content-between">
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           onChange={(e) => {setPassword(e.target.value)}}
//           placeholder="Password"
//           name="password" autoComplete="off" 
//         />
//         </div>
//         <br/>
//         <div className="d-flex flex-column ">
//           <button className="w-25 m-auto" type="submit">Login</button>
//           <p className=" m-auto">Don't have an account yet?</p>
//         </div>
//       </form>
//       <br />
//       <Link className="d-flex justify-content-center" to="/register">Register Here....</Link>
//     </div>
//   );
// };
// export default Login;

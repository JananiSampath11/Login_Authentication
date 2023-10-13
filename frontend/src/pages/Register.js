import React, { useState ,useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [selectedmfatype, setSelectedmfatype] = useState("")
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phonenumberRef = useRef(null);
  const mfatype = useRef(null);
  const passwordRef = useRef(null);
  const confpasswordRef = useRef(null);
  const Submit=async (e)=> {
    e.preventDefault();
    await axios.post("http://localhost:5000/register", {
        username,
        email,
        phonenumber,
        selectedmfatype,
        password,
        confirmpassword
      })
      .then((res)=>{
        console.log(res.data);
        usernameRef.current.value = ""
        emailRef.current.value = ""
        phonenumberRef.current.value = ""
        mfatype.current.value = ""
        passwordRef.current.value = ""
        confpasswordRef.current.value = ""
    })
    .catch((error) => {
      console.log(error)
  })
    console.log( username+","+email + ","+selectedmfatype+ ","+ phonenumber+ ","+ password+ ","+ confirmpassword)
    
  }
  return (
    <div >
      <h1>Register</h1>
      <form  onSubmit={Submit} className="w-25 m-auto">
      <div className="d-flex justify-content-between">
      <label htmlFor="username">Username</label>
      <input ref={usernameRef}
          id="username"
          type="text"
          onChange={(e) => {setUsername(e.target.value)}}
          placeholder="Username"
          name="username" autoComplete="off" 
        />
      </div>
        <div className="d-flex justify-content-between">
        <label htmlFor="email">Email</label>
        <input ref={emailRef}
          id="email"
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Email"
          name="email" autoComplete="off" 
        />
        </div><br />
        <div className="d-flex justify-content-between">
        <label htmlFor="phonenumber">Phone Number</label>
        <input ref={phonenumberRef}
          id="phonenumber"
          type="text"
          onChange={(e) => {setPhonenumber(e.target.value)}}
          placeholder="PhoneNumber"
          name="phonenumber" autoComplete="off" 
        />
        </div><br />
       <div className="d-flex justify-content-between">
       <label htmlFor="selectedmfatype">Select MFA Type</label>
        <select ref={mfatype}
          id="selectedmfatype"
          onChange={(e) => {setSelectedmfatype(e.target.value)}}
          value={selectedmfatype}
          name="selectedmfatype" 
        >
          <option value="" disabled>Select MFA</option>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="qrcode">QR Code</option>
        </select>
       </div><br />
       <div className="d-flex justify-content-between">
        <label htmlFor="password">Password</label>
       <input ref={passwordRef}
          id="password"
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="Password"
          name="password" autoComplete="off" 
        />
       </div><br />
        <div className="d-flex justify-content-between">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input ref={confpasswordRef}
          id="confirmpassword"
          type="password"
          onChange={(e) => {setConfirmpassword(e.target.value)}}
          placeholder="ConfirmPassword"
          name="confirmpassword" autoComplete="off" 
          />
        </div><br />
        <br/>
        <div className="d-flex flex-column ">
          <button className="w-25 m-auto" type="submit">Register</button>
          <p className=" m-auto">Wanna Login?</p>
        </div>
        
      </form>
      
      <br />
      <Link className="d-flex justify-content-center" to="/login">Please Login Here....</Link>
    </div>
  );
}
export default Register;


// import React, { useState ,useRef} from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Formik, Form, Field } from 'formik';
// import * as Yup from "yup";
// const RegisterValidation = Yup.object().shape({
//   username: Yup.string()
//     .required('Username is Required !'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is Required !'),
//   password:Yup.string()
//     // .min(10, 'Must be 20 characters or less')
//     .required('Client Name is Required !'),
// });

// const Register = () => {
//   const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [phonenumber, setPhonenumber] = useState("")
//   const [confirmpassword, setConfirmpassword] = useState("")
//   const [selectedmfatype, setSelectedmfatype] = useState("")
//   const usernameRef =React.useRef(null);
//   const emailRef = useRef(null);
//   const phonenumberRef = useRef(null);
//   const mfatype = useRef(null);
//   const passwordRef = useRef(null);
//   const confpasswordRef = useRef(null);
//   const PostData= async (values)=> {
//     // e.preventDefault();
//     await axios.post("http://localhost:5000/register", {
//         username,
//         email,
//         phonenumber,
//         selectedmfatype,
//         password,
//         confirmpassword
//       })
//       .then((res)=>{
//         console.log(res.data);
//         setUsername(res.username)
//         usernameRef.current.value = ""
//         emailRef.current.value = ""
//         phonenumberRef.current.value = ""
//         mfatype.current.value = ""
//         passwordRef.current.value = ""
//         confpasswordRef.current.value = ""
//     })
//     .catch((error) => {
//       console.log(error)
//   })
//     console.log( username+","+email + ","+selectedmfatype+ ","+ phonenumber+ ","+ password+ ","+ confirmpassword)
    
//   }
//   console.log(username)
//   return (
//     <div >
//       <h1>Register</h1>
//       <Formik
//       initialValues={{
//         username: '',
//         email: '',
//         phonenumber:'',
//         selectedmfatype:'',
//         password:'',
//         confirmpassword:''
//       }}
     
//       validationSchema={RegisterValidation}
//       onSubmit={(values,{}) => {
//         // to clear form data after submiting
//         console.log(values);
//         PostData(values);
//       } 
//     }
//     >
//       {({ errors, touched }) => (
//       <Form className="w-25 m-auto">
//       <div className="d-flex justify-content-between">
//       <label htmlFor="username">Username</label>
//       <Field 
//       // ref={usernameRef}
//           id="username"
//           type="text"
//           // onChange={(e) => {setUsername(e.target.value)}}
//           placeholder="Username"
//           name="username" autoComplete="off" 
//         /> 
//       </div>
//       <div className="d-flex justify-content-end">
//       {errors.username && touched.username && <div>{errors.username}
//         </div>}
//         </div>
//       <br />
//         <div className="d-flex justify-content-between">
//         <label htmlFor="email">Email</label>
//         <Field 
//         // ref={emailRef}
//           id="email"
//           type="email"
//           // onChange={(e) => {setEmail(e.target.value)}}
//           placeholder="Email"
//           name="email" autoComplete="off" 
//         />
//         </div>
//         <div className="d-flex justify-content-end">
//         {errors.email && touched.email && <div>{errors.email}
//         </div>}
//         <br />
//         </div>
//         <br />
//         <div className="d-flex justify-content-between">
//         <label htmlFor="phonenumber">Phone Number</label>
//         <input 
//         // ref={phonenumberRef}
//           id="phonenumber"
//           type="text"
//           // onChange={(e) => {setPhonenumber(e.target.value)}}
//           placeholder="PhoneNumber"
//           name="phonenumber" autoComplete="off" 
//         />
//         </div><br />
//        <div className="d-flex justify-content-between">
//        <label htmlFor="selectedmfatype">Select MFA Type</label>
//         <select 
//         // ref={mfatype}
//           id="selectedmfatype"
//           // onChange={(e) => {setSelectedmfatype(e.target.value)}}
//           value={selectedmfatype}
//           name="selectedmfatype" 
//         >
//           <option value="" disabled>Select MFA</option>
//           <option value="email">Email</option>
//           <option value="sms">SMS</option>
//           <option value="qrcode">QR Code</option>
//         </select>
//        </div><br />
//        <div className="d-flex justify-content-between">
//         <label htmlFor="password">Password</label>
//        <input 
//       //  ref={passwordRef}
//           id="password"
//           type="password"
//           // onChange={(e) => {setPassword(e.target.value)}}
//           placeholder="Password"
//           name="password" autoComplete="off" 
//         />
//        </div><br />
//         <div className="d-flex justify-content-between">
//           <label htmlFor="confirmpassword">Confirm Password</label>
//           <input 
//           // ref={confpasswordRef}
//           id="confirmpassword"
//           type="password"
//           // onChange={(e) => {setConfirmpassword(e.target.value)}}
//           placeholder="ConfirmPassword"
//           name="confirmpassword" autoComplete="off" 
//           />
//         </div><br />
//         <br/>
//         <div className="d-flex flex-column ">
//           <button className="w-25 m-auto" type="submit">Register</button>
//           <p className=" m-auto">Wanna Login?</p>
//         </div>
        
//       </Form>
//        )}
//        </Formik> 
//       <br />
//       <Link className="d-flex justify-content-center" to="/login">Please Login Here....</Link>
//     </div>
//   );
// }
// export default Register;



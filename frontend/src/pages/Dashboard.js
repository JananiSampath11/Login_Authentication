import React, { useContext, useEffect } from "react";
import {  useNavigate,Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Dashboard=()=> {
  console.log(useContext(AuthContext));

  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated,navigate]);
  // const { isAuthenticated, setIsAuthenticated, email, setEmail } = useContext(AuthContext);

  const uid = JSON.stringify(localStorage.getItem("Username"));
  console.log(uid);
  const uidval = JSON.parse(uid);
  console.log(uidval);
  const Logout=()=>{
    localStorage.clear();
    setIsAuthenticated(false)
  }
  return (
    <div>
      <h1>Hi {uidval},</h1>
      <h2>Welcome to dashoard page ! </h2>
      <nav style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{ padding: "10px" }}>
          Dash board
        </Link>
        <Link to="/login" style={{ padding: "10px" }}>
          Login
        </Link>
        <Link to="/register" style={{ padding: "10px" }}>
          Register
        </Link>
      </nav>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Dashboard;

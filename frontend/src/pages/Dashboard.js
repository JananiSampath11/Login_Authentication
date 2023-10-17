import React, { useContext, useEffect } from "react";
import {  useNavigate,Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Dashboard=()=> {
  console.log(useContext(AuthContext));

  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated,navigate]);
  // const { isAuthenticated, setIsAuthenticated, email, setEmail } = useContext(AuthContext);

  const uid = JSON.stringify(localStorage.getItem("Email"));
  console.log(uid);
  const uidval = JSON.parse(uid);
  console.log(uidval);
  return (
    <div>
      <h1>Welcome to dashoard page @ {uidval}</h1>
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
    </div>
  );
}

export default Dashboard;

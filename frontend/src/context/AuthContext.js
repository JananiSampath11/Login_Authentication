import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] =   useState(localStorage.getItem('isAuthenticated') || false);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [selectedmfatype, setSelectedmfatype] = useState("")
  const [mfavalue, setMfavalue] = useState("")
  console.log(email);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated,
         username, setUsername,
         email, setEmail,
         phonenumber, setPhonenumber,
         password, setPassword,
         confirmpassword, setConfirmpassword,
         selectedmfatype, setSelectedmfatype,mfavalue,setMfavalue
                  }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

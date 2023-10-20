import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Protected from './Protected';
import OtpPage from './pages/auth/OtpPage';

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/login" element={<Login/>}></Route>

          <Route  path="/register" element={<Register/>}></Route>

          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          
          <Route path="/" element={
          <Protected>
            <Dashboard/>
          </Protected>
          }></Route>
          <Route path="/Otppage" element={
          // <Protected>
            <OtpPage/>
          // </Protected>
          }></Route>

        </Routes>

      </BrowserRouter>

    </div>

  );

}

 

export default App;

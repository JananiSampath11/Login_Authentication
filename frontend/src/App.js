import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Protected from './Protected';

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/login" element={<Login/>}></Route>

          <Route index path="/register" element={<Register/>}></Route>

          <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          
          <Route path="/" element={
          <Protected>
            <Dashboard/>
          </Protected>
          }></Route>

        </Routes>

      </BrowserRouter>

    </div>

  );

}

 

export default App;

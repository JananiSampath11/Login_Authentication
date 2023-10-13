import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Login from './pages/Login';

import Register from './pages/Register';

import ForgotPassword from './pages/ForgotPassword';

 

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route exact path="/login" element={<Login/>}></Route>

          <Route index path="/register" element={<Register/>}></Route>

          <Route exact path="/forgotpassword" element={<ForgotPassword/>}></Route>

        </Routes>

      </BrowserRouter>

    </div>

  );

}

 

export default App;

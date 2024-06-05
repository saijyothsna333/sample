import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import ResetPswd from './Components/ResetPswd';
import Home from './Components/Home';
import Success from './Components/Success';




function App() {
  return (
    <>     
        <Routes>
              <Route path='/login' element={<Login/>}/> 
              <Route path='signup' element={<Signup/>}/> 
              <Route path='reset' element={<ResetPswd/>}/> 
              <Route path='Home' element={<Home/>}/>
              <Route path='success' element={<Success/>}/>

              

        </Routes>
    </>
  );
}

export default App;

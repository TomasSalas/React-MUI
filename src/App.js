import NavBar from "./NavBar/Index"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import {Route , Routes} from "react-router-dom"
function App() {

  const navLinks = [
    { title: "Home" , path:"/" , icon:<HomeIcon/>},
    { title: "Login" , path:"/login" , icon:<LoginIcon/>},
    { title: "Register" , path:"/register" , icon:<HowToRegIcon/>},

  ]

  return (
    <div className="App">
      <NavBar navLinks={navLinks}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
    </div>
  );
}

export default App;

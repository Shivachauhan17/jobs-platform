import {Route,Routes,BrowserRouter} from "react-router-dom";
import Home from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Otp from './pages/Otp'
import HomePage from "./pages/HomePage";
import HomePageNvigationBar from "./components/HomePageNvigationBar";

const App=()=>{


  return(
    <BrowserRouter>
      <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
      
  )
}

export default App;
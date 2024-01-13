import {Route,Routes,BrowserRouter} from "react-router-dom";
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Otp from './pages/Otp'

const App=()=>{

  return(
    <BrowserRouter>
      <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/otp' element={<Otp/>}/>
        </Routes>
    </BrowserRouter>
      
  )
}

export default App;
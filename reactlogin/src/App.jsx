import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./componets/Home"
import Register from "./componets/Register"
import Login from "./componets/Login"
import ResetPassword from "./componets/ResetPassword"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/resetpassword" Component={ResetPassword} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

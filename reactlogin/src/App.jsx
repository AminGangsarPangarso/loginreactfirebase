import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./componets/Home"
import Register from "./componets/Register"
import Login from "./componets/Login"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

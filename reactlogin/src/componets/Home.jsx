import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {Container,Paper,Button} from "@mui/material"
import { firebaseAuthentication } from "../config/firebase";
function Home() {
    const navigate = useNavigate()

    useEffect(()=>{
        firebaseAuthentication.onAuthStateChanged((user)=>{
            if(!user){
                navigate("/login")
            }
        })
    })

    const handleLogout = () =>{
        firebaseAuthentication.signOut()
    }

  return (
    <Container>
        <Paper>
            <Button onClick={handleLogout}>Logout</Button>
            <h1>ini Home</h1>
        </Paper>
    </Container>
  )
}

export default Home
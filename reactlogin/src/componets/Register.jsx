import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button, Container, Grid, TextField } from "@mui/material"
import { firebaseAuthentication } from "../config/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    createUserWithEmailAndPassword(firebaseAuthentication  ,email, password)
            .then((userCredential) => {
                const user = userCredential.user
            sendEmailVerification(user)
                    .then(() => {
                        alert("mohon verifikasi email")
                        navigate("/login")
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid >
                    <h2>halaman Register</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <TextField type="email" margin="dense" fullWidth variant="outlined" size="small" value={email} name="email" onChange={(e) => setEmail(e.target.value)} label="email" required />
                        <TextField type="password" margin="dense" fullWidth variant="outlined" size="small" value={password} name="password" onChange={(e) => setPassword(e.target.value)} label="password" required />
                        <Button type="submit" fullWidth variant="contained" color="primary">Register</Button>
                    </form>
                    <p>Sudah Punya akun?</p><Link to={"/login"}> Login</Link>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Register
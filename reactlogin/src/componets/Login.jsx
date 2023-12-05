import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button, Container, Grid, TextField } from "@mui/material"
import { firebaseAuthentication } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(firebaseAuthentication  ,email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user.reloadUserInfo.emailVerified){
                navigate("/")
            }else{
                alert("Verifikasi Email Anda Terlebih Dahulu")
            }
           console.log(user)
          })
            .catch((error) => {
                console.log(error)
                alert(error.message)
            })
    }

    return (
        <Container>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid >
                    <h2>halaman Login</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <TextField type="email" margin="dense" fullWidth variant="outlined" size="small" value={email} name="email" onChange={(e) => setEmail(e.target.value)} label="email" required />
                        <TextField type="password" margin="dense" fullWidth variant="outlined" size="small" value={password} name="password" onChange={(e) => setPassword(e.target.value)} label="password" required />
                        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                    </form>
                    <p>Belum Punya akun?</p><Link to={"/register"}> Register</Link>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Login
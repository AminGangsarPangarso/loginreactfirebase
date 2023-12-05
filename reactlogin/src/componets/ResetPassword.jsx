import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button, Container, Grid, TextField } from "@mui/material"
import { firebaseAuthentication } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";


 function ResetPassword() {
    const [email, setEmail] = useState("")


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(firebaseAuthentication  ,email)
        .then(()=>{
            alert('Silahkan Perikasa email anda untuk mengubah password')
            navigate('/login')
        })
        .catch((error)=>{
            alert(error.message)
        })
        
    }

    return (
        <Container>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid >
                    <h2>halaman Reset Password</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <TextField type="email" margin="dense" fullWidth variant="outlined" size="small" value={email} name="email" onChange={(e) => setEmail(e.target.value)} label="email" required />
                        <Button type="submit" fullWidth variant="contained" color="primary">Reset Password</Button>
                    </form>
                    <p>sudah Punya akun?</p><Link to={"/login"}> Login</Link>
               
                </Grid>

            </Grid>
        </Container>
    )
}

export default ResetPassword
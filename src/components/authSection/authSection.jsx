import { Typography, Container, Box, Image } from "@mui/material"
// import goose from "images/ghoseMain.png"
import { Link } from "react-router-dom";

const AuthSection = () => {
    return (
        <Box sx={{ backgroundColor: "#3E85F3", display: "flex",alignItems:"center", flexDirection: "column" }}>
            {/* <img src={goose} alt="ghose" width={150} height={150} style={{marginTop:232}}/> */}
            <Typography sx={{fontSize:44, color: "#fff", fontFamily: "Intel"}}>GhooseTrack</Typography>
            <Link style={{fontWeight:600,width: 131, paddingTop:14,paddingBottom:14,backgroundColor: "#fff",borderRadius:16, textAlign:"center",color:"#3E85F3",textDecoration: "none",fontSize:14, marginTop:32,marginBottom:208}} to={"/login"}>Log in</Link>
            <Link to={"/register"} style={{color: "#fff",marginBottom:88 }}>Sign up</Link>
        </Box>
    )
}
export default AuthSection
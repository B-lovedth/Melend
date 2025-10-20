import Login from "./login"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Melend Login",
    description: "Login to your Melend account",
}

const loginPage=()=>{
    return(
         <Login/>
        )
}
export default loginPage
import app from "../firebase.config"
import { Form, useNavigate, useOutletContext } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider()
const auth = getAuth()

export default function Login() {

   const [user, setUser] = useOutletContext()
   const navigate = useNavigate()

   async function login() {

      try { 
         const result = await signInWithPopup(auth, provider)
         const credential = await GoogleAuthProvider.credentialFromResult(result)
         const token = credential.accessToken
         const user_data = result.user

         console.log(user_data)
         setUser(user_data)

         localStorage.setItem("user", JSON.stringify(user_data))
         navigate("/")
         
      } catch (error) {
         console.log(error.message)
      }
   
   }

   return(
      <Form onSubmit={login} className="login">
         <button className="btn-primary">Login with Google</button>
      </Form>
   )
}


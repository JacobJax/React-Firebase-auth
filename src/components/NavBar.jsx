import app from "../firebase.config"
import { useState } from "react";
import { NavLink, Outlet, Form } from "react-router-dom";
import { getAuth, signOut} from "firebase/auth"

const auth = getAuth()

function NavBar() {

   const [user, setUser] = useState({})

   async function logout() {

      try { 
         await signOut(auth)

         setUser({})

         localStorage.clear()
         
      } catch (error) {
         console.log(error.message)
      }
   
   }

   return(
      <>
         <nav>
            <h3><NavLink to={"/"} >Context auth</NavLink></h3>
            <ul>
               {
                  user.uid ?
                  <Form onSubmit={logout} className="logout">
                     <button className="btn-secondary">Logout</button>
                  </Form>
                  :
                  <li><NavLink to={"/login"}>Login</NavLink></li>
               }
            </ul>
         </nav>
         <Outlet context={[user, setUser]} />
      </>
   )
}

export default NavBar
import { useOutletContext } from "react-router-dom"
import { useEffect } from "react";

function Home() {

   const [user, setUser] = useOutletContext()

   useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setUser(foundUser);
      }
    }, [])

   return (
      <>
         <section className="home">
            <div className="jumbotron">
               <h1>Welcome {user && user.displayName}</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum impedit ullam! Non porro inventore et laboriosam ratione earum blanditiis nobis iste beatae.</p>
            </div>
         </section>
      </>
   )
}

export default Home
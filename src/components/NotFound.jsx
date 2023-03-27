import { Link, useRouteError } from "react-router-dom"

function NotFound() {
   const error = useRouteError()

   return(
      <div className="notfound">
         <h1>AH!</h1>
         <h1>💩</h1>
         <p>Something went wrong.</p>
         <p>{error.message}</p>
         <Link to={"/"}>Back home</Link>
      </div>
   )
}

export default NotFound
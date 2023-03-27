import NotFound from "./components/NotFound"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Login from "./components/Login"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavBar />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />}/>
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

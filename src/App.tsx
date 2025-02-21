
import { Route, Routes } from "react-router-dom"
import LandingPage from "./static/LandingPage"
import Navbar from "./static/Navbar"
import CarIndex from "./components/cars/CarIndex"
import DealerIndex from "./components/dealers/DealerIndex"
import CreateCar from "./components/cars/CreateCar"
import CreateDealer from "./components/dealers/CreateDealer"
import UpdateCar from "./components/cars/UpdateCar"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/car-index" element={<CarIndex/>} />
        <Route path="/dealer-index" element={<DealerIndex/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/create-car" element={
          <ProtectedRoute>
            <CreateCar/>
          </ProtectedRoute>
          }/>
        <Route path="/create-dealer" element={
          <ProtectedRoute>
            <CreateDealer/>
          </ProtectedRoute>
          } />
        <Route path="/update-car/:id" element={
          <ProtectedRoute>
            <UpdateCar/>
          </ProtectedRoute>
          }/>
      </Routes>
    </>
  )
}

export default App

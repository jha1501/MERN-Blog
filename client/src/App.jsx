import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Project from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/sign-in" element = {<Signin />}/>
        <Route path="/sign-up" element = {<Signup />}/>
        <Route path="/projects" element = {<Project />}/>
        <Route path="/dashboard" element = {<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

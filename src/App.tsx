import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Education from "./pages/education/Education.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/education'} element={<Education/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

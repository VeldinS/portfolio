import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Education from "./pages/education/Education.tsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Experience from "./pages/experience/Experience.tsx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVGX1wPo6vQhjDdaD5zkR33YoCt2T889s",
    authDomain: "portfolio-2205.firebaseapp.com",
    projectId: "portfolio-2205",
    storageBucket: "portfolio-2205.appspot.com",
    messagingSenderId: "396019176566",
    appId: "1:396019176566:web:c1cc43a23acbfc999d7b57",
    measurementId: "G-C23548J010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// @ts-ignore
const analytics = getAnalytics(app);

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/education'} element={<Education/>} />
                <Route path={'/experience'} element={<Experience/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

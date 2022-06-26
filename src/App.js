import React,{useEffect,useLayoutEffect,useState} from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";
export default function App() {
  const [loaded,setLoad] = useState(false);
  useEffect(()=>{
    setLoad(true);
  },[])
  return loaded ? (
    //main application
    <>
      <Router basename="/abs">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
  :
  (
    //Loading Screen
    <div className="d-flex align-items-center justify-content-center bg-primary" style={{width:"100vw",height:"100vh"}}>
      <span className="spinner-border text-white" style={{width:100,height:100,fontSize:"2em"}}></span>
    </div>
  );
}

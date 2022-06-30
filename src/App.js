import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
export default function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={
          //using the suspense loading with callback
          <Suspense fallback={
            //Loading Screen
            <Loader />

          }>
            <Home />
          </Suspense>
        } />

        {/* About Route */}
        <Route path="/about" element={
          <Suspense fallback={
            <Loader />
          }>
            <About />
          </Suspense>
        }
        />
      </Routes>
    </Router>
  </>
  );
}

const Loader = () => <div className="d-flex align-items-center justify-content-center bg-primary" style={{ width: "100vw", height: "100vh" }}>
  <span className="spinner-border text-white" style={{ width: 100, height: 100, fontSize: "2em" }}></span>
</div>

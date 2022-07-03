import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import Line from "./Components/Utilities/Line";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Events = lazy(() => import("./Pages/Events"));
export default function App() {
  return (<>
    <Router basename="abs">
      <Routes >

        <Route path="/" element={
          //using the suspense loading with callback
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        } />

        {/* About Route */}
        <Route path="/about" element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        } />

        {/* Events Route */}
        <Route path="/events" element={<Suspense fallback={<Loader />}>
          <Events />
        </Suspense>} />

        <Route path="/solutions" element={<NotAvailable />} />
        <Route path="/blog" element={<NotAvailable />} />

      </Routes>
    </Router>
  </>
  );
}

const Loader = () => <div className="d-flex align-items-center justify-content-center bg-primary" style={{ width: "100vw", height: "100vh" }}>
  <span className="spinner-border text-white" style={{ width: 100, height: 100, fontSize: "3em" }}></span>
</div>

const NotAvailable = () => <div className="py-7 text-center">
  <h1>
    ¯\_(ツ)_/¯
  </h1>
  <b className='text-danger'>
    Opps,
  </b>
  This page is not available yet
  <br />
  <Line className="mx-auto my-3" width={500} />
  Dont worry working on it
  <br />
  <Link to="/">
    <button className="btn btn-outline-warning">Home</button>
  </Link>
</div>

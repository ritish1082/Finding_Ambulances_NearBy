import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AmbuDetailsUI from "./AmbuDetailsUI.js";
import HospiDetailsUI from "./HospiDetailsUI.js";

const Home = () => {
  return (
    <div className="m-5">
      <div className=" w-75 mx-auto">
        <Routes>
          <Route path="/ambudetails" element={<AmbuDetailsUI />} />
          <Route path="/hospidetails" element={<HospiDetailsUI />} />
        </Routes>
        <h1
          style={{ fontSize: "60px", textAlign: "center", marginTop: "4px" }}
          className="lead text-white"
        >
          <b>Welcome to Life Networks..</b>
        </h1>
        <hr className="w-50 mx-auto"></hr>
        <br></br>
        <div fluid="md" className="container">
          <div className="row">
            <div className="col mb-4" sm={8}>
              <div className="border rounded text-center shadow shadow-3 p-3">
                <br></br>
                <h3>
                  <b>Ambulance Services</b>
                </h3>
                <hr className="mx-auto w-50"></hr>
                <p>Find the nearest ambulance driver details!!</p>

                <button className="btn btn-primary">
                  <Link
                    className="text-white"
                    to="/ambudetails"
                    style={{ textDecoration: "none" }}
                  >
                    Click here
                  </Link>
                </button>
                <br></br>
                <br></br>
              </div>
            </div>
            <div className="col mb-4" sm={8}>
              <div className="border rounded text-center shadow shadow-3 p-3">
                <br></br>
                <h3>
                  <b>Hospital Services</b>
                </h3>
                <hr className="mx-auto w-50"></hr>

                <p>We provide you nearest hospital's information.</p>

                <button className="btn btn-primary">
                  <Link
                    className="text-white"
                    to="/hospitaldetails"
                    style={{ textDecoration: "none" }}
                  >
                    Click here
                  </Link>
                </button>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 style={{ fontSize: "40px", textAlign: "center", marginTop: "0px" }}>
        - EVERY - LIFE - MATTERS -
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;

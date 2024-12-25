import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0a243a", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px 20px" }}>
        <img src="./img/1.png" alt="Logo" style={{ width: "50px", height: "50px", marginRight: "10px" }} />
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "24px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", padding: "0 10px" }}>
            E-DEM
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ paddingLeft: "20px" }}>
              <li className="nav-item">
                <i className="fa-solid fa-house" style={{ color: "#FFFFFF" }}></i>
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                  หน้าแรก
                </Link>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-location-dot" style={{ color: "#FFFFFF" }}></i>
                <Link className="nav-link" to="/location" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                  สถานที่
                </Link>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-bed" style={{ color: "#FFFFFF" }}></i>
                <Link className="nav-link" to="/booking" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                  จองห้องพัก
                </Link>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-headset" style={{ color: "#FFFFFF" }}></i>
                <Link className="nav-link" to="/contact" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                  ติดต่อ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

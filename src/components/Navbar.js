import React from "react";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0a243a", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px 20px" }}>
            <img src="/img/1.png" alt="Logo" style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                <div className="container-fluid">
                    {/* Icon and Brand */}
                    <a className="navbar-brand" href="#" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "24px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", padding: "0 10px" }}>
                        E-DEM
                    </a>

                    {/* Navbar Toggler Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav" width>
                        <ul className="navbar-nav" style={{ paddingLeft: "20px" }}>
                            <li className="nav-item">
                            <i class="fa-solid fa-house" style={{ color: "#FFFFFF" }}></i>
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                                    หน้าแรก
                                </a>
                            </li>
                            <li className="nav-item">
                            <i class="fa-solid fa-location-dot" style={{ color: "#FFFFFF" }}></i>
                                <a className="nav-link" href="#" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                                    สถามนที่
                                </a>
                            </li>
                            <li className="nav-item">
                            <i class="fa-solid fa-bed" style={{ color: "#FFFFFF" }}></i>
                                <a className="nav-link" href="#" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }}>
                                    ห้องพัก
                                </a>
                            </li>
                            <li className="nav-item">
                            <i class="fa-solid fa-headset" style={{ color: "#FFFFFF" }}></i>
                                <a className="nav-link disabled" href="#" style={{ color: "#FFFFFF", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", padding: "5px 15px" }} aria-disabled="true">
                                    ติดต่อ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

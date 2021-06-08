import React, { useState } from "react";
import "./App.css";
import pragaimg from "./praga.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="home">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 65,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="dp" src={pragaimg} />
          <p className="text" style={{ fontSize: 25 }}>
            Hello , I am
          </p>
          <p className="nametext">PRAGHATIESH S</p>
          <p className="text">I am a Web developer</p>
          <Link style={{textDecoration: "none"}}to="/Project" >
            <div  className="homebtn">See My Works</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

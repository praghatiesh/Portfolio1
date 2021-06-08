import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="Nav">
      <Link class="Lnkstyl" to="/Home">
        <div className="name">PRAGHATIESH S</div>
      </Link>
      <Link class="Lnkstyl" to="/Home">
        <div className="box">Home</div>
      </Link>
      <Link class="Lnkstyl" to="/Project">
        <div className="box">Projects</div>
      </Link>
      <Link class="Lnkstyl" to="./About">
        <div className="box">About</div>
      </Link>
      <Link class="Lnkstyl" to="Skills">
        <div className="box">Skills</div>
      </Link>
    </div>
  );
}

import React, {Component} from "react";
import { Link } from "react-router";

class Navbar extends Component {
    render() {
        return (
<nav className="navbar navbar-toggleable-md navbar-light bg-primary">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <a className="navbar-brand" href="/">
    <img src="/images/S-Official.jpg" width="32" height="32" className="d-inline-block align-top" alt="S"/>
    &nbsp;Strybo
  </a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <button className="btn bg-inverse text-muted" title="Click to Sign Up">Sign Up</button>
      </li>
      <li className="nav-item">
        <a type="button" className="nav-link btn bg-inverse text-muted" href="/account">Account</a>
      </li>
      &nbsp;
      <li className="nav-item">
        <button className="btn bg-inverse text-muted" title="Click to Log In">Log In</button>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}

export default Navbar;

  // <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <Link className="navbar-brand" to="/">Quotes App</Link>
  //     </div>
  //     <ul className="nav navbar-nav">
  //       <li className={location.pathname === "/" && "active"}>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li className={location.pathname === "/favorites" && "active"}>
  //         <Link to="/favorites">Favorites</Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>

import React, {Component} from "react";
import { Link } from "react-router";

class Navbar extends Component {
    render() {
        return (
<div>

  <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter email address!" required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Please enter password!" required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword2">Confirm Password (not working yet)</label>
    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Please confirm password (not working yet)!" required/>
  </div>
  <div className="text-center">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="logInModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Log In</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter email address!" required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Please enter password!" required/>
  </div>
  <div className="text-center">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
        </div>
      </div>
    </div>
  </div>

  <nav className="navbar navbar-toggleable-md navbar-light bg-primary">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <a className="navbar-brand" href="/">
      <img src="/images/S-Official.jpg" width="32" height="32" className="d-inline-block align-top" alt="S"/>
      &nbsp;Strybo
    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <br/>
        <li className="nav-item">
          <a type="button" className="nav-link btn bg-inverse text-muted" title="Click to Sign Up" data-toggle="modal" data-target="#signUpModal">Sign Up</a>
        </li>
        <li className="nav-item">
          <a type="button" className="nav-link btn bg-inverse text-muted" title="Click to View Account" href="/account">Account</a>
        </li>
        &nbsp;
        <li className="nav-item">
          <a type="button" className="nav-link btn bg-inverse text-muted" title="Click to Log In" data-toggle="modal" data-target="#logInModal">Log In</a>
        </li>
        <li className="nav-item">
          <a type="button" className="nav-link btn bg-inverse text-muted" title="Click to Log Out" href="/logout">Log Out</a>
        </li>
        &nbsp;
      </ul>
    </div>
  </nav>
</div>
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

      // <ul className="navbar-nav mr-auto">
      //   <li className="nav-item">
      //     <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      //   </li>
      // </ul>
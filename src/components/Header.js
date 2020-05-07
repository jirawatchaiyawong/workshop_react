import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    //ทำการเพื่อน
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    const style = { height: 70 };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ">
            <h1 className="text-success mt-3">
              <img style={style} src="/images/logo/star.png" alt="20" />
              Ss Shop
            </h1>
            <div className="col-md-4 text-right">
            <nav className="navbar navbar-expand-lg navbar-light bg-black text-right">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="nav-link"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "red" }}
                  className="nav-link"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        </div>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-3">
              {this.state.date.toLocaleTimeString()}
            </h5>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Header;

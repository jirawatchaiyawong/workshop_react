import React, { Component } from "react";

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

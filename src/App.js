import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Card from "./components/card/Card.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("https://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <h2 style={{ "margin-bottom": 130 }}>
          apiResponse: {this.state.apiResponse}
        </h2>
        <Card />
      </div>
    );
  }
}

export default App;

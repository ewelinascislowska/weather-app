import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: "",
  };
  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=c5af245c3753ad207b5ff33589177de1&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("nie udalo sie");
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleDateString();
        this.setState({
          error: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: this.state.value,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          city: this.state.value,
        });
      });
  };
  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div className="bg">
        <div className="App">
          <Form
            value={this.state.value}
            change={this.handleInput}
            submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </div>
    );
  }
}
export default App;

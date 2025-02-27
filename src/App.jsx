import logo from "./logo.svg";
import "./App.css";
//import Link from "./shared/Link";
import ListGroup from "./shared/ListGroup";
import ListItem from "./shared/ListItem";
import Button from "./shared/Button";
import JokesList from "./components/JokesList";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [
        "WARNING HIGH CUBE",
        "CRACK A SMILE COME ON STAY AWHILE",
        "AMERICAN MOTOR SPORTS (420CC EDITION)",
      ],
      album: "",
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInput = (event) => {
    this.setState({ album: event.target.value });
  };

  addAlbum = (event) => {
    event.preventDefault();

    this.setState({
      albums: [...this.state.albums, this.state.album],
      album: "",
    });
  };

  removeAlbum = (selectedAlbum) => {
    let updatedAlbums = this.state.albums.filter(
      (album) => album !== selectedAlbum
    );
    this.setState({ albums: updatedAlbums });
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.text],
      text: "",
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Nicolas Barrows</h1>
            <p>
              <i>Personal top albums of 2025</i>
            </p>
            <ListGroup>
              {this.state.albums.map((name, idx) => {
                return (
                  <ListItem key={name + idx}>
                    <span>{name}</span>
                    <Button
                      className="square"
                      onClick={(event) => this.removeAlbum(name)}
                    >
                      X
                    </Button>
                  </ListItem>
                );
              })}
            </ListGroup>
          </div>
          <div>
            <form onSubmit={this.addAlbum}>
              <label htmlFor="task">Add New Album</label>
              <input
                type="text"
                name="username"
                id="task"
                value={this.state.task}
                onChange={this.handleInput}
              />
              <Button type="submit">Test</Button>
            </form>
          </div>

          <div>
            <h1>Hello World!</h1>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="text"
                value={this.state.text}
                onChange={(event) => {
                  this.setState({ text: event.target.value });
                }}
              ></input>
              <Button type="submit">Add</Button>
            </form>
            <ul>
              {this.state.list.map((item, idx) => {
                return <li key={item + idx}>{item}</li>;
              })}
            </ul>
          </div>

          <div>
            <JokesList></JokesList>
          </div>
          <img src={logo} alt="React logo" width="100" height="100" />
        </header>
      </div>
    );
  }
}

export default App;

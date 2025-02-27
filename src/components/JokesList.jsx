import React, { Component } from "react";
import ListGroup from "../shared/ListGroup";
import ListItem from "../shared/ListItem";

class JokesList extends Component {
  constructor(props) {
    super(props);
    this.state = { jokes: ["test"], joke: "" };
  }

  componentDidMount() {
    this.getJokes();
  }

  getJokes() {
    const nJokes = "10";
    const url = `https://official-joke-api.appspot.com/jokes/random/${nJokes}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const jokesArray = json.map(
          (joke) => `${joke.setup} ${joke.punchline}`
        );
        this.setState({ jokes: jokesArray });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <ListGroup type="ul">
        {this.state.jokes.map((name, idx) => {
          return <ListItem key={name + idx}>{name}</ListItem>;
        })}
      </ListGroup>
    );
  }
}

export default JokesList;

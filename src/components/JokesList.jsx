import { useState, useEffect } from "react";
import ListGroup from "../shared/ListGroup";
import ListItem from "../shared/ListItem";

function JokesList(props) {
  let [list, setList] = useState([]);

  useEffect(() => {
    getJokes(10);
  }, []);

  function getJokes(numberOfJokes) {
    const url = `https://official-joke-api.appspot.com/jokes/random/${numberOfJokes}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const jokesArray = json.map(
          (joke) => `${joke.setup} ${joke.punchline}`
        );
        setList(jokesArray);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <ListGroup type="ul">
      {list.map((name, idx) => {
        return <ListItem key={name + idx}>{name}</ListItem>;
      })}
    </ListGroup>
  );
}

export default JokesList;

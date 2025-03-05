import { useState, useEffect } from "react";
import ListGroup from "../shared/ListGroup";
import ListItem from "../shared/ListItem";
import { filterJokesByType } from "../helpers/joke.helpers";
import { getListOf } from "../helpers/joke.helpers";

export function JokesPage(props) {
  let [list, setList] = useState([]);
  let [searchJokeType, setSearchJokeType] = useState("");

  useEffect(() => {
    getJokes(100);
  }, []);

  function getJokes(numberOfJokes, jokeType) {
    const url = `https://official-joke-api.appspot.com/jokes/random/${numberOfJokes}`;
    //const types = "https://official-joke-api.appspot.com/types"
    fetch(url)
      .then((res) => {
        //console.log(res.json());
        return res.json();
      })
      .then((json) => {
        let jokesArray = [];
        jokesArray = json.map((joke) => ({
          joke: `${joke.setup} ${joke.punchline}`,
          type: joke.type,
        }));
        setList(jokesArray);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let jokesByType = filterJokesByType(list, searchJokeType);
  let jokeType = getListOf(list, "type");

  return (
    <div className="App">
      <div>
        <h1>Nicolas Barrows</h1>
        <p>
          <i>A List of Funnies</i>
        </p>
      </div>{" "}
      <form>
        <div className="form-group">
          <label htmlFor="jokeSelector">Joke Type</label>
          <select
            id="jokeSelector"
            value={searchJokeType}
            onChange={(option) => {
              setSearchJokeType(option.target.value);
            }}
          >
            <option value="">All</option>
            {jokeType.map((value, idx) => {
              return (
                <option value={value} key={idx}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <ListGroup type="ul">
        {jokesByType.map((name, idx) => {
          return (
            <ListItem key={idx} className="wide-item">
              {name.joke}
            </ListItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

import "../App.css";
import ListItem from "../shared/ListItem";
import ListGroup from "../shared/ListGroup";
import Button from "../shared/Button";
import { React, useState } from "react";

export function HomePage(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function removeFromList(itemToRemove) {
    let updatedList = list.filter((item) => item !== itemToRemove);
    setList(updatedList);
  }

  function onSubmit(event) {
    event.preventDefault();
    setList([...list, text]);
    setText("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Nicolas Barrows</h1>
          <p>
            <i>React List Project</i>
          </p>
        </div>

        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            ></input>
            <Button type="submit">Add</Button>
          </form>
          <ListGroup>
            {list.map((item, idx) => {
              return (
                <ListItem key={item + idx}>
                  <span>{item}</span>
                  <Button
                    className="square"
                    onClick={(event) => removeFromList(item)}
                  >
                    X
                  </Button>
                </ListItem>
              );
            })}
          </ListGroup>
        </div>

        <div>
        </div>
      </header>
    </div>
  );
}

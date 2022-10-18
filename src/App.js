
import './App.css';
import ListItem from "./components/list/ListItem";
import {useState} from "react";
import Error from "./components/notifications/Error";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  return (
      <div className="App">
        <h1>Seznam</h1>
        <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
          {inputValue?.length < 5 && <Error error="Bad input" message="It has to be longer than 5 chars"/>}
          <select onChange={(e) => {
              setSelectedColor(e.target.value);
          }}>
              <option selected disabled>Choose color</option>
              <option value="violet">Violet</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
          </select>
        <button onClick={(e) => {
            items.push({'title': inputValue, 'color': selectedColor, 'completed' : false});
            setItems([...items]);
        }} disabled={inputValue.length < 5}>Vlož</button>
          {items.map((item, index) =>
              <ListItem onButtonClick={(indexOfObject) => {
                  items[indexOfObject].completed = !items[indexOfObject].completed
                  setItems([...items])
              }} item={item} key={index} index={index}/>)}
      </div>
  );
}

export default App;

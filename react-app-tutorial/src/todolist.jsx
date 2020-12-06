import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [inputList, set] = useState("");
  const [items, setItem] = useState([]);
  const itemEvent = (event) => {
    set(event.target.value);
  };

  const list = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList]
    });
    set("");
  };

  const deleteItem = (no) => {
    setItem((oldItems) => {
      return oldItems.filter ( (arritem, index) => {
          return index !== no;
      });
    });
  };

  // let arr= ['a', 'b', 'c'];
  // let time = "Who are you 👍";
  // const newTime = () => {
  //         arr = [...arr, `${document.getElementById("in").value}`]
  //     b(arr);
  //   console.log(arr);
  // };
  // const newTimeTwo = () => {
  //     time ="Now you click double 🥇";
  //     b(time);
  // }

  // setInterval(newTime, 100);
  return (
    <>
      <h1> To do list </h1>
      <input
        id="in"
        placeholder="Enter your data here"
        onChange={itemEvent}
        value={inputList}
      ></input>
      <button onClick={list}>Add here!</button>
      <ul>
        {items.map((itemval, index) => {
          return (
            <>
              <li>{itemval}</li>
              <button onClick={() => {
                deleteItem(index)
              }}>*</button>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default App;

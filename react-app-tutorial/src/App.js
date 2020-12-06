import React, { useEffect, useState } from "react";
import axios from "axios"

const App = () => {
  const [num, setNum] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.post(
        `https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
    }

    getData();
  })
  return (
    <>
      <h1> You choose {num} </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default App;

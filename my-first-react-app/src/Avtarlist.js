import React from "react";

const Avtarlist = (props) => {
    return (
  <div className="avtarstyle ma4 bg-light-green dib pa4 tc grow shadow-4">
    <img src="https://source.unsplash.com/collection/190727/250x350" alt="Avtar" />
    <h1 className=""> {props.name} </h1>
    <p> {props.work} </p>
  </div>
    );
};

export default Avtarlist;
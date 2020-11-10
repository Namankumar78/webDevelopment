import React from "react";
import Avtarlist from "./Avtarlist";
import "./Demo.css";
import 'tachyons';

const Avtar = (props) => {

  const avtararraylist = [
    {
      id: 1,
      name: "Naman1",
      work: "dev1"
    },
    
    {
      id: 2,
      name: "Naman2",
      work: "dev2"
    },
    
    {
      id: 3,
      name: "Naman3",
      work: "dev3"
    },
    
    {
      id: 4,
      name: "Naman4",
      work: "dev4"
    }
  ]

  const arraycard = avtararraylist.map((avatarcard, i) => {
    return(
    <Avtarlist id = {avtararraylist[i].id} name = {avtararraylist[i].name} work = {avtararraylist[i].work}/>
    )
  })

  return (
    <div>
    <h1 className="avtarone ma4 tc">This is the website</h1>
    {arraycard}
    <button>Test</button>
    </div>
  );
};

export default Avtar;

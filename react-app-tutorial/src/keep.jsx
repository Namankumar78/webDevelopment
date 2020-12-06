import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Note } from "@material-ui/icons";

const App = () => {

    const [addItem, setAddItem] = useState([]);    

const [note, setNote] = useState({
        title: "title",
        content: "",
});

const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const{name, value} = event.target;
    setNote((prevData) => {
        return {
            ...prevData,
            [name]: value,
        }
    })
}

const notecomp = () => {
    return (
      <>
        <div className="note">
    <h1>{}</h1> <br />
          <p>This is content</p>
          <Button className="btn">
            <DeleteOutlineIcon className="deleteIcon" />
          </Button>
        </div>
      </>
    );
  };

const addNote = (note) => {

    setAddItem((prevData) => {
        return[...prevData, note];
    });
}

  return (
    <>
      <form>
        <input type="text" placeholder="Title" name= "title" value={note.title} onChange={InputEvent}/>
        <textarea row="" column="" name = "content" placeholder="Write a note..." value={note.content} onChange={InputEvent}/>
        <Button onClick={addNote}>
          <AddIcon />
        </Button>
      </form>
      {notecomp()}
     { addItem.map((val, index) => {
          return <Note
          key= {index}
          id= {index}
          title= {val.title}
          content= {val.content}
          />
      })}
    </>
  );
};

export default App;

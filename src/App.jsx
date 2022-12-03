import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [noteList, setNoteList] = useState([]);

  function handleAddNote(newNote){
    setNoteList((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  function handleNoteDelete(id){
    setNoteList((prevNoteList) => {
      return prevNoteList.filter((note,index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app">
      <Header />
      <CreateArea 
        handleAdd={handleAddNote}
      />
      {noteList.map((noteItem,index) =>
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          handleDelete={handleNoteDelete}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

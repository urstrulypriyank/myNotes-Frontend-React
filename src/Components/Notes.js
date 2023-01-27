import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNotes } = context;
  // eslint-disable-next-line
  return (
    <>
    <AddNote/>
      <div className="container">
        <h2>Your Notes</h2>
        <ul>
          {notes.map((note) => {
            return <NoteItem note={note} key={note.date} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Notes;

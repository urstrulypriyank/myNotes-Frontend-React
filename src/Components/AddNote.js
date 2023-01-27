// import React from 'react'
import React, { useContext,useState } from "react";
import noteContext from "../context/notes/NoteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote}  = context;
  const [note,setNote] = useState({title:"",description:""})
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description);
  };
  const onChange = (e) => {
   
    setNote({...note,[e.target.name]: e.target.value})
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          onChange={onChange}
        />
        <div id="emailHelp" className="form-text">
          Your notes are secured and encrypted.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Notes Body{" "}
        </label>
        <textarea
          type="text-area"
          className="form-control"
          id="desc"
          name="description"
          onChange={onChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-center "
        onClick={handleClick}
      >
        Add Notes
      </button>
    </form>
  );
};

export default AddNote;

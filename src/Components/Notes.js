import React,{useContext} from 'react'
import noteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(noteContext);
  const { notes,setNotes} = context;
    // eslint-disable-next-line
  return (
    <div className="container">
  <h2>Your Notes</h2>
  <ul>

    {notes.map((note) => {
      return <NoteItem note={note}/>
    
      
    })}
    </ul>
</div>
  )
}

export default Notes
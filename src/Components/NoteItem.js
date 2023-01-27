import React, { useContext } from 'react'
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote} =context
    const {title,description,id}= props.note;
    const note = props.note;
    return (

   <>
    


    <div className="card text-white bg-dark mb-3 container-fluid" style={{"maxWidth": "90vw"}} key={id}>
  {/* <div className="card-header">{tag}</div> */}
  <div className="card-body">
    <h3 className="card-title    ">{title}</h3>
    <p className="card-text">{description}</p>
  </div>
  <div className="container text-center">

  <i className="bi bi-trash " onClick={()=>{deleteNote(note._id)}}></i>
  <i className="bi bi-pencil-square "></i>   
  </div>
</div>
   </>
  )
}

export default NoteItem     
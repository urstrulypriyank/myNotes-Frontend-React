import React from 'react'

const NoteItem = (props) => {
    console.log(props)    
    const {title,description,tag}= props.note;
    return (

   <>
    {/* <h2>{title}</h2>
    <p>{description}</p> */}


    <div className="card text-white bg-dark mb-3 container-fluid" style={{"max-width": "18rem;"}}>
  {/* <div className="card-header">{tag}</div> */}
  <div className="card-body">
    <h3 className="card-title    ">{title}</h3>
    <p className="card-text">{description}</p>
  </div>
</div>
   </>
  )
}

export default NoteItem
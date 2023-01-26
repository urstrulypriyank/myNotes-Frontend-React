import React, {useContext,useEffect}from 'react'
import noteContext from '../context/notes/NoteContext';


const About = () => {
  const a = useContext(noteContext);
  
  
  return (
    <div>This is about {a.state.name} and he is in sem {a.state.class}</div>
  )
}

export default About
import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
    // eslint-disable-next-line
    const notesInitial = [
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of linux hi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsoricing and customization ",
          "tag": "Genreal",
          "date": "2023-01-25T11:31:19.044Z",
          "__v": 0
        },
        {
          "_id": "63d24db66d9ee99531721779",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel  ",
          "tag": "Genreal",
          "date": "2023-01-26T09:53:58.772Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2023-01-26T09:54:23.981Z",
          "__v": 0
        },
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of linux ricing and customization ",
          "tag": "Genreal",
          "date": "2023-01-25T11:31:19.344Z",
          "__v": 0
        },
        {
          "_id": "63d24db66d9ee99531721779",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel  ",
          "tag": "Genreal",
          "date": "2023-01-26T09:53:58.478Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2023-01-26T05:54:23.983Z",
          "__v": 0
        },
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of linux ricing and customization ",
          "tag": "Genreal",
          "date": "2023-01-25T01:31:19.044Z",
          "__v": 0
        },
        {
          "_id": "63d24db66d9ee99531721779",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel  ",
          "tag": "Genreal",
          "date": "0023-01-26T09:53:58.778Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also hi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also ",
          "tag": "Genreal",
          "date": "2023-21-26T09:54:23.983Z",
          "__v": 0
        },
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyhi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsoank rai and in this tutorial i wll going to teach you basic of linux ricing and customization ",
          "tag": "Genreal",
          "date": "2023-01-23T11:31:19.044Z",
          "__v": 0
        },
        {
          "_id": "63d24db66d9ee99531721779",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel  ",
          "tag": "Genreal",
          "date": "2223-01-26T09:53:58.778Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2033-01-26T09:54:23.983Z",
          "__v": 0
        },
      ];
      // eslint-disable-next-line
      const [notes,setNotes] = useState(notesInitial);
      
      
      // Add a Note

      let addNote = (title,description) =>{
        
        let note = {
          "_id": "63d24dcf6d9sdfdsf177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading added",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2033-01-26T09:54:23.983Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      // Delete Notes
      let deleteNote = (id) =>{
          console.log("deleting note with id",id)
          let newNotes = notes.filter((note)=>{return note._id!==id})
          setNotes(newNotes)
      }
      // Edit Notes 
      let editNote = () =>{

      }
      


    return (
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>{props.children}</noteContext.Provider>
    )
}
export default NoteState;

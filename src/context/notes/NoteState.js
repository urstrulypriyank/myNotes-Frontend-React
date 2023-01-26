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
          "date": "2023-01-26T09:53:58.778Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2023-01-26T09:54:23.983Z",
          "__v": 0
        },
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of linux ricing and customization ",
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
          "date": "2023-01-26T09:53:58.778Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2023-01-26T09:54:23.983Z",
          "__v": 0
        },
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of linux ricing and customization ",
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
          "date": "2023-01-26T09:53:58.778Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also hi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also ",
          "tag": "Genreal",
          "date": "2023-01-26T09:54:23.983Z",
          "__v": 0
        },
        {
          "_id": "63d113078b422034ccc41684",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux Customization and productivity",
          "description": "hi this is priyhi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsohi this is priyank rai  and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools alsoank rai and in this tutorial i wll going to teach you basic of linux ricing and customization ",
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
          "date": "2023-01-26T09:53:58.778Z",
          "__v": 0
        },
        {
          "_id": "63d24dcf6d9ee9953172177b",
          "user": "638b3a53d3b865e761b88b80",
          "title": "Linux parallel downloading 2",
          "description": "hi this is priyank rai and in this tutorial i wll going to teach you basic of parallel downloading using axel and some people use other tools also  ",
          "tag": "Genreal",
          "date": "2023-01-26T09:54:23.983Z",
          "__v": 0
        },
      ];
      // eslint-disable-next-line
      const [notes,setNotes] = useState(notesInitial);
    return (
        <noteContext.Provider value={{notes,setNotes}}>{props.children}</noteContext.Provider>
    )
}
export default NoteState;

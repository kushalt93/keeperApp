import React from "react";
import Title from "./header";
import Footer from "./footer";
import Notes from "./notes";
import NoteArray from "../notes"


function App() {
    return(
        <div>
            <Title /> 
            {NoteArray.map(noteItem =>  <Notes key = {noteItem.key} title = {noteItem.title} content = {noteItem.content} />)}
            <Footer />
        </div>
    );
}

export default App
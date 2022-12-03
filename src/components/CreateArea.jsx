import React, { useState } from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNewNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    function add(event){
        event.preventDefault();
        props.handleAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form onSubmit={add}>
                <input name="title" placeholder="Title" onChange={handleChange} value={newNote.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={newNote.content} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

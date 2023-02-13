import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter text here")

    const UppcaseHandler = () => {
        console.log("uppercase");
        let new_text = text.toUpperCase();

        setText(new_text);
    }

    const OnChangeHandler = (event) => {
        console.log("OnChangeHandler");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <label className="form-label">Example textarea</label>
                        <textarea className="form-control" value={text} onChange={OnChangeHandler} id="mybox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={UppcaseHandler} >UpperCase</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Text Summary.</h1>
                <p> {text.split(" ").length} words, {text.length}  characters</p>
            </div>
        </>
    )
}
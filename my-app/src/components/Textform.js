import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter text here")

    const UppcaseHandler = () => {
        console.log("uppercase");
        let new_text = text.toUpperCase();
        props.showAlert('Uppercase', "success");
        setText(new_text);
    }

    const OnChangeHandler = (event) => {
        console.log("OnChangeHandler");
        setText(event.target.value);
    }
    const clearText = () => {
        console.log("clearText");
        let new_text = "";

        setText(new_text);
        props.showAlert('Clean', "success");
    }
    return (
        <>
            <div className="container my-3">
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <label className="form-label">Example textarea</label>
                        <textarea className="form-control" value={text} onChange={OnChangeHandler} id="mybox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={UppcaseHandler} >UpperCase</button>
                    <button className="btn btn-dark mx-2" onClick={clearText} >Clear</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Text Summary.</h1>
                <p> {text.length===0?0:text.split(" ").length} words, {text.length}  characters</p>
            </div>
        </>
    )
}
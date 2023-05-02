import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClearText=()=>{
    setText("");
  }

const defaultChange=()=>{
    if(text.trim()===""){
        return 0;
    }
    return text.split(" ").length;
}
  const [text, setText] = useState("");
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" style={{backgroundColor: props.mode==='dark'?'#124146':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>
        Clear text
      </button>
      <div className="container my-3"
      style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary!</h1>
        <p>
          {defaultChange()} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something int the textbox to preview it here"}</p>
      </div>
    </div>
  );
}
export default TextForm;

import React, { useState } from 'react';

export default function TextForm(props)  {

    const [text,setText] = useState('');
    
    const handleOnChange =(event) =>{
        setText(event.target.value)
    }
    const validateTerxtarea = () =>{
        
        if(text.trim() === ""){
            props.showAlert("Please write something", "info")
            
            
        }
    }
    const handleOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UPPERCASE" , "success")
        validateTerxtarea()
        
    }
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase" , "success")
        validateTerxtarea()
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Cleared" , "warning")
        validateTerxtarea()
    }

    const handleCopy = () =>{
        let text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied" , "success")
        validateTerxtarea()
    }
    
    

    return(
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" id='myText' placeholder='Enter Your Text' value={text} onChange={handleOnChange
}></textarea>
  <button className="btn btn-primary m-3 " onClick={handleOnClick}>Convert To Uppercase</button>
  <button className="btn btn-primary  m-3 " onClick={handleLowerClick}>Convert To Lowercase</button>
  <button className="btn btn-primary  m-3 " onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary  m-3 " onClick={handleCopy}>Copy </button>
  
  
</div>
</div>

<div className="container">
    <h1>Your Text Summary</h1>
    <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Words and {text.trim().length} Characters</p>
    
</div>
    </>
        )
}

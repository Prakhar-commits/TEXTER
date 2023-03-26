import React,{useState} from 'react'

// import PropTypes from 'prop-types'


export default function Textform(props) {
const [Text, setText] = useState("Enter Text here")
const [bold, setbold] = useState(false)
const handleOnChange = (event) =>{
    setText(event.target.value);
}

const handleUpClick = () =>{
  let newText = Text.toUpperCase();
  props.showAlert("Converted to Uppercase", "success");
  setText(newText);
}
const handleLoClick = () =>{
  let newText = Text.toLocaleLowerCase();
  props.showAlert("Converted to Lowercase", "success");
  setText(newText);
}

const handleBoldClick = ()=>{
  setbold(!bold)
}
console.log(bold)
// const handleCopyClick = () =>{
//  let newText = document.getElementById("Textbox");
//   Text.select();  
//   navigator.clipboard.writeText(Text.value);
//   setText(newText);
// }


const handleClearClick = () =>{
  let newText = ""
  setText(newText);
}
  return (
    <>
  <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.title}</h2>
    <textarea className={`form-control ${bold?"fw-bold":''}`} value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} id="Textbox" rows="5"></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-success my-3 mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
    {/* <button className="btn btn-success my-3 mx-2" onClick={handleCopyClick} >Copy Text</button> */}
    <button className="btn btn-danger my-3 mx-2" onClick={handleClearClick} >Clear Text</button>
    <button className="btn btn-danger my-3 mx-2 " onClick={handleBoldClick} >Bold Text</button>
  </div>

  <div className="container"style={{color: props.mode==='dark'?'white':'black'}} >
    <h2>Your Text Summary</h2>
    <p>{Text.split(" ").length} words and {Text.length} characters</p>
  </div>
    
    </>
  )
}

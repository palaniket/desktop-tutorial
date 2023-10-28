import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+Text);
        let newtext=Text.toUpperCase();
        setText(newtext);
    }
    const handleDownClick=()=>{
        let newtext=Text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick=()=>{
      const newText='';
      setText(newText);
    }
    const handleCopyClick=()=>{
      const copyText=document.getElementById('exampleInputPassword1');
      copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(Text);

  // Alert the copied text
  // console.log( write);
  // setText(Text.value);
    }
    // const handleExtractorClick=()=>{
    //  const newText=Text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
    //         setText(newText);
    // }
    const Removespces=()=>{
      const newtext=Text.split(/[ ]+/);
      setText(newtext.join(" "));
    }
    

    const [Text, setText] = useState('Enter text here');
    // console.log(handleExtractorClick(Text));
   
    
   
  return (
    <>
   <div className="container">
    <div className="mb-3">
    <label for="exampleInputPassword1" className={`form-label text-${props.Mode==='light'?'dark':'light'}`}><h1>{props.text}</h1></label>
    <textarea type="password" className="form-control"  value={Text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}} id="exampleInputPassword1" rows="8"/>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>
    toUppercase
    </button>
    <button className="btn btn-primary mx-2" onClick={handleDownClick}>
    toLowercase
    </button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}> All clear</button>
    {/* <button className="btn btn-primary mx-2" onClick={handleExtractorClick}> Extract Email</button> */}
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}> Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={Removespces}> Remove extra spaces</button>
  </div>
  <div className={`container my-10 text-${props.Mode==='light'?'dark':'light'}`}>
    <h1>
        Your text summary is:

    </h1>
    <p>
        there are {Text.split(" ").length} words and {Text.length} characters
    </p>
    <p>{0.08*Text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{Text.length===0?'write something to preview it here':Text}</p>
  </div>
  </>
 
  
  
  )
}

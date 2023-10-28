import React ,{useState}from 'react'

export default function About() {
    const [Mystyle,setMysstyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
    const [btnText,setbtnText]=useState('Enable dark mode');
    const changer=()=>{
        if(Mystyle.color==='white'){
            setMysstyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText("Enable Light Mode");
            
            
        }
        else{
            setMysstyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnText("Enable Dark mode");
        }
        console.log(Mystyle.color);
        console.log(Mystyle.backgroundColor);
    }
  return (
    <>
    <div className='container'style={Mystyle}>
        <h1>About Us</h1>
        
    </div>
    <button className='btn btn-primary my-3 mx-5' onClick={changer}>{btnText}</button>
    </>
  )
}

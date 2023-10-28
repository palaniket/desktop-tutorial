
import react,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';







function App() {
     const [Mode,setMode]=useState('dark');
     const [alerts,setAlerts]=useState(null);
     const showAlert=(message,type)=>{
      setAlerts({
        msg:message,
        type:type
      })
      setTimeout(()=>{
         setAlerts(null);
      },3000);
     }
     const toggleMode=()=>{
      if(Mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#083981'
        showAlert("dark modes has been enabled","success");
        document.title='testreact-dark mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been enabled ","success");
        document.title='testreact-light mode';

      }
    }
  return (
    
    <>
     
    {/* <Router> */}

  <Navbar Mode={Mode} toggleMode={toggleMode}/>
  {/* <About/> */}
  <Alerts alert={alerts}/>
  {/* <Routes> */}
  
  
         {/* <Route exact path='/'element={<Textform Mode={Mode} text="Enter your text" />}/> */}
         {/* <Route exact path='/about' element={<About/>}/> */}
         <Textform Mode={Mode} text="Enter your text" />

          {/* </Routes> */}
       
    {/* </Router> */}
    </>
  );
}


export default App;

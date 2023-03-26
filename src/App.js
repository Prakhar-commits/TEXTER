
// import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import React,{useState} from 'react'

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
       })
       setTimeout(() => {
        setAlert(null)
       }, 3000);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has beeen enabled" , "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>

    <Navbar title = "Texter" mode={mode} toggleMode={toggleMode} about = "About" contact = "Contact"/>
    <Alert alert={alert}/>
   <div className="container my-3" >
    <Textform showAlert={showAlert}  title="Enter your Text" mode={mode}/>
   </div>
    </>
  );
}

export default App;

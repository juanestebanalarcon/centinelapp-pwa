import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import "../styles/inicio.css"
import { useNavigate } from 'react-router-dom';
export default function Layout(props) {
  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);
  const navigate = useNavigate();
    
    function inicio(e){ 
        e.preventDefault();
        navigate(`/login`)
    }
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <div className="App">
      <div className="inicio">
      <img classname="imgbtn" src='./images/inicio/logo.svg' onerror="this.onerror=null; this.src='logo.png'"  alt='home'/>
        <h1> CENTINELAPP</h1>
        {isReadyForInstall && (
          <Button type="submit" onClick={downloadApp} variant="contained" color="primary">Descargar</Button>
        )}
      

      <div>
      <Button type="submit" onClick={inicio} variant="contained" color="primary">Inicio</Button>
      </div>

    </div>
    </div>
  );
}
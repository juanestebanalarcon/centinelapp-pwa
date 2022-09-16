import React, { useEffect } from "react";

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
      <header>
        <h1> PWA</h1>
        {isReadyForInstall && (
          <button onClick={downloadApp}> Descargar </button>
        )}
      </header>

      <div>
      <button onClick={inicio}> Inicio</button>
      </div>

    
    </div>
  );
}
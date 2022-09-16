import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/app.css"
import { AppRouter } from "./Router";
import { store } from "./store";

function App() {
  // Botón de descarga en Layout
  return (

    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
   </Provider>
  
  );
}

export default App;
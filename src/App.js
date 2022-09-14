import { Layout} from "./components";
import { Routes, Route } from "react-router-dom";
import { AddUsuario } from "../src/components/views/addUsuarioAdm"
import { AddUsuarioFicha } from "../src/components/views/addUsuarioScout"
import { AddRama } from "../src/components/views/addRama"
import { Home } from "../src/components/views/home"
import { Login } from "../src/components/views/login"
import "../src/styles/app.css"
import { AddUsuarioIniSc } from "./components/views/addUsuarioSc";
import { AddUsuarioIniAd } from "./components/views/addUsuarioAd";
function App() {
  // Botón de descarga en Layout
  return (

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/addAdministrador" element={ <AddUsuario/> }/>
                <Route path="/addRama" element={ <AddRama/> }/>
                <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
                <Route path="/addUserAd" element={ <AddUsuarioIniAd/>}/>
                <Route path="/addUserSc" element={ <AddUsuarioIniSc/>}/>
      </Routes>
  
  );
}

export default App;
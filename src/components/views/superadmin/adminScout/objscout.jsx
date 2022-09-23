import { Navbar } from "../../../navbar"
import "../../../../styles/styles.css"
import { Header } from "../../../header"

import { useNavigate } from 'react-router-dom';

export const ObjScout= ({scout})=>{

    const navigate = useNavigate();

    function redireccion(e){ 
        e.preventDefault();
        navigate(`/scout/${scout._id}`)
    }
    
    return(
    <div className="conten-linea">
        <h3>{`${scout.nombre} ${scout.apellido}` }</h3>
        <button onClick={redireccion}>vermas</button>
                        
                   
    </div>
            
    )
}
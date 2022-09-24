import "../../../../styles/styles.css"
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
        <button onClick={redireccion}><img src="https://i.ibb.co/pQPsNw6/akar-icons-more-horizontal.png" alt="akar-icons-more-horizontal" border="0"/></button>
        
    </div>
            
    )
}
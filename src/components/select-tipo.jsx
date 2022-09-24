
import '../styles/input.css'
export function Select(props){


    

    return(
        <div className='input'>
            <select id={props.id} className='cajon-select' placeholder={props.placeholder} name={props.name}>
                <option value="">Seleccione una rama</option>
                <option value="0">Super-Administrador</option>
                <option value="1">Administrador</option>
                <option value="2">Scout</option>
                <option value="3">Acudiente</option>
                   
                    
                
            </select>
    
        </div>
    
    )
}
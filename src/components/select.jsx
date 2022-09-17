import { useSelector } from 'react-redux';
import '../styles/input.css'
export function Select(props){

    const { ramas } = useSelector( state => state.rama );

    return(
        <div className='input'>
            <select id={props.id} className='cajon-select' placeholder={props.placeholder}>
                <option value="">Seleccione una rama</option>
                {
                    ramas.map(rama => {
                        return(
                            <option value={rama._id}>{ rama.nombre }</option>
                        )
                    })
                }
            </select>
    
        </div>
    
    )
}
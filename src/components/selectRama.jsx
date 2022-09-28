import { useSelector } from 'react-redux';
import '../styles/input.css'
export function SelectRama(props){

    const { ramas } = useSelector( state => state.rama );

    return(
        <div className='input' id={props.idcls}>
            <select id={props.id} className='cajon-select' placeholder={props.placeholder} name={props.nombre} onChange={props.onChange}>
                <option value="">Ver todos</option>
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
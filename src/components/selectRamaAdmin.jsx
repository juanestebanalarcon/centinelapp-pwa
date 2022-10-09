import { useSelector } from 'react-redux';
import '../styles/input.css'
export function SelectRamaAdmin(props) {

    const {ramasAdmin}=useSelector(state => state.admin)

    return (
        <div className='input' id={props.idcls}>
            <select id={props.id} key={props.id} className='cajon-select' placeholder={props.placeholder} name={props.nombre} >
                <option value="">Seleccione una rama</option>
                {
                    ramasAdmin.map(rama => {
                        return (
                            <option value={rama._id}>{rama.nombre}</option>
                        )
                    })
                }
            </select>

        </div>

    )
}
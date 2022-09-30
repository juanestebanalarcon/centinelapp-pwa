import { useSelector } from 'react-redux';
import '../styles/input.css'
export function SelectScout(props) {

    const { scouts } = useSelector(state => state.scout);

    return (
        <div className='input'>
            <select id={props.id} className='cajon-select' placeholder={props.placeholder} name={props.nombre}>
                <option value="">Seleccione un scout</option>
                {
                    scouts.map(scout => {
                        return (
                            <option value={scout._id}>{scout.nombre}</option>
                        )
                    })
                }
            </select>

        </div>

    )
}
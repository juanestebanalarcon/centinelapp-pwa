import '../styles/input.css'
export function Select(props){
    return(
        <div className='input'>
            <select className='cajon-select' placeholder={props.placeholder}>
                <option value={props.option}>{props.option}</option>
            </select>
    
        </div>
    
    )
}
import '../styles/input.css'
export function Input(props){
    return(
        <div className='input'>
            <input className='cajon-input' placeholder={props.placeholder} type={props.type}>

            </input>
    
        </div>
    
    )
}
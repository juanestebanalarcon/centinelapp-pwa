import '../styles/evento.css'
export function Eventos(props){
    return(
        <div className='btn-event'>
        <button className='btn-event' onClick={props.onClick}>
            <div className='btn-event-s1'>
            <h2>{props.mes}</h2>
            <h2>{props.dia}</h2>
            </div> 
            <div className='btn-event-s2'>
            <h2>{props.nombre}</h2>
            </div> 
            </button>
        </div>
    
    )
}
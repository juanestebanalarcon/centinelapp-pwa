import '../styles/boton.css'
export function Boton(props){
    return(
        <div className='Boton'>
            <button className='cajon-boton'>
            <h4 className='boton-texto'>{props.texto}</h4>
            </button>
    
        </div>
    
    )
}
import '../styles/selectCreacion.css'
export function SelectCreacion(props){
    return(
        <div className='btn-select'>
        <button className='btn-select' onClick={props.onClick}>
            <div className='btn-select-s1'>
            <img classname="imgbtn" src='./images/navbar/home.svg' onerror="this.onerror=null; this.src='home.png'"  alt='home'/>
            </div> 
            <div className='btn-select-s2'>
            <h4>{props.nombre}</h4>
            </div> 
            </button>
        </div>
    
    )
}
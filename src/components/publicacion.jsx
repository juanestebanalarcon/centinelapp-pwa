import '../styles/publicacion.css'
export function Publicacion(props){
    return(
        <div className='btn-public'>
        <button className='btn-public' onClick={props.onClick}>
            <div className='btn-public-s1'>
            <h2>{props.titulo}</h2>
            </div> 
            <div className='btn-public-s2'>
            <div className='conte-publicacion'>
                <h3>{props.conte}</h3>
            </div>
            <div className='sub-conte-gen'>
            <div className='sub-conte-1'>
            <img classname="imgbtn" src='./images/publicacion/persona.svg' onerror="this.onerror=null; this.src='persona.png'"  alt='home'/>
 
            <h3>{props.persona}</h3>
            </div>
            <div className='sub-conte-2'>
            <img classname="imgbtn" src='./images/publicacion/calendar.svg' onerror="this.onerror=null; this.src='calendar.png'"  alt='home'/>
            <h3>{props.calendario}</h3>
            </div>
            </div>
           
            </div> 
            </button>
        </div>
    
    )
}
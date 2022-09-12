
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';
export function Navbar(){
    const navigate = useNavigate();
    
    function home(e){ 
        e.preventDefault();
        navigate(`/home`)
    }
    return(
        <div className='App'>
    
        <div className="Navbar">
        <div className='Iconos-Navbar'>
            <div className="home" href="/home">
               <button onClick={home} className="btn-nav"> 
               <img src='./images/navbar/home.svg' alt='home'/>
               </button>
            </div>
            <div className="messages">
                
                <img src='./images/navbar/messages.svg' alt='mensaje'/>
            </div>
            <div className="calendar">
                
                <img src='./images/navbar/calendar.svg' alt='calendario'/>
            </div>
            <div className="person">
                
                <img src='./images/navbar/person.svg' alt='persona'/>
            </div>
            </div>
            
            
        </div>
        </div>
    
    )
}
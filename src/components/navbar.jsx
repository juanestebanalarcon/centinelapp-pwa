
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
               <button onClick={home}> 
               <img src='./images/navbar/home.png' alt='home'/>
               </button>
            </div>
            <div className="messages">
                
                <img src='./images/navbar/messages.png' alt='mensaje'/>
            </div>
            <div className="calendar">
                
                <img src='./images/navbar/calendar.png' alt='calendario'/>
            </div>
            <div className="person">
                
                <img src='./images/navbar/person.png' alt='persona'/>
            </div>
            </div>
            
            
        </div>
        </div>
    
    )
}

import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';
export function Navbar(){
    const navigate = useNavigate();
    
    function home(e){ 
        e.preventDefault();
        navigate(`/home`)
    }

    function messages(e){ 
        e.preventDefault();
        navigate(`/publicaciones`)
    }
    return(
        <div className='App'>
    
        <div className="Navbar">
        <div className='Iconos-Navbar'>
            <div className="home" href="/home">
               <button onClick={home} className="btn-nav"> 
               <img src='./images/navbar/home.svg' onerror="this.onerror=null; this.src='home.png'"  alt='home'/>
               </button>
            </div>
            <div className="messages">
            <button onClick={messages} className="btn-nav"> 
            <img src='./images/navbar/messages.svg' onerror="this.onerror=null; this.src='messages.png'" alt='mensaje'/>
               </button>
                
                
            </div>
            <div className="calendar">
                
                <img src='./images/navbar/calendar.svg' onerror="this.onerror=null; this.src='calendar.png'" alt='calendario'/>
            </div>
            <div className="person">
                
                <img src='./images/navbar/person.svg' onerror="this.onerror=null; this.src='person.png'" alt='persona'/>
            </div>
            </div>
            
            
        </div>
        </div>
    
    )
}
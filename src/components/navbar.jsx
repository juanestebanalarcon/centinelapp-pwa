
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';
export function Navbar() {
    const navigate = useNavigate();

    function home(e) {
        e.preventDefault();
        navigate(`/home`)
    }

    function messages(e) {
        e.preventDefault();
        navigate(`/publicaciones`)
    }
    function perfil(e) {
        e.preventDefault();
        navigate(`/perfil`)
    }
    return (
        <div className='App'>

            <div className="Navbar">
                <div className='Iconos-Navbar'>
                    <div className="home" href="/home">
                        <button onClick={home} className="btn-nav">
                            <img src='https://i.ibb.co/Lry8W0s/ci-home-alt-fill-1.png' alt='home' />

                        </button>
                    </div>
                    <div className="messages">
                        <button onClick={messages} className="btn-nav">
                            <img src='https://i.ibb.co/8mmRVPn/jam-messages-f-1.png' onerror="this.onerror=null; this.src='messages.png'" alt='mensaje' />

                        </button>


                    </div>
                    <div className="calendar">

                        <img src='https://i.ibb.co/Q8CvB2v/calendar.png' alt='calendario' />
                    </div>
                    <div className="person">
                        <button onClick={perfil} className="btn-nav">
                            <img src='https://i.ibb.co/6wW5Q1m/bi-person-fill-2.png' alt='persona' />

                        </button>
                    </div>
                </div>


            </div>
        </div>

    )
}
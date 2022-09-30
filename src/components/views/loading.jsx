
import '../../styles/loading.css'
import LinearProgress from '@mui/material/LinearProgress';

export const Loading = () => {


    return (
        <div className="loading">
            <img classname="imgbtn" src='./images/inicio/logo.svg' onerror="this.onerror=null; this.src='logo.png'" alt='home' />
            <LinearProgress />
        </div>


    )
}
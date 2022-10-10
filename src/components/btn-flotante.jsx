import '../styles/boton-flotante.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export function BotonFlotante(props) {
    return (
        
        
            
              <Fab size="medium" color="secondary" aria-label="add" onClick={props.onClick} 
                style={{
                position: 'fixed',
                right: '5%',
                bottom: '10%',
                background: '#C1121F'

              }}>
                <AddIcon />
              </Fab>
              

    )
}
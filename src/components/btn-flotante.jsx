import '../styles/boton-flotante.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export function BotonFlotante(props) {
    return (
        
        
            
              <Fab size="medium" color="secondary" aria-label="add" onClick={props.onClick}>
                <AddIcon />
              </Fab>
              

    )
}
import '../styles/boton-flotante.css'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
export function BotonFlotanteEdit(props) {
    return (
        
        
            
              <Fab size="medium" color="secondary" aria-label="add" onClick={props.onClick} 
                style={{
                position: 'fixed',
                right: '5%',
                bottom: '10%',
                background: '#C1121F'

              }}>
                <EditIcon />
              </Fab>
              

    )
}
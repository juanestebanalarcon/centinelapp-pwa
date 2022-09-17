import { useSelector } from 'react-redux';
import '../styles/input.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export function Checkboxs(){

    const { ramas } = useSelector( state => state.rama );

    return(
        <div className='input'>
        <FormGroup>
        {
                    ramas.map(rama => {
                        return(
                            <FormControlLabel value={rama._id} control={<Checkbox/>} label={rama.nombre} />
                           
                        )
                    })
                }
      
    
    </FormGroup>
                    
               
         
    
        </div>
    
    )
}
import '../styles/calendar.css'
export function Calendar(props) {
    return (
        <div className='conte-calendar'>
          
                <div className='conte-calendar-s1'>
                    <h2>Desde</h2>
                    <div className='conte-ti-calendar'>
                    {props.mesinicio}
                    </div>
                    
                    <div className='conte-con-calendar'>
                    {props.diainicio}
                    </div>
                </div>
                <div className='conte-calendar-s2'>
                <h2>Hasta</h2>
                <div className='conte-ti-calendar'>
                    {props.mesfin}
                    </div>
                    
                    <div className='conte-con-calendar'>
                    {props.diafin}
                    </div>
                </div>
   
        </div>

    )
}
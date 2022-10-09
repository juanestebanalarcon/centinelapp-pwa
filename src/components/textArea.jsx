import '../styles/input.css'
export function TextArea(props) {
    return (
        <div className='input'>
            <textarea className='cajon-textArea' name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange} rows={props.rows} cols={props.cols}>

            </textarea>

        </div>

    )
}
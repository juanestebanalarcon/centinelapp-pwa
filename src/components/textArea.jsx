import '../styles/input.css'
export function TextArea(props) {
    return (
        <div className='input'>
            <textarea className='cajon-textArea' placeholder={props.placeholder} rows={props.rows} cols={props.cols}>

            </textarea>

        </div>

    )
}
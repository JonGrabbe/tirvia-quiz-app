export default function NavButtons(props) {
    return (
        <div className="nav-buttons-container">
            <button className="button" onClick={props.prev}>
                prev
            </button>
            <button className="button" onClick={props.next} disabled={props.question.isAnswered !== true} >
                next
            </button>
        </div>
    )
}
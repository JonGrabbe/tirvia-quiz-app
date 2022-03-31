export default function NavButtons(props) {
    return (
        <div className="nav-buttons-container">
            <button onClick={props.next}>
                next
            </button>
        </div>
    )
}
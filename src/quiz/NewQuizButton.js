export default function StartNewQuizButton(props) {
    return (
        <div className="start-new-quiz-container">
            <button className="new-quiz-button" onClick={props.handleClick}>
                Start new quiz
            </button>
        </div>
    );
}

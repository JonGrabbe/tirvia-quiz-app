export default function QuizInfo(props) {
    let position = props.currentQuiz.questions.length;
    return (
        <div className="quiz-info">
            <div className="info-item">
                {props.currentQuestionIndex + 1 + ' / ' + position}
            </div>
        </div>
    )
}
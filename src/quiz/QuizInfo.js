export default function QuizInfo(props) {
    let position = props.currentQuiz.questions.length;
    function getScore() {
        // returns how many questions were answered with correct answers so far
        let scoreNum = 0;
        props.currentQuiz.questions.forEach(item => {
            if(item.isCorrect) {
                scoreNum++
            }
        })
        return scoreNum;
    }
    let score = getScore() + ' / ' + position;
    return (
        <div className="quiz-info">
            <div className="info-item">
                {props.currentQuestionIndex + 1 + ' / ' + position}
            </div>
            <div className="info-item">
                {score}
            </div>
        </div>
    )
}
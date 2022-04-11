export default function QuizInfo(props) {
    let position = props.currentQuiz.questions.length;
    let arr = props.currentQuiz.questions;
    console.log(arr)
    function getScore() {
        // returns how many questions were answered with correct answers so far
        let scoreNum = 0;
        arr.forEach(item => {
            if(item.isCorrect && item.isAnswered) {
                scoreNum++
            }
        })
        return scoreNum;
    }
    let score = getScore() + ' / ' + position;
    let questionTypeMap = {
        "boolean": 'true or false',
        "multiple": 'multiple'
    }
    return (
        <div className="quiz-info">
            <div className="info-item">
                Question: {props.currentQuestionIndex + 1 + ' / ' + position}
            </div>
            <div className="info-item">
                Score: {score}
            </div>
            <div className="info-item">
                {/* category */}
                {props.questionObj.category}
            </div>
            <div className="info-item">
                Difficulty: {props.questionObj.difficulty}
            </div>
            <div className="info-item">
                Question type: {questionTypeMap[props.questionObj.type]}
            </div>
        </div>
    )
}
export default function QuizHistory(props) {
    return (
        <div className="quiz-history-container">
            <h2>Complete !</h2>
            <div>
                <div className="past-quizes-container">
                    <h3>Past quizes</h3>
                    <div className="past-quiz-item">
                        {
                        <div>
                            <span className="">
                                {
                                    "questions: " + props.currentQuiz.questions.length
                                }
                            </span>
                            <span className="">
                                {
                                    "questions: " + props.currentQuiz.questions.length
                                }
                            </span>
                        </div>
                        }
                    </div>
                </div>
                <div className="score-data">

                </div>
            </div>
        </div>
    )
}
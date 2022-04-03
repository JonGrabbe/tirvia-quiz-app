export default function QuizHistory(props) {
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
    let QuizScore = getScore();
    function getCategory() {
        // g
    }

    return (
        <div className="quiz-history-container">
            <h2>Complete !</h2>
            <div>
                <div className="last-quiz">
                    {/*  */}
                </div>
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
                                    "score: " + QuizScore + " / " + props.currentQuiz.questions.length
                                }
                            </span>
                            <Item val={category} />
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



function Item(props) {
    return (
        <span className="item">
            {props.val}
        </span>
    )
}



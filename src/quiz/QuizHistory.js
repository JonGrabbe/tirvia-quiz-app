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
        // returns the catergory of the quiz
        let prevItem;
        // props.currentQuiz.questions
    }

    return (
        <div className="quiz-history-container">
            <h2>Complete !</h2>
            <div className="wrapper">
                <div className="current-quiz-container">
                    <h3>Current quiz</h3>
                    <div className="tags-container">
                        <Item val={"score: " + QuizScore + " / " + props.currentQuiz.questions.length} />
                        <Item val={"questions: " + props.currentQuiz.questions.length} />
                        {/* <Item val={"Type: " + prop} /> */}
                    </div>
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



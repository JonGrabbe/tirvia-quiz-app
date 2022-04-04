export default function PastQuizes(props) {
    let quizes = props.history.map(item => {
        let questions = item.questions.length;
        let score = getScore()
        return <PastQuizItem questions={questions} />
    })
    return (
        <div className="past-quizes-container">
            <h3>Past quizes</h3>
            <div className="info-container">

            </div>
            {quizes}
        </div>
    )
}


function PastQuizItem(props) {
    return (
        <div className="past-quiz-item">
            <div>
                {props.questions}
            </div>
        </div>
    )
}
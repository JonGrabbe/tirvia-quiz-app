export default function PastQuizes(props) {
    let quizes = props.history.map(item => {
        let questions = item.questions.length;
        let score = item.score;
        let category = item.category;
        let type = item.type;
        return <PastQuizItem questions={questions} score={score} category={category} type={type} />
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
                questions: {props.questions}
            </div>
            <div>
                Score: {props.score}
            </div>
            <div>
                category: {props.category}
            </div>
            <div>
                Type: {props.type}
            </div>
        </div>
    )
}
import PastQuizes from "./PastQuizes/PastQuizes";

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
    function checkCommonProperty(propertyName) {
        // returns the catergory of the quiz
        let isSame = true;
        let propertyVal;
        for(let i = 1; i<props.currentQuiz.questions.length; i++) {
            let questions = props.currentQuiz.questions;
            let firstVal = questions[0][propertyName];
            let currentProperty = questions[i][propertyName];
            if(currentProperty !== firstVal) {
                isSame = false;
            }
        }
        if(isSame) {
            propertyVal = props.currentQuiz.questions[0][propertyName]
            return propertyVal
        } else {
            return false
        }
    }
    let category = checkCommonProperty("category");
    category = category ? category : 'any';
    let type = checkCommonProperty('type');
    type = type ? type : 'any';


    return (
        <div className="quiz-history-container">
            <h2>Complete !</h2>
            <div className="wrapper">
                <div className="current-quiz-container">
                    <h3>Current quiz</h3>
                    <div className="tags-container">
                        <Item val={"score: " + QuizScore + " / " + props.currentQuiz.questions.length} />
                        <Item val={"questions: " + props.currentQuiz.questions.length} />
                        <Item val={"Category: " + category} />
                        <Item val={"Question type: " + type } />
                    </div>
                </div>

                {
                    props.history.length > 0 ? <PastQuizes history={props.history} /> : null
                }
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


function getAverageScore(arr, propertyName) {
    function getScore(arr) {
        // returns the number of times the isCorrect propery equals true
        let num = 0;
        arr.forEach(item => {
            if(item.isCorrect) {
                num++
            }
        })
        return num;
    }
    function getAverage(arr) {
        let total = 0;
        arr.forEach(item => {
            total += getScore(item.questions)
        })
        return total
    }   
    let list = []
    arr.forEach(item => {
        list.push(getScore(item.questions))
    })
    let average = getAverage(list)
    console.log('average: ', list, average)
}






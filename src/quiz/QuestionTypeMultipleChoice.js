export default function QuestionTypeMultipleChoice(props) {

    return (
        <div className="question-container">
            {
                getAnswers(props.question).map(item => {
                    return <RadioButton value={item} label={item} handleChange={props.handleChange} />
                })
            }
        </div>
    )
}


function getAnswers(obj) {
   let answers = [];
   answers = [...answers, ...obj.incorrect_answers];
   let arrayLength = obj.incorrect_answers.length+1
   let randomNum = getRandomInt(0, arrayLength-1);
   answers.splice(randomNum, 0, obj.correct_answer);
   console.log(answers)
   return answers;
}


function RadioButton(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name="answers" id="flexRadioDefault1" value={props.value} onChange={props.handleChange} />
            <label className="form-check-label" htmlFor={props.value}>
                {props.value}
            </label>
        </div>
    )
}


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
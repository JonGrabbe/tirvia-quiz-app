import React from "react";
import CreateDangerousHtml from "../helper-functions/CreateDangerousHtml";

export default function QuestionTypeMultipleChoice(props) {

    return (
        <div className="question-container">
            <p className="question" dangerouslySetInnerHTML={CreateDangerousHtml(props.question.question)}></p>
            <div className="results-container">
                {props.question.isCorrect === true && props.question.isAnswered ? <ResultMessege isCorrect={true} /> : null}
                {props.question.isCorrect === false && props.question.isAnswered ? <ResultMessege isCorrect={false} message={props.question.correct_answer} /> : null}
                {/* {props.question.isCorrect} */}
            </div>
            {
                props.question.random_answers.map(item => {
                    return <RadioButton value={item} label={item} handleChange={props.handleChange} question={props.question} />
                })
            }
        </div>
    )
}

function ResultMessege(props) {
    // if true return correct message
    // if false return incorrect message with correct message
    if(props.isCorrect) {
        return (
            <div className="answer-result-container true">
                <p>correct</p>
            </div>
        )
    } else {
        return (
            <div className="answer-result-container true">
                <p>wrong</p>
                <p>correct answer: <span className="correct-answer-text" dangerouslySetInnerHTML={CreateDangerousHtml(props.message)}></span> </p>
            </div>
        )
    }
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


class RadioButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        this.checkRadioButton = this.checkRadioButton.bind(this);
    }

    checkRadioButton(e) {
       console.log('sdsdds')
    }


    render() {
        return (
            <div className="form-check answer-item main-element">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="answers" 
                    id={this.props.value} 
                    value={this.props.value} 
                    onChange={this.props.handleChange}
                    checked={this.props.question.userAnswer === this.props.value} 
                />
                <label className="form-check-label" htmlFor={this.props.value} dangerouslySetInnerHTML={CreateDangerousHtml(this.props.value)} >
                    
                </label>
            </div>
        )
    }
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
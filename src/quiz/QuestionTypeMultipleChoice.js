import React from "react";

export default function QuestionTypeMultipleChoice(props) {

    return (
        <div className="question-container">
            <p>{props.question.question}</p>
            {props.question.isCorrect === true ? <p>correct</p> : null}
            {props.question.isCorrect === false ? <p>incorrect</p> : null}
            {props.question.isCorrect}
            {
                props.question.random_answers.map(item => {
                    return <RadioButton value={item} label={item} handleChange={props.handleChange} question={props.question} />
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
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name={"answers"} 
                    id="flexRadioDefault1" 
                    value={this.props.value} 
                    onChange={this.props.handleChange}
                    checked={this.props.question.userAnswer === this.props.value} 
                />
                <label className="form-check-label" htmlFor={this.props.value}>
                    {this.props.value}
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
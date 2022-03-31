import React from "react";
import StartNewQuizButton from "./NewQuizButton";
import QuestionTypeMultipleChoice from "./QuestionTypeMultipleChoice";

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        
    }
    

    render() {
        let questionObj = this.props.currentQuiz.questions[this.props.currentQuestion];
        console.log(questionObj)
        return (
            <div className="quiz">
                <QuestionTypeMultipleChoice handleChange={this.props.checkAnswer} question={questionObj} />
                <StartNewQuizButton handleClick={this.props.newQuiz} />
            </div>
        )
    }
}
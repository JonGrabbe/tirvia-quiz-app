import React from "react";
import StartNewQuizButton from "./NewQuizButton";
import QuestionTypeMultipleChoice from "./QuestionTypeMultipleChoice";
import NavButtons from "../navbuttons/NavButtons";

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
                <NavButtons next={this.props.next} />
                <StartNewQuizButton handleClick={this.props.newQuiz} />
            </div>
        )
    }
}
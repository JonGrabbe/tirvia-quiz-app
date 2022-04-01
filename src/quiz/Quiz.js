import React from "react";
import StartNewQuizButton from "./NewQuizButton";
import QuestionTypeMultipleChoice from "./QuestionTypeMultipleChoice";
import NavButtons from "../navbuttons/NavButtons";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionObj: this.props.currentQuiz.questions[this.props.currentQuestion]
        }
    }

    componentDidUpdate(prevProps) {
        let currentProps = this.props.currentQuestion;
        let newProps = prevProps.currentQuestion;
        if(currentProps !== newProps) {

            this.setState({
                questionObj: this.props.currentQuiz.questions[this.props.currentQuestion]
            })
        }
    }

    render() {
        // let questionObj = this.props.currentQuiz.questions[this.props.currentQuestion];
        // console.log(questionObj)
        return (
            <div className="quiz">
                <QuestionTypeMultipleChoice handleChange={this.props.checkAnswer} question={this.state.questionObj} currentQuestion={this.props.currentQuestion} />
                <NavButtons next={this.props.next} />
                <button className="button check-answer-button">
                    check answer
                </button>
                <StartNewQuizButton handleClick={this.props.newQuiz} />
            </div>
        )
    }
}
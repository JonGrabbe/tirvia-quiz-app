import React from "react";
import StartNewQuizButton from "./NewQuizButton";
import QuestionTypeMultipleChoice from "./QuestionTypeMultipleChoice";
import NavButtons from "../navbuttons/NavButtons";

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
                <div className="">
                    <QuestionTypeMultipleChoice 
                        handleChange={this.props.checkAnswer} 
                        question={this.state.questionObj} 
                        currentQuestion={this.props.currentQuestion} 
                    />
                    <NavButtons next={this.props.next} prev={this.props.prev} question={this.state.questionObj} />
                    <button className="button check-answer-button" onClick={this.props.checkAnswer2}>
                        check answer
                    </button>
                    <StartNewQuizButton handleClick={this.props.newQuiz} />
                </div>
            </div>
        )
    }
}
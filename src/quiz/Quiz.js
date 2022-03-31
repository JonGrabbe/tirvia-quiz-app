import React from "react";
import StartNewQuizButton from "./NewQuizButton";

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quiz">
                hello
                <StartNewQuizButton handleClick={this.props.newQuiz} />
            </div>
        )
    }
}
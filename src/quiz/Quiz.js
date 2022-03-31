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
                {
                    this.props.currentQuiz.questions.map(item => {
                        return <p>{item.question}</p>
                    })
                }
                <StartNewQuizButton handleClick={this.props.newQuiz} />
                <button onClick={this.props.next}>
                    next
                </button>
            </div>
        )
    }
}
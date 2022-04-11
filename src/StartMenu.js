import React from "react";
import axios from "axios";

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            difficultyLevels: ['easy', 'medium', 'hard'],
            questionType: ['multiple', 'boolean']
            
        }
    }
    componentDidMount() {
        let getData = (data) => {
            this.setState({
                categories: data.data.trivia_categories
            })
        }
        axios.get('https://opentdb.com/api_category.php')
            .then(res => {
                console.log(res)
                getData(res)
            })
    }
    render() {
        return(
            <div className="start-menu-container container">
                <div className="start-menu-form-container row">
                    <Select handleChange={this.props.getCategoryId}>
                        <option value="">
                            category
                        </option>
                        {
                            this.state.categories.map(item => {
                                return <Option value={item.id} text={item.name} key={item.id} />
                            })
                        }
                    </Select>
                    <Select handleChange={this.props.getDifficulty}>
                        <option value="">
                            difficulty
                        </option>
                        {
                            this.state.difficultyLevels.map(item => {
                                return <Option value={item} text={item} key={item} />
                            })
                        }
                    </Select>
                    <Select handleChange={this.props.getQuestionType}>
                        <option value="">
                            Type of question
                        </option>
                        <Option value="multiple" text="multiple" key="multiple" />
                        <Option value="boolean" text="true or false" key="boolean" />
                            
                        
                    </Select>

                    <StartNewQuizButton handleClick={this.props.createQuiz} />
                </div>
            </div>
        );
    }
}


function Select(props) {
    return (
        <div className="col-md-4 select">
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={props.handleChange}>
                {props.children}
            </select>
        </div>
    );
}

function Option(props) {
    return (
        <option value={props.value}>
            {props.text}
        </option>
    )
}


function StartNewQuizButton(props) {
    return (
        <div className="start-new-quiz-container">
            <button className="new-quiz-button" onClick={props.handleClick}>
                Start new quiz
            </button>
        </div>
    );
}

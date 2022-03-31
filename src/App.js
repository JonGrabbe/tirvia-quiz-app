import React from 'react';
import './App.css';
import axios from 'axios';
import Start from './StartMenu';
import Header from './header/Header';
import Quiz from './quiz/Quiz';
import './css/main.scss';
import { type } from '@testing-library/user-event/dist/type';


/* 
  {
    score:
    time:
    questions: [{}...]

  }
*/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuiz: undefined,
      currentQuestion: 0,
      history: [],

      categoryId: '',
      amount: '',
      difficulty: '',
      type: '',
      string() {
        let amount = this.amount ? this.amount : '10';
        let category = this.categoryId ? 'category='+this.categoryId : '';
        let difficulty = this.difficulty ? 'difficulty='+this.difficulty : '';
        let type = this.type ? 'type='+this.type : '';

        let fields = [category, difficulty, type];
        let url = `https://opentdb.com/api.php?amount=${amount}`;
        fields.forEach(function(item, i) {
        if(item) {
          url += '&'+item 
        }
        })
        return url;
      }
    }
    this.setData = this.setData.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
    this.getDifficulty = this.getDifficulty.bind(this);
    this.getQuestionType = this.getQuestionType.bind(this);
    this.createNewQuiz = this.createNewQuiz.bind(this);
    this.startNewQuiz = this.startNewQuiz.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this); 
  }

  setData(data) {
    this.setState({
      todos: data
    })
  }

  createNewQuiz() {
    //gets the url from state and makes a request to the api
    //and then changes the currentQuiz propery with the relevant value
    let url = this.state.string();
    let updateFunc = (res) => {
      console.log(res)
      this.setState({
        currentQuiz: {
          questions: res.data.results,
          responseCode: res.data.response_code
        }
      })
    }
    axios.get(url)
      .then(res => updateFunc(res))
  }
  
  computeScore() {

  }
  checkAnswer() {

  }
  next() {
    console.log(this.state.currentQuiz.questions.length-1)
    console.log(this.state.currentQuestion)
    if(this.state.currentQuestion < this.state.currentQuiz.questions.length-1) {
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion+1  
        }
      })
    }
  }
  prev() {

  }
  startNewQuiz() {
    // pushed object in this.state.currentQuiz into the history array and then removes the object
    //from the currentQuiz property
    this.setState((prevState) => {
      return {
        history: [...prevState.history, prevState.currentQuiz],
        currentQuiz: undefined
      }
    })
  }

  getCategoryId(e) {
    let val = e.currentTarget.value;
    this.setState({
      categoryId: val
    })
  }

  getDifficulty(e) {
    let val = e.currentTarget.value;
    // console.log(val)
    this.setState({
      difficulty: val
    })
  }

  getQuestionType(e) {
    let val = e.currentTarget.value;
    // console.log(val);
    this.setState({
      type: val
    })

  }

  componentDidMount() {
    let x = this.state.string();
    console.log(x)
  }

  logChange(e) {
    let val = e.currentTarget.value;
    // console.log(val)
    let url = `https://opentdb.com/api.php?amount=10&category=${val}`;
    axios.get(url)
      .then(res => {
        console.log('response: ', res)
      })
  }
  
  render() {
    let elm = (<Start 
        getCategoryId={this.getCategoryId} 
        getDifficulty={this.getDifficulty} 
        getQuestionType={this.getQuestionType} 
        createQuiz={this.createNewQuiz}
      />)
    return (
      <div className="App">
        <Header />
        {
          this.state.currentQuiz ? <Quiz newQuiz={this.startNewQuiz} currentQuiz={this.state.currentQuiz} next={this.next} /> : elm
        }
      </div>
    );
  }
}

export default App;

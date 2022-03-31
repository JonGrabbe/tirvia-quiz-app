import React from 'react';
import './App.css';
import axios from 'axios';
import Start from './StartMenu';
import Header from './header/Header';
import Quiz from './quiz/Quiz';
import './css/main.scss';


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
      currentQuestion: undefined,
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
          question: res.data.results,
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

  }
  prev() {

  }
  startNewQuiz() {

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
    return (
      <div className="App">
        <Header />
        <Start getCategoryId={this.getCategoryId} getDifficulty={this.getDifficulty} getQuestionType={this.getQuestionType} createQuiz={this.createNewQuiz} />
      </div>
    );
  }
}

export default App;

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
    this.getCurrentQuestionObj = this.getCurrentQuestionObj.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.checkAnswer2 = this.checkAnswer2.bind(this);
    this.completeQuiz = this.completeQuiz.bind(this); 
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
      //scramble the questions
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function getAnswers(obj) {
        let answers = [];
        answers = [...answers, ...obj.incorrect_answers];
        let arrayLength = obj.incorrect_answers.length+1
        let randomNum = getRandomInt(0, arrayLength-1);
        answers.splice(randomNum, 0, obj.correct_answer);
        // console.log(answers)
        return answers;
      }
      res.data.results.forEach(item => {
        item.random_answers = getAnswers(item)
      })
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
  getCurrentQuestionObj() {
    return this.state.currentQuiz.questions[this.state.currentQuestion];
  }
  checkAnswer(e) {
    if(!this.getCurrentQuestionObj().isAnswered) {
      let val = e.currentTarget.value;
      // console.log(val)
      let bool = this.getCurrentQuestionObj().correct_answer === val;
      console.log(val, bool)
      let index = this.state.currentQuestion;
      let newObj = this.state.currentQuiz;
      newObj.questions[index].isCorrect = bool;
      newObj.questions[index].hasUserInputValue = true;
      newObj.questions[index].userAnswer = val;
      console.log(newObj)
      this.setState({
        currentQuiz: newObj
      })
      this.forceUpdate()
    }
  }

  checkAnswer2() {
    // check if question was already check in order to prevent a second try
    if(this.getCurrentQuestionObj().hasUserInputValue && !this.getCurrentQuestionObj().isAnswered) {
      // if the user clicked the check answer button allow the next method to go
      let index = this.state.currentQuestion;
      let newObj = this.state.currentQuiz;
      newObj.questions[index].isAnswered = true;
      this.setState({
        currentQuiz: newObj
      })
      this.forceUpdate()
      this.completeQuiz()
    }
  }

  next() {
    console.log(this.state.currentQuiz.questions.length-1)
    console.log(this.state.currentQuestion)
    let flag = this.getCurrentQuestionObj().isAnswered;
    if(this.state.currentQuestion < this.state.currentQuiz.questions.length-1 && flag) {
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion+1  
        }
      })
    }
  }
  prev() {
    if(this.state.currentQuestion > 0) {
      this.setState(prevState => {
        return {
          currentQuestion: prevState.currentQuestion - 1  
        }
      })
    }
  }
  startNewQuiz() {
    // pushed object in this.state.currentQuiz into the history array and then removes the object
    //from the currentQuiz property
    this.setState((prevState) => {
      return {
        currentQuestion: 0,
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

  completeQuiz() {
    // checks if complete condidtion is true
      // complete condition means that all the question objects have isAnswered properties set to true
    // if complete condition is true set isQuizComplete propery to true on the quiz object
    // this property will be passed down as a prop to components, and those compenents will
    // conditionly render the data in the history object
    /* 
      <QuizHistory history={this.props.history} />
    */
      let isComplete = false;
      let length = this.state.currentQuiz.questions.length;
      // console.log('length: ', length)
      let num = 0;
      this.state.currentQuiz.questions.forEach((item) => {
        if(item.isAnswered) {
          num++
        }
      })
      if(num === length) {
        isComplete = true;
        // calculate score
      }
      let newObj = this.state.currentQuiz;
      newObj.isQuizComplete = isComplete;
      this.setState(prevState => {
        return {
          currentQuiz: newObj
        }
      })
      this.forceUpdate()
  }
  

  componentDidMount() {
    let x = this.state.string();
    console.log(x)
    // this.completeQuiz()
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
    let start = (
      <Start 
        getCategoryId={this.getCategoryId} 
        getDifficulty={this.getDifficulty} 
        getQuestionType={this.getQuestionType} 
        createQuiz={this.createNewQuiz}
      />)
    let quiz = (
      <Quiz 
        newQuiz={this.startNewQuiz} 
        currentQuiz={this.state.currentQuiz} 
        currentQuestion={this.state.currentQuestion} 
        next={this.next}
        prev={this.prev}
        checkAnswer={this.checkAnswer}
        checkAnswer2={this.checkAnswer2}
        history={this.state.history}
      />
    );
    return (
      <div className="App">
        <Header />
        {
          this.state.currentQuiz ? quiz  : start
        }
      </div>
    );
  }
}

export default App;
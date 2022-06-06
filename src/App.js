import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Letter from '../src/componots/Letter'
import Letters from '../src/componots/Letters';
import Score from '../src/componots/Score';
import Solution from '../src/componots/Solution';
import EndGame from './componots/EndGame';


class App extends Component {
  constructor() {
    super()
    this.state = {
      score: 100,
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "LILY",
        hint: "its a flower"
      },
      isEnded: false
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++)
      letterStatus[String.fromCharCode(i)] = false
    return letterStatus
  }

  selectLetter = (letter) => {
    let currentLetterStatus = { ...this.state.letterStatus }
    currentLetterStatus[letter] = true
    this.setState({letterStatus: currentLetterStatus})
    this.updatePlayerScore(letter)
  }

  updatePlayerScore = (letter) => {
    this.setState({
      score: (this.state.solution.word.includes(letter.toLowerCase()) ||this.state.solution.word.includes(letter.toUpperCase()))
          ? this.state.score + 5 : this.state.score - 20,
        lettersStatus: {...this.state.letterStatus}
    })
  }
  

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus}
          solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus}
          selectLetter={this.selectLetter} />
        <Letter />
        <EndGame letterStatus={this.state.letterStatus}
          solution={this.state.solution.word}
          score={this.state.score}
        />
      </div>
    )
  }
}

export default App;
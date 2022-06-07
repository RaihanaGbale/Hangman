import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Letter from '../src/componots/Letter'
import Letters from '../src/componots/Letters';
import Score from '../src/componots/Score';
import Solution from '../src/componots/Solution';
import EndGame from '../src/componots/EndGame';


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
      hasEnded: false
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i++)
      letterStatus[String.fromCharCode(i)] = false
    return letterStatus
  }

  selectLetter = (letter) => {
    let currentLetterStatus = { ...this.state.letterStatus }
    currentLetterStatus[letter] = true
    this.setState({ letterStatus: currentLetterStatus })
    this.updatePlayerScore(letter)
  }

  updatePlayerScore = (letter) => {
    if (this.state.solution.word.includes(letter.toLowerCase()) ||
      this.state.solution.word.includes(letter.toUpperCase()))
      this.setState({
        score: this.state.score + 5 <= 100 ? this.state.score + 5 : this.state.score,
        lettersStatus: { ...this.state.letterStatus }
      })

    else {
      this.setState({
        score: this.state.score - 20 >= 0 ? this.state.score - 20 : this.state.score,
        lettersStatus: { ...this.state.letterStatus }
      })
    }
  }


  restart = () => {
    this.setState({
      score: 100,
      letterStatus: this.generateLetterStatuses()
    })
  }

  render() {
    return (
      <div style={{ height: "100vh", backgroundImage: `url("https://cdn4.vectorstock.com/i/1000x1000/64/53/landscape-at-morning-for-game-background-vector-14966453.jpg")` }}>
        <h1 id="title">Hangman Game</h1>
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
        <button onClick={this.restart}>Restart!</button>
      </div>
    )
  }
}

export default App;
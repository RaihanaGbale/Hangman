import React, { Component } from 'react';
import '../App.css';

class EndGame extends Component {

    restart = () => {
        this.setState({
            score: 100,
            letterStatus: this.generateLetterStatuses()
        })
    }

    render() {
        let toCheckLettersArr = []
        this.props.solution.split("").map((letter) =>
            this.props.letterStatus[letter] === true ?
                toCheckLettersArr.push(letter) : "")

        return (
            <div >
                {this.props.score <= 0 ?
                    <div>You Lost, the word was:{this.props.solution}</div> :
                    this.props.solution.split("").length == toCheckLettersArr.length ?
                        <div >Congratulations!!! You won</div> : ""}
                <button onClick={this.restart}>Restart!</button>
            </div>)
    }
}

export default EndGame
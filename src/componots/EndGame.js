import React, { Component } from 'react';
import '../App.css';

class EndGame extends Component {
    render() {
        let toCheckLettersArr = []
        this.props.solution.split("").map((letter) =>
            this.props.letterStatus[letter] === true ?
                toCheckLettersArr.push(letter) : "")

        return (
            <div >
                {this.props.score <= 0 ?
                    <div>Lost, the answer is:{this.props.solution}</div> :
                    this.props.solution.split("").length === toCheckLettersArr.length ?
                        <div >Congratulations!!! You won</div> : ""}
            </div>)
    }
}

export default EndGame
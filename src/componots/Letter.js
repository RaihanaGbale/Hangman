import React, { Component } from 'react';

class Letter extends Component {
    guessALetter = () => this.props.selectLetter(this.props.availableLetters)

    render() {
        return (
            <span>
                <span >{this.props.letter} </span>
                <span className={this.props.class} onClick={this.guessALetter}>
                    {this.props.availableLetters}
                </span>
            </span>
        )
    }
}

export default Letter
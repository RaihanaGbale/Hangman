import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {

        return (
            <div>
                <div> Available letters are: </div>
                <span>
                    {Object.keys(this.props.letterStatus).map((letter, i) =>
                        <Letter selectLetter={this.props.selectLetter}
                            key={letter} availableLetters={letter}
                            class={Object.values(this.props.letterStatus)[i] === false ?
                                "false" : "true"}
                        />)}
                </span>
            </div>)
    }
}
export default Letters
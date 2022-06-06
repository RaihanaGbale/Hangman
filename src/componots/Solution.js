import React, { Component } from 'react';
import Letter from '../componots/Letter';

class Solution extends Component {
    render() {
        return (
            <div>
                {this.props.solution.word.split("").
                map((letter, i) => this.props.letterStatus[letter] === false ?
                    <span> < Letter key={i} letter={" _ "} /> </span>
                    : <span><Letter key={letter} letter={letter} /></span>)}

                <div>A Hint for you: {this.props.solution.hint}</div>
            </div>
        )
    }
}
export default Solution
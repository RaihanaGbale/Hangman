import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    render() {

        return (
            <div>
                <div> Available letters are: </div>
                <div>
                {Object.keys(this.props.letterStatus).map((letter, i) =>
                        <Letter selectLetter={this.props.selectLetter}
                            key={letter} letters={letter}
                            class={Object.values(this.props.letterStatus)[i] ?"isClicked" : "isNotClicked"}
                        />)}
                </div>
            </div>)
    }
}

export default Letters 
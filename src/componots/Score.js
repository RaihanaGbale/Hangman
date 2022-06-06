import React, { Component } from 'react';

class Score extends Component {
    scoreRange() {
        if (this.props.score > 80)
            return "high-score"
        if (this.props.score > 50)
            return "medium-score"
        return "low-score"
    }

    render() {
        return (
            <div className={this.scoreRange()}>
                <em >Your Score is currently : {this.props.score} </em>
            </div>)
    }
}
export default Score
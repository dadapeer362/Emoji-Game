// Write your code here.
import './index.css'
import {Component} from 'react'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

class WinOrLoseCard extends Component {
  onShowGame = () => {
    const {isWon, onShowGameAgain, score, count} = this.props
    onShowGameAgain()
  }

  render() {
    const {score, isWon} = this.props
    const text = isWon ? 'Best Score' : 'Score'
    const winOrLose = isWon ? 'You Won' : 'You Lose'
    const image = isWon ? WON_IMAGE : LOSE_IMAGE
    return (
      <div className="lose-container">
        <div className="inner-lose-container">
          <div className="text-container">
            <h1 className="lose-text">{winOrLose}</h1>
            <p className="inner-score-text">{text}</p>
            <p className="score-para">{score}/12</p>
            <button className="btn-style" onClick={this.onShowGame}>
              Play Again
            </button>
          </div>
          <div>
            <img className="lose-img-style" src={image} alt="win or lose" />
          </div>
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard

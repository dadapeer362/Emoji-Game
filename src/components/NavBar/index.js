// Write your code here.
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {gameScore, topScore} = this.props
    return (
      <nav className="navbar-container">
        <div className="img-text-container">
          <img
            className="game-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="game-logo"
          />
          <h1 className="span-emoji-text">Emoji Game</h1>
        </div>
        <div className="score-top-score">
          <p className="score-para-1">Score: {gameScore}</p>
          <p className="score-para-1">Top Score: {topScore}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar

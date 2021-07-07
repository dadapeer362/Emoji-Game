/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

// let idList = []
let value

class EmojiGame extends Component {
  state = {
    listEmojis: '',
    clicked: false,
    count: 0,
    topScoreCount: 0,
    displayLoseCard: false,
    clickedEmojis: [],
  }

  onShowGameAgain = () => {
    const {displayLoseCard, count, topScoreCount, clickedEmojis} = this.state
    this.setState(prevState => ({clickedEmojis: []}))
    if (count > topScoreCount) {
      this.setState({topScoreCount: count})
    }
    this.setState({count: 0, displayLoseCard: false})
  }

  shuffleEmoji = id => {
    const {emojisList} = this.props
    const {
      listEmojis,
      clicked,
      count,
      displayLoseCard,
      clickedEmojis,
    } = this.state
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    value = clickedEmojis.includes(id)
    if (value || count === 12) {
      this.setState({displayLoseCard: true})
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        listEmojis: shuffledList,
        clicked: true,
      }))
    }
    this.setState(prevState => ({
      clickedEmojis: [...prevState.clickedEmojis, id],
    }))
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {count, clickedEmojis} = this.state
    const isWon = count === 12
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={count}
        onShowGameAgain={this.onShowGameAgain}
      />
    )
  }

  renderGameCard = () => {
    const {emojisList} = this.props
    const {listEmojis, clicked} = this.state
    const shuffledEmojiList = clicked ? listEmojis : emojisList
    return (
      <ul className="emoji-card-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            emoji={eachEmoji}
            key={eachEmoji.id}
            onShuffleEmojis={this.shuffleEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {emojisList} = this.props
    const {count, topScoreCount, displayLoseCard, clickedEmojis} = this.state
    return (
      <div>
        <NavBar gameScore={count} topScore={topScoreCount} />
        <div className="bg-container">
          {displayLoseCard ? this.renderScoreCard() : this.renderGameCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

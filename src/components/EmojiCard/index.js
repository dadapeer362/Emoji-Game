// Write your code here.
import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  onClickEmoji = () => {
    const {emoji, onShuffleEmojis} = this.props
    const {id} = emoji
    onShuffleEmojis(id)
  }

  render() {
    const {emoji, onShuffleEmojis} = this.props
    const {emojiName, emojiUrl} = emoji
    return (
      <li className="img-container" onClick={this.onClickEmoji}>
        <img className="img-style" src={emojiUrl} alt={emojiName} />
      </li>
    )
  }
}

export default EmojiCard

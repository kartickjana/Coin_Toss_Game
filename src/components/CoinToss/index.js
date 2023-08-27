// Write your code here

import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageUrl: headsImageUrl,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = headsImageUrl
      latestHeadCount += 1
    } else {
      tossImage = tailImageUrl
      latestTailCount += 1
    }

    this.setState({
      imageUrl: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {imageUrl, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="txt">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button type="button" className="btn" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

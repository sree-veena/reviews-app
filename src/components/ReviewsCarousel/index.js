// Write your code here
import {Component} from 'react'

import './index.css'

class reviewsCarousel extends Component {
  state = {index: 0}

  onClickRightArrow = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviews} = this.props
    const review = reviews[index]
    console.log(index)

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <img src={review.imgUrl} className="image" alt={review.username} />
        <div className="container">
          <button type="button" className="btn" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
              onClick={this.onClickLeftArrow}
            />
          </button>
          <p className="name">{review.username}</p>
          <button type="button" className="btn" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
              onClick={this.onClickRightArrow}
            />
          </button>
        </div>
        <p className="com-name">{review.companyName}</p>
        <p className="para">{review.description}</p>
      </div>
    )
  }
}

export default reviewsCarousel

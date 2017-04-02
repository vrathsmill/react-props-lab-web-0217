import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <h2>Name: {this.props.name}</h2>
        <h2>Speed: {this.props.speed}</h2>
        <h2>Has rockets?: {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors}</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship

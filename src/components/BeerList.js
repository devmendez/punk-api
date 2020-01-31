import React, { Component } from 'react'
import BeerItem from './BeerItem'

class BeerList extends Component {
  state = {
      beers: []
  }

    fetchBeers = () => {
      fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => {
            console.log(data)
          this.setState({ beers:data })
        })
    }
  
  
    render() {

      return (
        <div>
          <button onClick={this.fetchBeers}>List Beers</button>
          {
            this.state.beers.map(beer => {
              return <BeerItem key={beer.id} info={beer} />
            })
          }
        </div>
      )
    }
}


export default BeerList
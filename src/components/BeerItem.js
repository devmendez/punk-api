import React, { Component } from 'react'

class BeerItem extends Component {
    state = {
        liked: false
    }

    likePost = () => this.setState({ liked: !this.state.liked })

    render() {

        return (
            <div style={{ background: '#ABADB3', border: '1px solid blue', padding: '50px'}}>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.brewers_tips}</p>
                <button onClick={this.likePost}>Like</button>
                <p>{this.state.liked.toString()}</p>
            </div>
        )
    }
}


export default BeerItem

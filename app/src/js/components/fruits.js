import React, {Component} from 'react'
import Nav from './nav'

class Fruits extends Component {
  constructor(props) {
    super(props)
    this.here = this.here.bind(this)
    this.back = this.back.bind(this)
  }
  
  here() {
    const { match: { params }, history } = this.props;
    console.log('HISTORY', history)
    history.push('/humans');
  }

  back() {
    const { match: { params }, history } = this.props;
    console.log('HISTORY', history)
    history.goBack()
  }

  render () {

    return (
      <div>
        <Nav/>
        <p>fruits!</p>
        <button onClick={ this.here }>click HERE!</button>
        <button onClick={ this.back }>back!</button>
      </div>
    )
  }
}

export default Fruits

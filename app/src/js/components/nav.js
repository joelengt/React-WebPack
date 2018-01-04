import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/step/12'>
            Navigate step1
          </Link>
        </div>
        <div>
          <Link to='/step/11'>
            Navigate step2
          </Link>
          <Link to='/example'>
            Navigate example
          </Link>
        </div>
        <div>
          <Link to="/humans">humans</Link>
        </div>
        <Link to="/fruits">fruits</Link>
        <li><Link to="/topics">Topics</Link></li>
      </div>
    )
  }
}

export default Nav


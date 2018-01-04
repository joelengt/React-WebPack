import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Humans from './components/humans'
import Fruits from './components/fruits'
import Example from './components/example'
import Nav from './components/nav'



const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Gist = ({ match }) => (
  <div>
    <p>URL: { match.url } </p>
    <p>ID:  { match.params.id }</p>
  </div>
)

class Application extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/fruits">fruits!</Link>
            </div>
            <Switch>
              <Route exact path='/humans' component={Humans} />
              <Route exact path='/fruits' component={Fruits} />
              <Route exact path='/step/:id' component={Gist} />
              <Route path="/topics" component={Topics} />
            </Switch>
          </div>

          <div>-------</div>
          <Example/>
        </div>
      </Router>
    )
  }
}



/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementById('app'));


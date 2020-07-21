import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'
import h1 from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/h1";

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
                <li>
                  <NavLink
                      to="/"
                      exact
                      activeClassName={'wft-active'}>Home</NavLink>
                </li>
                <li>
                  <NavLink
                      to="/about"
                      activeStyle={{
                           color: 'blue'
                      }}
                  >About</NavLink>
                </li>
              <li>
                  <NavLink to={{
                      pathname: '/cars'
                  }}>cars</NavLink>
              </li>
          </ul>
        </nav>

        <hr/>
        <Switch>
            <Route path="/" exact render={() => <h1>home page</h1>}/>
            <Route path="/about" component={About}/>
            <Route path="/cars/:name" component={CarDetail}/>
            <Route path="/cars" component={Cars}/>
            <Redirect to={'/'}/>
            {/*<Route render={() => <h1 style={{color:'red', textAlign: 'center'}}>404</h1>}/>*/}
        </Switch>

      </div>
    );
  }
}

export default App

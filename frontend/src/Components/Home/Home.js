import React, {PropTypes} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
class Home extends React.Component {


  render() {


    return (
      <div>
        <header>
        <nav className="uk-navbar-container" uk-navbar>

          <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li><a href="#" id="navbar-title">Listtr</a></li>
            <li><Link to="/login"><span  className="home-nav">Login</span></Link></li>
            <li className="home-nav"><Link to="/signup"><span  className="home-nav">Sign Up</span></Link></li>
          </ul>
          </div>
        </nav>


        </header>
        <section>
          <div id="landing-page">
            <h1 id="home-title">Listtr</h1>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;

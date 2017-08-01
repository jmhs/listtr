import React, {PropTypes} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Typed from 'typed.js'
class Home extends React.Component {
  componentDidMount(){
    const strings = [
    	"<strong>Event Title:</strong> John and Amy's Wedding",
      '<strong>Location:</strong> 30 Maryland Ave',
      'You are invited!'
    ]
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount(){
     this.typed.destroy();
  }
  render() {



    return (
      <div>
        <header>
          <nav className="uk-navbar-container" uk-navbar>

            <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li><a href="#" id="navbar-title">Listtr</a></li>
              <li className="home-nav"><Link to="/login"><span  className="home-nav">Login</span></Link></li>
              <li className="home-nav"><Link to="/signup"><span  className="home-nav">Sign Up</span></Link></li>
            </ul>
            </div>
          </nav>
        </header>

        <section>
          <div id="landing-page">
            <h1 id="home-title">Listtr</h1>
          </div>
          <div id="typedjs">
            <h1 id="manage-guest-list-home">Guest list management made easy</h1>
            <div className="type-wrap">
              <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
              />
            </div>
          </div>
        </section>

        <section className="dark-home-background">
          <h1 id="how-it-works">How it works</h1>
          <span className="fa fa-pencil" aria-hidden="true"></span>
        </section>
      </div>
    );
  }
}
export default Home;

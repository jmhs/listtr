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
          <div className="container">
            <div className="row">

              <div className="col-sm-3 how-it-works-icon">
                <span className="fa fa-user-o fa-4x fa-home-icon" aria-hidden="true"></span>
                <h4 className="how-it-works-title">Create Account</h4>
                <p className="how-it-works-desc">Sign up as a user to get started. This way, we can keep track events that you have hosted.</p>
              </div>
              <div className="col-sm-3 how-it-works-icon">
                <span className="fa fa-pencil fa-4x fa-home-icon" aria-hidden="true"></span>
                <h4 className="how-it-works-title">Get started</h4>
                <p className="how-it-works-desc">Create your new event and list all the event details. Update details before event and delete after your event has ended.</p>
              </div>
              <div className="col-sm-3 how-it-works-icon">
                <span className="fa fa-users fa-4x fa-home-icon" aria-hidden="true"></span>
                <h4 className="how-it-works-title">Guest Management</h4>
                <p className="how-it-works-desc">List your guests and send your invites. Add your fellow hosts as collaborators. </p>
              </div>
              <div className="col-sm-3 how-it-works-icon">
                <span className="fa fa-paper-plane-o fa-4x fa-home-icon" aria-hidden="true"></span>
                <h4 className="how-it-works-title">Go Live!</h4>
                <p className="how-it-works-desc">Do your live registration online! There is no need to flip through pages of RSVPs.</p>
              </div>
            </div>
          </div>
        </section>


      </div>
    );
  }
}
/*
<footer className="home-footer">
  <div className="container-home-page">
    <div className="col-sm-3">
      <h4>About us</h4>
    </div>
  </div>
</footer>
*/
export default Home;

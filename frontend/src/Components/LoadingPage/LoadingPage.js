import React, {PropTypes} from 'react';
import bg from './loading-page-background.jpg'
import './LoadingPage.css'
import {Link} from 'react-router-dom'
import Typed from 'typed.js';
export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginAgain: false
    }
  }
  componentDidMount(){

    let options = {
      strings: ["Loading . . ."],
      loop: true,
      typeSpeed: 100,
      showCursor: false
    }
    let typed = new Typed("#loading-text", options);

    setTimeout(() => {
      this.setState({
        loginAgain: true
      })
      console.log('please login again')
    }, 4000)
  }
  componentWillUnmount(){
    this.setState({
      loginAgain: false
    })
  }
  render() {
    return (
      <div id="loading-page-background">
        <div id="loading">
          <div id="loading-text">
          </div>
          <div className="loader">
          </div>
          <Link to="/login">
          {this.state.loginAgain ? <button className="please-login">Please login!</button> :  ""}

          </Link>
        </div>
      </div>
    );
  }
}

LoadingPage.propTypes = {
};

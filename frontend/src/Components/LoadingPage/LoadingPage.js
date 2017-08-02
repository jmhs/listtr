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

    // let options = {
    //   strings: ["Loading . . ."],
    //   loop: true,
    //   typeSpeed: 100,
    //   showCursor: false
    // }
    // let typed = new Typed("#loading-text", options);

    setTimeout(() => {
      this.setState({
        loginAgain: true
      })
      console.log('please login again')
    }, 6000)
  }
  componentWillUnmount(){
    this.setState({
      loginAgain: false
    })
  }
  render() {
    return (

        <div id="loading">
          <div id="loading-text">
          <h1>Fetching assets..</h1>
          </div>

          <div align="center" className="cssload-fond">
          <div className="cssload-container-general">
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_1">&nbsp;</div></div>
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_2">&nbsp;</div></div>
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_3">&nbsp;</div></div>
            <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_4">&nbsp;</div></div>
          </div>
        </div>

          <Link to="/login">
          {this.state.loginAgain ? <button className="please-login">Oops, please login!</button> :  ""}

          </Link>
        </div>

    );
  }
}

LoadingPage.propTypes = {
};
//   <div id="loading-page-background">
//   </div>
// <div className="loader">
// </div>

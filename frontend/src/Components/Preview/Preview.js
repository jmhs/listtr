import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { activeEvent} from '../../Actions/Event';
import './Preview.css';
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  // storeActiveEventToPreview = () => {
  //   this.props.activeEvent(this.props.)
  // }
  render() {
    return (
      <div className = "Firreee">
      <div className ='card'>

      <div className ='cardimage'>
      <div className ="data-uk-parallax={bg: '-200'}">
      <img src="https://res.cloudinary.com/listtr/image/upload/v1501038786/j6fbqeezvic6ej9isdj1.png" >
      </img>
      </div>
      <div className="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style={{backgroundImage: 'url("images/dark.jpg")'}}>
              <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Headline</h1>
            </div>

      </div>
      <h2>HIHIHI</h2>
      <Link to="/guest">
      <button type="button"
              className="btn btn-default"
              onClick={this.onClick}>AddGuest</button></Link>


        <h1 className="uk-article-title">
        <a className="uk-link-reset" href> Headin </a> </h1>
          <div>
            <a className="uk-button uk-button-text" href="#">Read more</a>
          </div>
          <div>
            <a className="uk-button uk-button-text" href="#">5 Comments</a>
          </div>
        </div>
        </div>


  );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.active,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    activeEvent: (event) => {
      dispatch(activeEvent(event))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

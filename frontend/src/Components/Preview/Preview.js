import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { activeEvent} from '../../Actions/Event'
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  // storeActiveEventToPreview = () => {
  //   this.props.activeEvent(this.props.)
  // }
  render() {
    return (
      <div>
      <h2>{this.props.events}</h2>
      <Link to="/guest"><button type="button"
              className="btn btn-default"
              onClick={this.onClick}>AddGuest</button></Link>
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

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { getActiveEventToPreview} from '../../Actions/ActiveEventToPreview'
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  // storeActiveEventToPreview = () => {
  //   this.props.getActiveEventToPreview(this.props.)
  // }
  render() {
    return (<div>
      <Link to="/guest"><button type="button"
              className="btn btn-default"
              onClick={this.storeActiveEventToPreview}>AddGuest</button></Link>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    getActiveEventToPreview: (event) => {
      dispatch(getActiveEventToPreview(event))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

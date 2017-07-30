import React, {PropTypes} from 'react';
import ResponseVerification from './ResponseVerification/ResponseVerification'

export default class ResponseDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <ResponseVerification />
      </div>
    );
  }
}

ResponseDisplay.propTypes = {
};

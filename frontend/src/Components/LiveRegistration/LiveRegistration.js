import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import './LiveRegistration.css';
import Table from 'react-uikit-table'





class LiveRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    // this.props.active.
    const io = require('socket.io-client/dist/socket.io.js');
    const socket = io.connect('http://localhost:3001');
    socket.emit('getAllGuests', "597dc2135f7bb128e8a42c79");

    socket.on('guestlist', function (data) {
    console.log(data);
      });
  }

  render() {
    return (
    <div className="uk-container uk-container-small uk-position-relative">
    <div>
    <h1>Registrations</h1>
    </div>
      <div className="uk-overflow-auto uk-position-relative uk-margin-medium" >
              <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                  <tr>
                    <th className="uk-table-shrink">Attd</th>
                    <th className="uk-table-shrink">Name</th>
                    <th className="uk-table-expand">Email</th>
                    <th className="uk-width-small">Contact No.</th>
                    <th className="uk-table-shrink uk-text-nowrap">RSVP Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className="uk-checkbox" type="checkbox" /></td>
                    <td><img className="uk-preserve-width uk-border-circle" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/17015b52218827.5909281cb99f2.jpg" width={40} alt /></td>
                    <td className="uk-table-link">
                      <a className="uk-link-reset" href>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                    </td>
                    <td className="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                    <td className="uk-text-nowrap">Lorem ipsum dolor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    );
  }
}

LiveRegistration.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    active: state.active,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LiveRegistration);

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { activeEvent } from '../../Actions/Event';
import { postInvite } from '../../Actions/Invite';
import axios from 'axios';

import LogIn from '../LogIn/LogIn';
import InvitePreview from './InvitePreview/InvitePreview';

/**
* Import CSS styles for the Invite template
*/
import './InviteTemplate.css'

class InviteTemplate extends React.Component {
  constructor(props) {
    super(props);

    // INITIAL state is props of event clicked
    this.state = {
      inviteEventImage: this.props.events.eventImage,
      inviteName: this.props.events.eventName,
      inviteStartDate: this.props.events.startDate,
      inviteEndDate: this.props.events.endDate,
      inviteTimeStart: this.props.events.timeStart,
      inviteTimeEnd: this.props.events.timeEnd,
      // inviteDressCode: this.props.events.dressCode,
      inviteLocation: this.props.events.location,
      inviteSubject: this.props.events.eventName,
      inviteDescription: this.props.events.description,

      // invitePreviewIsOpen: false
    }
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'inviteName':
        this.setState({
          inviteName: e.target.value
        })
        // console.log('updating inviteName: ', e.target.value)
        break;
      case 'inviteStartDate':
        this.setState({
          inviteStartDate: e.target.value
        })
        // console.log('updating inviteStartDate: ', e.target.value)
        break;
      case 'inviteEndDate':
        this.setState({
          inviteEndDate: e.target.value
        })
        // console.log('updating inviteEndDate: ', e.target.value)
        break;
      case 'inviteTimeStart':
        this.setState({
          inviteTimeStart: e.target.value
        })
        // console.log('updating inviteTimeStart: ', e.target.value)
        break;
      case 'inviteTimeEnd':
        this.setState({
          inviteTimeEnd: e.target.value
        })
        // console.log('updating inviteTimeEnd: ', e.target.value)
        break;
      // case 'inviteDressCode':
      //   this.setState({
      //     inviteDressCode: e.target.value
      //   })
      //   // console.log('updating eventDressCode: ', e.target.value)
      //   break;
      case 'inviteLocation':
        this.setState({
          inviteLocation: e.target.value
        })
        // console.log('updating eventLocation: ', e.target.value)
        break;
      case 'inviteSubject':
        this.setState({
          inviteSubject: e.target.value
        })
        // console.log('updating inviteSubject: ', e.target.value)
        break;
      case 'inviteDescription':
        this.setState({
          inviteDescription: e.target.value
        })
        // console.log('updating inviteDescription: ', e.target.value)
        break;

      default:
    }
  }

// To save and update invitation in the backend
  saveInvite = (e) => {
    e.preventDefault();
    console.log("Save Invite Clicked!");
    this.props.postInvite(this.props.events._id, this.state)
    console.log(this.state)
  }

// function to check if user is loggedin before accessing inviteTemplate page. if user not loggedin, redirect to '/login'
// function also renders different invite template depending on whether its a new or existing invitation
  isLoggedInInviteTemplate = () => {

    if(this.props.user.hasOwnProperty('_id')){

        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1>Manage Invitation</h1>
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
              <div className="eventImage">
                <label htmlFor="exampleInputPassword1">Event Cover</label>
                <img src={this.state.inviteEventImage}/>
                <input type="text"
                       className="form-control"
                       id="inviteEventImage"
                       placeholder="Input Invitation subject"
                       defaultValue={this.state.inviteEventImage}
                       name="inviteImage"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Name</label>
                <input type="text"
                       className="form-control"
                       id="eventNameInviteTemplate"
                       placeholder="Input Event Name"
                       defaultValue={this.state.inviteName}
                       onChange={this.onChange}
                       name="inviteName"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Start Date</label>
                <input type="text"
                       className="form-control"
                       id="inviteStartDate"
                       placeholder="Input Event Start Date"
                       defaultValue={this.state.inviteStartDate}
                       onChange={this.onChange}
                       name="inviteStart"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event End Date</label>
                <input type="text"
                       className="form-control"
                       id="inviteEndDate"
                       placeholder="Input Event End Date"
                       defaultValue={this.state.inviteEndDate}
                       onChange={this.onChange}
                       name="inviteEnd"/>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event Start Time</label>
                <input type="text"
                       className="form-control"
                       id="inviteStartTime"
                       placeholder="Input Event Start Time"
                       defaultValue={this.state.inviteTimeStart}
                       onChange={this.onChange}
                       name="inviteStartTime"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Event End Time</label>
                <input type="text"
                       className="form-control"
                       id="inviteEndTime"
                       placeholder="Input Event End Time"
                       defaultValue={this.state.inviteTimeEnd}
                       onChange={this.onChange}
                       name="inviteEndTime"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Location</label>
                <input type="text"
                       className="form-control"
                       id="inviteLocation"
                       placeholder="Input Event Location"
                       defaultValue={this.state.inviteLocation}
                       onChange={this.onChange}
                       name="inviteLocation"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Invitation Subject</label>
                <input type="text"
                       className="form-control"
                       id="inviteSubjectInviteTemplate"
                       placeholder="Input Email Invitation Subject "
                       defaultValue={this.state.inviteSubject}
                       onChange={this.onChange}
                       name="inviteSubject"/>
              </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Invite Description</label>
                  <input type="email"
                         className="form-control"
                         id="inviteDescriptionInviteTemplate"
                         placeholder="Input Event Description"
                         defaultValue={this.state.inviteDescription}
                         onChange={this.onChange}
                         name="inviteDescription"/>
                </div>
                <Link to="/invitepreview">
                <button className="uk-button uk-button-default"
                        id="invitePreviewBtn" onClick={this.invitePreview}>Update and Preview Invitation</button>
                        </Link>
                    <Link to="/preview">
                <button className="uk-button uk-button-default"
                        id="inviteTemplateBackToEventBtn" onClick={this.onClick}>Back to Event Preview</button>
                        </Link>
                <hr/>
                <button className="uk-button uk-button-primary"
                        id="saveInviteBtn" onClick={this.saveInvite}>Save and Update</button>
                <button className="uk-button uk-button-danger"
                        id="updateAccountDetailsBtn" onClick=''>Delete Invite</button>
              </div>
            </div>
          </div>
        )
    } else {
      return(
        <div>
        <LogIn />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
      {this.isLoggedInInviteTemplate()}
      </div>
    );
  }
}

InviteTemplate.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    events: state.active,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    postInvite: (active_id, invite) => {dispatch(postInvite(active_id, invite))},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InviteTemplate);


// {/*[if (gte mso 9)|(IE)]>
//   <style type="text/css">
//     table {border-collapse: collapse !important;}
//   </style>
//   <![endif]*/}
//       <center className="wrapper" style={{width: '100%', tableLayout: 'fixed', WebkitTextSizeAdjust: '100%', msTextSizeAdjust: '100%', backgroundColor: '#f3f2f0'}}>
//         <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{backgroundColor: '#f3f2f0'}} bgcolor="#f3f2f0;">
//           <tbody><tr>
//               <td width="100%"><div className="webkit" style={{maxWidth: 800, margin: '0 auto'}}>
//                   {/*[if (gte mso 9)|(IE)]>
//
//             <table width="800" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0" >
//               <tr>
//                 <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
//                 <![endif]*/}
//                   {/* ======= start main body ======= */}
//                   <table className="outer" align="center" cellPadding={0} cellSpacing={0} border={0} style={{borderSpacing: 0, margin: '0 auto', width: '100%', maxWidth: 800}}>
//                     <tbody><tr>
//                         <td style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}>{/* ======= start header ======= */}
//                           <table border={0} width="100%" cellPadding={0} cellSpacing={0}>
//                             <tbody><tr>
//                                 <td><table style={{width: '100%'}} cellPadding={0} cellSpacing={0} border={0}>
//                                     <tbody>
//                                       <tr>
//                                         <td align="center"><center>
//                                             <table border={0} align="center" width="100%" cellPadding={0} cellSpacing={0} style={{margin: '0 auto'}}>
//                                               <tbody>
//                                                 <tr>
//                                                   <td className="one-column" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}} bgcolor="#FFFFFF">{/* ======= start header ======= */}
//                                                     <table cellPadding={0} cellSpacing={0} border={0} width="100%" bgcolor="#f3f2f0">
//                                                       <tbody><tr>
//                                                         </tr>
//                                                         <tr>
//                                                           <td>&nbsp;</td>
//                                                         </tr>
//                                                       </tbody></table></td>
//                                                 </tr>
//                                               </tbody>
//                                             </table>
//                                           </center></td>
//                                       </tr>
//                                     </tbody>
//                                   </table></td>
//                               </tr>
//                             </tbody></table>
//                           {/* ======= end header ======= */}
//                           {/* ======= start hero image ======= */}
//                           <table className="one-column" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{borderSpacing: 0, maxWidth: 800, borderLeft: '1px solid #e8e7e5', borderRight: '1px solid #e8e7e5', borderTop: '1px solid #e8e7e5'}} bgcolor="#FFFFFF">
//                             <tbody><tr>
//                                 <td align="center"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/a0fc05f8-72a9-41be-8049-9463e0da0aad.jpg" width="100%" style={{maxWidth: 800}} alt /></td>
//                               </tr>
//                             </tbody></table>
//                           {/* ======= end hero image ======= */}
//                           {/* ======= start hero article ======= */}
//                           <table className="one-column" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{borderSpacing: 0, borderLeft: '1px solid #e8e7e5', borderRight: '1px solid #e8e7e5', borderBottom: '1px solid #e8e7e5'}} bgcolor="#FFFFFF">
//                             <tbody><tr>
//                                 <td align="left" style={{padding: '40px 40px 60px 40px'}}><p style={{color: '#262626', fontSize: 32, textAlign: 'center', fontFamily: 'Verdana, Geneva, sans-serif, line-height: 2.5'}}>Name of Event</p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event Location:</strong> 'this.event.location' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event Dress Code:</strong> 'this.event.dressCode' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event Type:</strong> 'this.event.type' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event Start Date:</strong> 'this.event.startDate' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event End Date:</strong> 'this.event.endDate' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event Start Time:</strong> 'this.event.timeStart' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:1px}}><strong>Event End Time:</strong> 'this.event.timeEnd' </p>
//                                   <p style={{{{color: ''}} #000000; font-size: 16px; text-align: 'left'; font-family: 'verdana, geneva, sans-serif'; line-height:10px; padding-top: 20px;}}><strong>Description:</strong><br /><br /> 'this.event.description' </p>
//                                   {/* START BUTTON */}
//                                   <center>
//                                     <table cellPadding={0} cellSpacing={0} border={0} width="100%">
//                                       <tbody><tr>
//                                           <td><table border={0} cellPadding={0} cellSpacing={0}>
//                                               <tbody><tr>
//                                                   <td height={20} width="100%" style={{fontSize: 20, lineHeight: 20}}>&nbsp;</td>
//                                                 </tr>
//                                               </tbody></table>
//                                             <table border={0} align="center" cellPadding={0} cellSpacing={0} style={{margin: '0 auto'}}>
//                                               <tbody>
//                                                 <tr>
//                                                   <td align="center"><table border={0} cellPadding={0} cellSpacing={0} style={{margin: '0 auto'}}>
//                                                       <tbody><tr>
//                                                           <td width={250} height={60} align="center" bgcolor="#2f9780" style={{MozBorderRadius: 30, WebkitBorderRadius: 30, borderRadius: 30}}><a href="#" style={{width: 250, display: 'block', textDecoration: 'none', border: 0, textAlign: 'center', fontWeight: 'bold', fontSize: 18, fontFamily: 'Arial, sans-serif', color: '#ffffff'}} className="button_link">Call to Action<img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/73ac4376-78ab-4d32-a0b5-b8195202e51f.jpg" width={32} height={17} style={{paddingTop: 5}} alt border={0} /></a></td>
//                                                         </tr>
//                                                       </tbody></table></td>
//                                                 </tr>
//                                               </tbody>
//                                             </table></td>
//                                         </tr>
//                                       </tbody></table>
//                                   </center>
//                                   {/* END BUTTON */}</td>
//                               </tr>
//                             </tbody></table>
//                           {/* ======= end hero article ======= */}
//                           {/* ======= start footer ======= */}
//                           <table cellPadding={0} cellSpacing={0} border={0} width="100%">
//                             <tbody><tr>
//                                 <td height={30}>&nbsp;</td>
//                               </tr>
//                               <tr>
//                                 <td className="two-column" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0, textAlign: 'center', fontSize: 0}}>{/*[if (gte mso 9)|(IE)]>
//                           <table width="100%" style="border-spacing:0" >
//                           <tr>
//                           <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
//                           <![endif]*/}
//                                   <div className="column" style={{width: '100%', maxWidth: 399, display: 'inline-block', verticalAlign: 'top'}}>
//                                     <table className="contents" style={{borderSpacing: 0, width: '100%'}}>
//                                       <tbody><tr>
//                                           <td width="39%" align="right" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/13f425ab-c680-4ae0-88de-7b493d95095f.jpg" alt width={59} height={59} style={{borderWidth: 0, maxWidth: 59, height: 'auto', display: 'block', paddingRight: 20}} /></a></td>
//                                           <td width="61%" align="left" valign="middle" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}><p style={{color: '#787777', fontSize: 13, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif'}}> Powered by Listtr<br />
//                                               Listtr © 2017<br />
//                                               All rights reserved.</p></td>
//                                         </tr>
//                                       </tbody></table>
//                                   </div>
//                                   {/*[if (gte mso 9)|(IE)]>
//                           </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
//                           <![endif]*/}
//                                   <div className="column" style={{width: '100%', maxWidth: 399, display: 'inline-block', verticalAlign: 'top'}}>
//                                     <table width="100%" style={{borderSpacing: 0}}>
//                                       <tbody><tr>
//                                           <td className="inner" style={{paddingTop: 0, paddingBottom: 10, paddingRight: 10, paddingLeft: 10}}><table className="contents" style={{borderSpacing: 0, width: '100%'}}>
//                                               <tbody><tr>
//                                                   <td width="32%" align="center" valign="top" style={{paddingTop: 10}}><table width={150} border={0} cellSpacing={0} cellPadding={0}>
//                                                       <tbody><tr>
//                                                           <td width={33} align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/51f10cc9-b6d3-409d-9a64-4080a155b8c7.jpg" alt="facebook" width={36} height={36} border={0} style={{borderWidth: 0, maxWidth: 36, height: 'auto', display: 'block', maxHeight: 36}} /></a></td>
//                                                           <td width={34} align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/f910c3b7-2369-4b33-87e8-90ba1748d47a.jpg" alt="twitter" width={36} height={36} border={0} style={{borderWidth: 0, maxWidth: 36, height: 'auto', display: 'block', maxHeight: 36}} /></a></td>
//                                                           <td width={33} align="center"><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/0efcd6de-1324-4e05-871b-a93f6056f00e.jpg" alt="linkedin" width={36} height={36} border={0} style={{borderWidth: 0, maxWidth: 36, height: 'auto', display: 'block', maxHeight: 36}} /></a></td>
//                                                         </tr>
//                                                       </tbody></table></td>
//                                                 </tr>
//                                               </tbody></table></td>
//                                         </tr>
//                                       </tbody></table>
//                                   </div>
//                                   {/*[if (gte mso 9)|(IE)]>
//                           </td>
//                           </tr>
//                           </table>
//                           <![endif]*/}</td>
//                               </tr>
//                               <tr>
//                                 <td height={30}>&nbsp;</td>
//                               </tr>
//                             </tbody></table>
//                           {/* ======= end footer ======= */}</td>
//                       </tr>
//                     </tbody></table>
//                   {/*[if (gte mso 9)|(IE)]>
//           </td>
//         </tr>
//       </table>
//       <![endif]*/}
//                 </div></td>
//             </tr>
//           </tbody></table>
//       </center>

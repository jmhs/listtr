import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios';

import './InvitePreview.css'

class InvitePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      dressCode: '',
      type: '',
      startDate: '',
      endDate: '',
      timeStart: '',
      timeEnd: '',
      description: ''
    }
  }

  render() {
    return (
      <div>
      <Link to="/invitetemplate">
      <button className="uk-button uk-button-default"
          id="invitePreviewBackBtn" onClick={this.onClick}>Back to Manage Invitation</button>
          </Link>


      <center className="wrapper" style={{width: '100%', tableLayout: 'fixed', WebkitTextSizeAdjust: '100%', msTextSizeAdjust: '100%', backgroundColor: '#f3f2f0'}}>
              <table width="100%" cellPadding={0} cellSpacing={0}  style={{backgroundColor: '#f3f2f0'}} >
                <tbody><tr>
                    <td width="100%"><div className="webkit" style={{maxWidth: 800, margin: '0 auto'}}>
                        {/*[if (gte mso 9)|(IE)]>

      						<table width="800"  cellpadding="0" cellspacing="0" border="0" style="border-spacing:0" >
      							<tr>
      								<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
      								<![endif]*/}
                        {/* ======= start main body ======= */}
                        <table className="outer"  cellPadding={0} cellSpacing={0}  style={{borderSpacing: 0, margin: '0 auto', width: '100%', maxWidth: 800}}>
                          <tbody><tr>
                              <td style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}>{/* ======= start header ======= */}
                                <table  width="100%" cellPadding={0} cellSpacing={0}>
                                  <tbody><tr>
                                      <td><table style={{width: '100%'}} cellPadding={0} cellSpacing={0} >
                                          <tbody>
                                            <tr>
                                              <td ><center>
                                                  <table   width="100%" cellPadding={0} cellSpacing={0} style={{margin: '0 auto'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td className="one-column" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}} >{/* ======= start header ======= */}
                                                          <table cellPadding={0} cellSpacing={0}  width="100%" >
                                                            <tbody><tr>

                                                              </tr>
                                                              <tr>
                                                                <td>&nbsp;</td>
                                                              </tr>
                                                            </tbody></table></td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </center></td>
                                            </tr>
                                          </tbody>
                                        </table></td>
                                    </tr>
                                  </tbody></table>
                                {/* ======= end header ======= */}
                                {/* ======= start hero image ======= */}
                                <table className="one-column"  cellPadding={0} cellSpacing={0} width="100%" style={{borderSpacing: 0, maxWidth: 800, borderLeft: '1px solid #e8e7e5', borderRight: '1px solid #e8e7e5', borderTop: '1px solid #e8e7e5'}} >
                                  <tbody><tr>
                                      <td ><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/a0fc05f8-72a9-41be-8049-9463e0da0aad.jpg" width="100%" style={{maxWidth: 800}} alt /></td>
                                    </tr>
                                  </tbody></table>
                                {/* ======= end hero image ======= */}
                                {/* ======= start hero article ======= */}
                                <table className="one-column"  cellPadding={0} cellSpacing={0} width="100%" style={{borderSpacing: 0, borderLeft: '1px solid #e8e7e5', borderRight: '1px solid #e8e7e5', borderBottom: '1px solid #e8e7e5'}} >
                                  <tbody><tr>
                                      <td  style={{padding: '40px 40px 60px 40px'}}><p style={{color: '#262626', fontSize: 32, textAlign: 'center', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 2.5}}><strong>Title of Event</strong></p>

                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event Location:</strong> {this.props.events.location} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event Dress Code:</strong> {this.props.events.dressCode} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event Type:</strong> {this.props.events.type} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event Start Date:</strong> {this.props.events.startDate} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event End Date:</strong> {this.props.events.endDate} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event Start Time:</strong> {this.props.events.timeStart} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1}}><strong>Event End Time:</strong> {this.props.events.timeEnd} </p>
                                        <p style={{color: '#000000', fontSize: 16, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif', lineHeight: 1, paddingTop: 20}}><strong>Description:</strong><br/><br/> {this.props.events.description} </p>
                                        {/* START BUTTON */}
                                        <center>
                                          <table cellPadding={0} cellSpacing={0}  width="100%">
                                            <tbody><tr>
                                                <td><table  cellPadding={0} cellSpacing={0}>
                                                    <tbody><tr>
                                                        <td height={20} width="100%" style={{fontSize: 20, lineHeight: 10}}>&nbsp;</td>
                                                      </tr>
                                                    </tbody></table>
                                                  <table   cellPadding={0} cellSpacing={0} style={{margin: '0 auto'}}>
                                                    <tbody>
                                                      <tr>
                                                        <td ><table  cellPadding={0} cellSpacing={0} style={{margin: '0 auto'}}>
                                                            <tbody><tr>
                                                                <td width={250} height={60}   style={{MozBorderRadius: 30, WebkitBorderRadius: 30, borderRadius: 30}}><a href="#" style={{width: 250, display: 'block', textDecoration: 'none', border: 0, textAlign: 'center',
                                                                fontWeight: 'bold', fontSize: 18, fontFamily: 'Arial, sans-serif', color: '#2f9780'}} className="button_link">
                                                                Click here to RSVP!<img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/73ac4376-78ab-4d32-a0b5-b8195202e51f.jpg" width={28} height={17} style={{paddingTop: 0, paddingLeft: 10}} alt  /></a></td>
                                                              </tr>
                                                            </tbody></table></td>
                                                      </tr>
                                                    </tbody>
                                                  </table></td>
                                              </tr>
                                            </tbody></table>
                                        </center>
                                        {/* END BUTTON */}</td>
                                    </tr>
                                  </tbody></table>
                                {/* ======= end hero article ======= */}
                                {/* ======= start footer ======= */}
                                <table cellPadding={0} cellSpacing={0}  width="100%">
                                  <tbody><tr>
                                      <td height={30}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td className="two-column" style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0, textAlign: 'center', fontSize: 0}}>{/*[if (gte mso 9)|(IE)]>
      													<table width="100%" style="border-spacing:0" >
      													<tr>
      													<td width="50%"  style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
      													<![endif]*/}
                                        <div className="column" style={{width: '100%', maxWidth: 399, display: 'inline-block', verticalAlign: 'top'}}>
                                          <table className="contents" style={{borderSpacing: 0, width: '100%'}}>
                                            <tbody><tr>
                                                <td width="39%"  style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/13f425ab-c680-4ae0-88de-7b493d95095f.jpg" alt width={59} height={59} style={{borderWidth: 0, maxWidth: 59, height: 'auto', display: 'block', paddingRight: 20}} /></a></td>
                                                <td width="61%"   style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0}}><p style={{color: '#787777', fontSize: 13, textAlign: 'left', fontFamily: 'Verdana, Geneva, sans-serif'}}> Powered by Listtr<br />
                                                    Listtr © 2017<br />
                                                    All rights reserved.</p></td>
                                              </tr>
                                            </tbody></table>
                                        </div>
                                        {/*[if (gte mso 9)|(IE)]>
      													</td><td width="50%"  style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
      													<![endif]*/}
                                        <div className="column" style={{width: '100%', maxWidth: 399, display: 'inline-block', verticalAlign: 'top'}}>
                                          <table width="100%" style={{borderSpacing: 0}}>
                                            <tbody><tr>
                                                <td className="inner" style={{paddingTop: 0, paddingBottom: 10, paddingRight: 10, paddingLeft: 10}}><table className="contents" style={{borderSpacing: 0, width: '100%'}}>
                                                    <tbody><tr>
                                                        <td width="32%"  style={{paddingTop: 10}}><table width={150}  cellSpacing={0} cellPadding={0}>
                                                            <tbody><tr>
                                                                <td width={33} ><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/51f10cc9-b6d3-409d-9a64-4080a155b8c7.jpg" alt="facebook" width={36} height={36}  style={{borderWidth: 0, maxWidth: 36, height: 'auto', display: 'block', maxHeight: 36}} /></a></td>
                                                                <td width={34} ><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/f910c3b7-2369-4b33-87e8-90ba1748d47a.jpg" alt="twitter" width={36} height={36}  style={{borderWidth: 0, maxWidth: 36, height: 'auto', display: 'block', maxHeight: 36}} /></a></td>
                                                                <td width={33} ><a href="#" target="_blank"><img src="https://gallery.mailchimp.com/fdcaf86ecc5056741eb5cbc18/images/0efcd6de-1324-4e05-871b-a93f6056f00e.jpg" alt="linkedin" width={36} height={36}  style={{borderWidth: 0, maxWidth: 36, height: 'auto', display: 'block', maxHeight: 36}} /></a></td>
                                                              </tr>
                                                            </tbody></table></td>
                                                      </tr>
                                                    </tbody></table></td>
                                              </tr>
                                            </tbody></table>
                                        </div>
                                        {/*[if (gte mso 9)|(IE)]>
      													</td>
      													</tr>
      													</table>
      													<![endif]*/}</td>
                                    </tr>
                                    <tr>
                                      <td height={30}>&nbsp;</td>
                                    </tr>
                                  </tbody></table>
                                {/* ======= end footer ======= */}</td>
                            </tr>
                          </tbody></table>
                        {/*[if (gte mso 9)|(IE)]>
      					</td>
      				</tr>
      			</table>
      			<![endif]*/}
                      </div></td>
                  </tr>
                </tbody></table>
            </center>


      </div>
    );
  }
}

InvitePreview.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
    events: state.active,
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvitePreview);

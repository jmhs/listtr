
import dotenv from 'dotenv';
dotenv.load({ path: '.env' });

exports.handleEmail = (req, res) => {
  var helper = require('sendgrid').mail;
  var fromEmail = new helper.Email('listtryourlist@gmail.com');
  var toEmail = new helper.Email('listtryourlist@gmail.com');
  var subject = 'Sending with SendGrid is Fun';
  var content = new helper.Content('text/html',

  '<p><b><a href="www.google.com">Response here'+req.body.name+'/a></b></p>'
);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    res.json(response)
  });
}

// '<p><b><a href="www.google.com">Response here'+req.body.name+'/a></b></p>'

// <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
// <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
//   <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
//     <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
//     <!--[if (gte mso 9)|(IE)]>
//     <xml>
//     <o:OfficeDocumentSettings>
//     <o:AllowPNG/>
//     <o:PixelsPerInch>96</o:PixelsPerInch>
//     </o:OfficeDocumentSettings>
//     </xml>
//     <![endif]-->
//     <!--[if (gte mso 9)|(IE)]>
//     <style type="text/css">
//       table {border-collapse: collapse;}
//       table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
//       img {-ms-interpolation-mode: bicubic;}
//     </style>
//     <![endif]-->
//
//     <style type="text/css">
//       body, p, div {
//         font-family: arial;
//         font-size: 14px;
//       }
//       body {
//         color: #9B9B9B;
//       }
//       body a {
//         color: #0070CD;
//         text-decoration: none;
//       }
//       p { margin: 0; padding: 0; }
//       table.wrapper {
//         width:100% !important;
//         table-layout: fixed;
//         -webkit-font-smoothing: antialiased;
//         -webkit-text-size-adjust: 100%;
//         -moz-text-size-adjust: 100%;
//         -ms-text-size-adjust: 100%;
//       }
//       img.max-width {
//         max-width: 100% !important;
//       }
//       .column.of-2 {
//         width: 50%;
//       }
//       .column.of-3 {
//         width: 33.333%;
//       }
//       .column.of-4 {
//         width: 25%;
//       }
//       @media screen and (max-width:480px) {
//         .preheader .rightColumnContent,
//         .footer .rightColumnContent {
//             text-align: left !important;
//         }
//         .preheader .rightColumnContent div,
//         .preheader .rightColumnContent span,
//         .footer .rightColumnContent div,
//         .footer .rightColumnContent span {
//           text-align: left !important;
//         }
//         .preheader .rightColumnContent,
//         .preheader .leftColumnContent {
//           font-size: 80% !important;
//           padding: 5px 0;
//         }
//         table.wrapper-mobile {
//           width: 100% !important;
//           table-layout: fixed;
//         }
//         img.max-width {
//           height: auto !important;
//           max-width: 480px !important;
//         }
//         a.bulletproof-button {
//           display: block !important;
//           width: auto !important;
//           font-size: 80%;
//           padding-left: 0 !important;
//           padding-right: 0 !important;
//         }
//         .columns {
//           width: 100% !important;
//         }
//         .column {
//           display: block !important;
//           width: 100% !important;
//           padding-left: 0 !important;
//           padding-right: 0 !important;
//         }
//       }
//     </style>
//     <!--user entered Head Start-->
//
//      <!--End Head user entered-->
//   </head>
//   <body>
//     <center class="wrapper" data-link-color="#0070CD" data-body-style="font-size: 14px; font-family: arial; color: #9B9B9B; background-color: #FFFFFF;">
//       <div class="webkit">
//         <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
//           <tr>
//             <td valign="top" bgcolor="#FFFFFF" width="100%">
//               <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
//                 <tr>
//                   <td width="100%">
//                     <table width="100%" cellpadding="0" cellspacing="0" border="0">
//                       <tr>
//                         <td>
//                           <!--[if mso]>
//                           <center>
//                           <table><tr><td width="600">
//                           <![endif]-->
//                           <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
//                             <tr>
//                               <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #9B9B9B; text-align: left;" bgcolor="#FFFFFF" width="100%" align="left">
//
//     <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
//            style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
//       <tr>
//         <td role="module-content">
//           <p>This is the preheader text.</p>
//         </td>
//       </tr>
//     </table>
//
//     <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="padding:0px 0px 0px 0px;background-color:#ffffff;"
//             height="100%"
//             valign="top"
//             bgcolor="#ffffff">
//             <div style="text-align: right;"><span style="font-family:verdana,geneva,sans-serif;"><span style="font-size:10px;"><span style="color:#595459;">Email not displaying correctly?</span> <a href="[weblink]"><span style="color:#0070CD;">View it</span></a> <span style="color:#595459;">in your browser.</span></span></span></div>
//         </td>
//       </tr>
//     </table>
//
//     <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding:51px 0px 51px 0px;" valign="top" align="center">
//
//             <img class="max-width" width="160" height="44" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Nurture/Logo.png" alt="" border="0" style="display:block;color:#000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;">
//
//         </td>
//       </tr>
//     </table>
//
//     <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding:0px 0px 0px 0px;" valign="top" align="left">
//
//             <img class="max-width" width="600" height="414" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Nurture/strawberry.jpg" alt="" border="0" style="display:block;color:#000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;">
//
//         </td>
//       </tr>
//     </table>
//
//     <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="padding:34px 5px 34px 5px;background-color:#ffffff;"
//             height="100%"
//             valign="top"
//             bgcolor="#ffffff">
//             <div style="text-align: center;"><span style="color:#FF6666;"><span style="font-size:22px;">Lorem Ipsum Dolor sit Amet</span></span></div><div>&nbsp;</div><div style="text-align: center;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</div>
//         </td>
//       </tr>
//     </table>
  // <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 51px 0px;background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2nYCc wrapper-mobile" style="text-align:center;"><tbody><tr><td align="center" bgcolor="#FF6666" class="inner-td" style="-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:16px;text-align:center;background-color:inherit;"><a style="background-color:#FF6666;height:px;width:250px;font-size:16px;line-height:px;font-family:Helvetica, Arial, sans-serif;color:#ffffff;padding:12px 12px 12px 12px;text-decoration:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:1px solid #FF6666;display:inline-block;" href="" target="_blank">CALL TO ACTION</a></td></tr></tbody></table></td></tr></tbody></table>
//     <table class="module"
//            role="module"
//            data-type="spacer"
//            border="0"
//            cellpadding="0"
//            cellspacing="0"
//            width="100%"
//            style="table-layout: fixed;">
//       <tr>
//         <td style="padding:0px 0px 2px 0px;"
//             role="module-content"
//             bgcolor="#FF6666">
//         </td>
//       </tr>
//     </table>
//
//     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns">
//       <tr>
//         <td style="padding:34px 0px 45px 0px;" bgcolor="">
//
//       <!--[if mso]>
//       <table width="49%" align="left"><tr><td>
//       <![endif]-->
//       <table style="padding: 0px 5px 0px 0px;"
//           align="left"
//           valign="top"
//           height="100%"
//           class="column column-0 of-2 empty">
//         <tr>
//           <td class="columns--column-content">
//
//     <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding:0px 0px 0px 0px;" valign="top" align="center">
//
//             <img class="max-width" width="289" height="250" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Nurture/Imageleft.jpg" alt="" border="0" style="display:block;color:#000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;">
//
//         </td>
//       </tr>
//     </table>
//
//     <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="padding:23px 0px 23px 0px;background-color:#ffffff;"
//             height="100%"
//             valign="top"
//             bgcolor="#ffffff">
//             <div style="text-align: center;"><span style="color:#FF6666;"><span style="font-size:18px;">Lorem Ipsum Dolor sit Amet</span></span></div><div>&nbsp;</div><div style="text-align: center;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</div>
//         </td>
//       </tr>
//     </table>
//   <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 5px 0px;background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2nYCc wrapper-mobile" style="text-align:center;"><tbody><tr><td align="center" bgcolor="#FF6666" class="inner-td" style="-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:15px;text-align:center;background-color:inherit;"><a style="background-color:#FF6666;height:px;width:190px;font-size:15px;line-height:px;font-family:Helvetica, Arial, sans-serif;color:#ffffff;padding:12px 12px 12px 12px;text-decoration:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:1px solid #FF6666;display:inline-block;" href="" target="_blank">CALL TO ACTION</a></td></tr></tbody></table></td></tr></tbody></table>
//           </td>
//         </tr>
//       </table>
//       <!--[if mso]>
//       </td></tr></table>
//       </center>
//       <![endif]-->
//
//       <!--[if mso]>
//       <table width="49%" align="left"><tr><td>
//       <![endif]-->
//       <table style="padding: 0px 0px 0px 5px;"
//           align="left"
//           valign="top"
//           height="100%"
//           class="column column-1 of-2 empty">
//         <tr>
//           <td class="columns--column-content">
//
//     <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding:0px 0px 0px 0px;" valign="top" align="center">
//
//             <img class="max-width" width="289" height="250" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Nurture/Imageright.png" alt="" border="0" style="display:block;color:#000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;">
//
//         </td>
//       </tr>
//     </table>
//
//     <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="padding:23px 0px 23px 0px;background-color:#ffffff;"
//             height="100%"
//             valign="top"
//             bgcolor="#ffffff">
//             <div style="text-align: center;"><span style="color:#FF6666;"><span style="font-size:18px;">Lorem Ipsum Dolor sit Amet</span></span></div><div>&nbsp;</div><div style="text-align: center;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</div>
//         </td>
//       </tr>
//     </table>
//   <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%"><tbody><tr><td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 5px 0px;background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2nYCc wrapper-mobile" style="text-align:center;"><tbody><tr><td align="center" bgcolor="#FF6666" class="inner-td" style="-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:15px;text-align:center;background-color:inherit;"><a style="background-color:#FF6666;height:px;width:190px;font-size:15px;line-height:px;font-family:Helvetica, Arial, sans-serif;color:#ffffff;padding:12px 12px 12px 12px;text-decoration:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:1px solid #FF6666;display:inline-block;" href="" target="_blank">CALL TO ACTION</a></td></tr></tbody></table></td></tr></tbody></table>
//           </td>
//         </tr>
//       </table>
//       <!--[if mso]>
//       </td></tr></table>
//       </center>
//       <![endif]-->
//
//         </td>
//       </tr>
//     </table>
//
//     <table class="module"
//            role="module"
//            data-type="spacer"
//            border="0"
//            cellpadding="0"
//            cellspacing="0"
//            width="100%"
//            style="table-layout: fixed;">
//       <tr>
//         <td style="padding:0px 0px 2px 0px;"
//             role="module-content"
//             bgcolor="#FF6666">
//         </td>
//       </tr>
//     </table>
//
//     <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="font-size:6px;line-height:10px;background-color:#FFFFFF;padding:36px 0px 23px 0px;" valign="top" align="center">
//
//             <img class="max-width" width="160" height="44" src="http://static.sendgrid.com.s3.amazonaws.com/emails/internal/Nurture/Logo_footer.png" alt="" border="0" style="display:block;color:#000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;">
//
//         </td>
//       </tr>
//     </table>
//
//     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns">
//       <tr>
//         <td style="padding:10px 5px 90px 5px;background-color:#ffffff;" bgcolor="#ffffff">
//
//       <!--[if mso]>
//       <table width="99%" align="left"><tr><td>
//       <![endif]-->
//       <table style="padding: 0px 0px 0px 0px;"
//           align="left"
//           valign="top"
//           height="100%"
//           class="column column-0 of-1 empty">
//         <tr>
//           <td class="columns--column-content">
//
//     <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
//       <tr>
//         <td style="padding:0px 0px 0px 0px;background-color:#ffffff;"
//             height="100%"
//             valign="top"
//             bgcolor="#ffffff">
//             <div style="font-size:10px;line-height:150%;margin:0;text-align:center;">[Sender_Name]</div><div style="font-size:10px;line-height:150%;margin:0;text-align:center;">[Sender_Address]</div><div style="font-size:10px;line-height:150%;margin:0;text-align:center;">[Sender_City],&nbsp;[Sender_State] [Sender_Zip]</div><div style="font-size:10px;line-height:150%;margin:0;text-align:center;">&nbsp;</div><div style="font-size:10px;line-height:150%;margin:0;text-align:center;"><a href="[Unsubscribe]"><span style="color:#FF6666;">Unsubscribe</span></a> | <a href="[Unsubscribe_Preferences]"><span style="color:#FF6666;">Update Preferences</span></a></div>
//         </td>
//       </tr>
//     </table>
//
//           </td>
//         </tr>
//       </table>
//       <!--[if mso]>
//       </td></tr></table>
//       </center>
//       <![endif]-->
//
//         </td>
//       </tr>
//     </table>
//
//                               </td>
//                             </tr>
//                           </table>
//                           <!--[if mso]>
//                           </td></tr></table>
//                           </center>
//                           <![endif]-->
//                         </td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </div>
//     </center>
//   </body>
// </html>

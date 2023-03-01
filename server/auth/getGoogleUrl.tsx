// const { google } = require('@googleapis/oauth2');
// const oauth2 = google.oauth2('v2');
// const path = require('path');

// require('dotenv').config({
//   path: path.join(__dirname, '/.env')
// });

// const getGoogleOAuthUrl = async () => {
//   const oauth2Client = new google.auth.OAuth2(
//     process.env.GOOGLE_CLIENT_ID,
//     process.env.GOOGLE_CLIENT_SECRET,
//     process.env.GOOGLE_OAUTH_REDIRECT_URL
//   );

//   // generate a url that asks permissions for Blogger and Google Calendar scopes
//   const scopes = [
//     'https://www.googleapis.com/auth/userinfo.profile',
//     'https://www.googleapis.com/auth/userinfo.email'
//   ];

//   const url = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes
//   });

//   const {tokens} = await oauth2Client.getToken(url)
//   oauth2Client.setCredentials(tokens);

//   // const auth = new google.auth.GoogleAuth({
//   //   scopes: [
//   //     'https://www.googleapis.com/auth/userinfo.profile',
//   //     'https://www.googleapis.com/auth/userinfo.email'
//   //   ]
//   // })

//   // const authClient = await auth.getClient();
//   // google.options({ auth: authClient })

//   // const res = await oauth2.tokeninfo({
//   //   access_token: 
//   // })
  
//   // const rootUrl = 'https://accounts.google.com/o/oauth2/auth';

//   // const options = {
//   //   redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
//   //   client_id: process.env.GOOGLE_CLIENT_ID as string,
//   //   access_type: 'offline',
//   //   response_type: 'code',
//   //   prompt: 'consent',
//   //   scopes: [
//   //     'https://www.googleapis.com/auth/userinfo.profile',
//   //     'https://www.googleapis.com/auth/userinfo.email'
//   //   ].join(' ')
//   // }

//   // const qs = new URLSearchParams(options);

//   // return `${rootUrl}?${qs.toString()}`;
// }

// export default getGoogleOAuthUrl;
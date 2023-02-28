const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '/.env')
});

const getGoogleOAuthUrl = () => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/auth';

  const options = {
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scopes: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(' ')
  }

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthUrl;

// const {google} = require('googleapis');

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.GOOGLE_OAUTH_REDIRECT_URL
// );

// // generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = [
//   'https://www.googleapis.com/auth/blogger',
//   'https://www.googleapis.com/auth/calendar'
// ];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'offline',

//   // If you only need one scope you can pass it as a string
//   scope: scopes
// });

// const {tokens} = await oauth2Client.getToken(code)
// oauth2Client.setCredentials(tokens);
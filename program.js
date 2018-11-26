const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;



const oauth2Client = new OAuth2(
    "Client id here",
    "Client Secret id here", // Client Secret
    "Redirect URL" //  Redirect URL OauthPlayGround link
);


oauth2Client.setCredentials({
    refresh_token: "refresh_token" // refresh token
});

const accessToken = oauth2Client.refreshAccessToken()
    .then(res => res.credentials.access_token);





const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "userEmail here", // your account
        clientId: "Client id here",
        clientSecret: "Client Secret id here",
        refreshToken: "refresh_token here",
        accessToken: accessToken
    }
});

const mailOptions = {
    from: "me@gmail.com", //sender email
    to: "someone@expample.com", //receiver email
    subject: "Node js email server", //subject
    generateTextFromHTML: true, 
    html: `<h1>first email</h1>` //html content  if any 
};


smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});

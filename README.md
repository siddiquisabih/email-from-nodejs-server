# email-from-nodejs-server
# run npm install 

follow these steps

1) Go to google developer account and create project 

2) Select "Create API Credentials"

3) Select OAuth client ID

4) Now under Application Type, choose Web Application and a small form will open up with sections for Name and Restrictions. You can give    your client ID any name you like, but under Restrictions in the Authorized redirect URIs section add                                      https://developers.google.com/oauthplayground. Now press Create!   

5) Save your Client ID and Client Secret we will use it later

6) We need just a few more things before we get to the code. First, go to https://developers.google.com/oauthplayground and click the        tools icon in the top right. Check the box that says Use your own OAuth credentials and enter your client ID and secret. Without          closing out of the settings, enter https://mail.google.com/ into the box in the Select and authorize APIs section and press Authorize      APIs. You should get a very scary-looking screen 

7) Nothing to worry about, this just means Google hasn’t confirmed our app is okay to use (duh, we just made it). Click the Advanced          button on the left and then press Go to Your App’s Name (unsafe). We get another, less intimidating screen

8) Click Allow and you should get redirected back to the OAuth page. Now go to Step 2 of the sidebar on the left and press Exchange          authorization code for tokens.
   This should populate the two boxes below called Refresh token and Access token with a couple of strings. Copy down the Refresh token as    we’ll need it for later!

9) Add these information into program.js file and you are good to send email ... 

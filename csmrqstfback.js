var logo_url = 'https://webtask.io/images/symbol.svg';

Function.prototype.stringify = function () { 
    var match = this.toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/);
    return match ? match[1] : ''; 
};

module.exports = function (ctx, req, res) {

    // Configure routing

    if (req.method === 'GET')
        return handle_get_details();
    else if (req.method === 'POST') {
            return postMessageToSlack();
    }
    else 
        return handle_error({ code: 405 });

    function handle_error(error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(require('ejs').render(oops.stringify(), { logo_url: logo_url, ctx: ctx, error: error }));
    }

    function handle_get_details() {
      var slack = require('slack-notify')(ctx.secrets.SLACK_LP_URL);
      slack.send({
      channel: '#general',
      text: 'Hi, my landing page was just visited.',
      });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(require('ejs').render(get_details.stringify(), { logo_url: logo_url, ctx: ctx }));
    }
    
    function postMessageToSlack(){
      var slack = require('slack-notify')(ctx.secrets.SLACK_URL);
      slack.send({
      channel: '#cs-management-team',
      text: 'REQUEST FOR MARKETING INTERVIEW: ' + ctx.body.yourname + ', ' + ctx.body.email + ', ' + ctx.body.org,
    });
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(require('ejs').render(details_sent.stringify(), { logo_url: logo_url, ctx: ctx }));
    }
  
};

   

function get_details() {/*
<html>
<head>
    <title>Auth0 Feedback</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <style>

        body {
            font-family: "Avenir Next",Avenir,"Helvetica Neue",Hevetica,sans-serif;
        }

        .header-image {
            position: relative;
            height: 160px;
            width: 100%;
            overflow: hidden;
            margin-bottom: 25px;
        }

        .header-image .image{
            background: transparent url("<%- ctx.secrets.BG_URL || ctx.secrets.LOGO_URL || logo_url %>") center center no-repeat;
            background-size: cover;
            -webkit-filter: blur(6px);
            -moz-filter: blur(6px);
            -o-filter: blur(6px);
            -ms-filter: blur(6px);
            filter: blur(6px);
            position: absolute;
            top: -20px;
            right: -20px;
            bottom: -20px;
            left: -20px;
            opacity: 0.9;
        }

        .user-logo {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            box-shadow: 0px 2px 4px 0px #D0D2D3;
            position: absolute;
            top: 212px;
            left: 49.5%;
        }

        .auth0-logo {
            width: 114px;
            height: 126px;
            border-radius: 0%;
            box-shadow: 0px 0px 0px 0px #D0D2D3;
            position: absolute;
            top: 20px;
            right: 45.5%;
        }

        p {
            font-size: 20px;
            margin: 15px 0 0; 
        }

        .input-email {
            max-width: 325px;
            margin: 20px auto;
        }
        
        .input-text {
            max-width: 325px;
            margin: 20px auto;
        }

        .button-invitation {
            background: #E76D5F;
            border-radius: 25px;
            font-size: 16px;
            height: 50px;
            border: none;
            color: white;
            padding: 0 30px;
        }

        .button-invitation:hover {
            background: #DD6557;
        }

        .footer {
            position: relative;
            overflow: hidden;
            margin: 40px 0;
        }

        .separator-line {
            height: 1px;
            width: 100%;
            border-top: 1px solid #E76D5F;
            position: absolute;
            top: 50%;
            left: 0;
        }


        .footer-copy {
            background: white;
        }

        .webtask-copy a {
            color: #333;
        }

        .webtask-copy a:hover {
            text-decoration: none
        }

        .create-copy {
            font-size: 16px;
        }
        
        .create-copy a {
            color: #E76D5F;
        }

        .create-copy a:hover {
            color: #DD6557;
        }

    
    </style>

</head>
<body>
    <header>
        <div class="header-image">
            <div class="image"></div>
        </div>
        <img src="https://i.cloudup.com/auqjMuBIQ5-3000x3000.png" alt="Auth0" class="auth0-logo">
        
    </header>
    <div class="container">
        <div class=" col-md-6 col-md-offset-3 text-center">
            <h2>We're going to do great things together</h2>
            <p>Thanks for volunteering to help us learn more. Please confirm your details and a member of our Marketing and Analytics team will contact you soon:</p>
            <form method="POST">
              <div class="form-group">
              <input type="text" class="form-control input-text" name="yourname" placeholder="Your Name" required>
              <input type="text" class="form-control input-text" name="org" placeholder="Organization" required>
                <input type="email" class="form-control input-email" name="email" placeholder="Email Address" required>
              </div>
              <button type="submit" class="button-invitation">I'm Happy to Help</button>
            </form>
        </div>
        
    </div>
    <div class="footer">
        <div class="separator-line"></div>
        <div class="col-md-4 col-md-offset-4 text-center footer-copy">
            <p class="webtask-copy">Powered by &nbsp;<a href="https://webtask.io"><img src="https://webtask.io/images/symbol.svg" alt="Webtasks" width="30px" height="30px">&nbsp; Auth0 Webtask</a></p>
        </div>
    </div>
</body>
</html>
*/}

function details_sent() {/*
<html>
<head>
    <title>Auth0 Feedback</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
</head>
<body style="padding-top: 30px;">
    <div class="container">
        <div class="jumbotron col-md-6 col-md-offset-3 text-center">
            <img src="https://i.cloudup.com/auqjMuBIQ5-3000x3000.png" width="100" heigth="100">
            <h2>Done!</h2>
            <p><small>We'll reach out soon.</small></p>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
                <p>Powered by <a href="https://webtask.io">Auth0 Webtask</a></p>
            </div>
        </div>
    </div>
</body>
</html>
*/}

function oops() {/*
<html>
<head>
    <title><%= ctx.secrets.SLACK_ORG %> signup</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
</head>
<body style="padding-top: 30px;">
    <div class="container">
        <div class="jumbotron col-md-6 col-md-offset-3 text-center">
            <img src="<%- ctx.secrets.LOGO_URL || logo_url %>" width="100" heigth="100">
            <h2>Something is not quite right...</h2>
            <p><%= error.message %></p>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
                <p>Powered by <a href="https://webtask.io">Auth0 Webtasks</a>&nbsp;|&nbsp;Create <a href="https://tomasz.janczuk.org/2016/02/create-slack-signup-page-with-webtasks.html">your own Slack invite</a></p>
            </div>
        </div>
    </div>
</body>
</html>
*/}
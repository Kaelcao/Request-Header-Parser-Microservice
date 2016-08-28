var express = require("express");
var app = express();

app.set('port', process.env.PORT || 5000);

app.get('/api/whoami', (req,res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers["accept-language"];
    language  = language.substring(0,language.indexOf(','));
    var userAgent = req.headers["user-agent"];
    var software = userAgent.substring(userAgent.indexOf('(')+1,userAgent.indexOf(')'))
    res.json({
        ipaddress:ip,
        language,
        software
    });
});

app.listen(app.get('port'),() => {
    console.log('App is listening at port ' + app.get('port'));
})
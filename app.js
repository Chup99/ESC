const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// database 
const createNewGuest = require('./mysql/createNewGuest');

// Load the SDK
let RBnode = require("rainbow-node-sdk");

// Define your configuration
let options = {
    rainbow: {
        host: "sandbox"
    },
    credentials: {
        login: "shermine_chua@mymail.sutd.edu.sg", // To replace by your developer credendials
        password: "N-:@.OB]Go;3" // To replace by your developer credentials
    },
    // Application identifier
    application: {
        appID: "221749705f0811ea9a6dcf004cf8c14e",
        appSecret: "Mu7uP01SpKpx2iCLgEud4APWdgMv2rRAbLimjUt1JzCOUIy3pcMvVZFZ6ZWT9gGk"
    },
    // Logs options
    logs: {
        enableConsoleLogs: true,
        enableFileLogs: false,
        "color": true,
        "level": 'debug',
        "customLabel": "vincent01",
        "system-dev": {
            "internals": false,
            "http": false,
        }, 
        file: {
            path: "/var/tmp/rainbowsdk/",
            customFileName: "R-SDK-Node-Sample2",
            level: "debug",
            zippedArchive : false/*,
            maxSize : '10m',
            maxFiles : 10 // */
        }
    },
    // IM options
    im: {
        sendReadReceipt: true
    }
};

// Instantiate the SDK
let rbNode = new RBnode(options);

// Start the SDK
rbNode.start();


app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/chat', function(req, res){
    console.log("hi");
    res.sendFile(__dirname + "/views/chat.html");
    // res.end();
});

app.get('/hello', (req, res) => {
    res.send({hello: "Hello world"});
    res.status(200);
    res.end();
})

app.get('/query', (req, res) =>{
    var data = req.query;
    var name = data.name;
    var pwd = data.pwd;
    if (name != undefined && pwd != undefined){
        console.log(`Name is: ${name} and Password is: ${pwd}`);
        res.send("I got it thank you!");
        res.end();
    } else {
        res.status(500).send("Oi don't send this!");
        res.end();
    }
})

// app.get('/book/:id', (req, res) =>{
//     var ID = req.params.id;
//     console.log(`Book ID is: ${ID}`);
//     res.send("I got it thank you!");
//     res.end();
// })

app.get('/agent', (req, res) =>{
    var agent = req.query;
    var agentID = agent.id;
    console.log(`${ID}'s page`);
    res.send("Agent page!");
    res.end();
})

app.post('/help', (req, res) =>{
    var data = req.body;
    var name = data.name;
    var skill= data.skill;
    //var password = data.pwd;

    // ANCHOR in the node console
    console.log(`User: ${name} Skill: ${skill}`);

    if (name!='' && skill !=undefined){
        // res.status(200).send("Name entered!");
        
        // res.redirect(`/agent?id=${usrname}`);
        // res.redirect(`/agent/${usrname}/${password}`);

        // TODO how to make sure different guest user is created
        let ttl = 3600;  // active for one hour
        rbNode.admin.createAnonymousGuestUser(ttl).then(guest=>{
            // console.log(cred);

            // ANCHOR guest user get different login email
            // TODO create a json with this and pass to queue to use
            console.log("[Name] : " + name + " [Email] : " + guest.loginEmail + " [Skill] : " + skill);
            // console.log("########### -----> reach here");
            createNewGuest.createGuestUserInSQL(name, guest.loginEmail, skill);
            // let contacts = rbNode.contacts.getAll();
            // console.log(contacts);
            res.status(200).send({guest: guest});
            res.end();
        }).catch(err=>{
            console.error(err);
            res.status(500).send({error: err});
            res.end();
        });
    }
    else{
        console.log("invalid skill");
        res.status(200).send("Hoi press skill lah!");
        res.end();
    }


})

// port number
app.listen(8000);
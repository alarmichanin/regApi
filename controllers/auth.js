const fs = require('fs');

module.exports.login = (req, res) => {
    req.session.user =false;
    let nameOfFile = (req.body.email).split("").map(el => el.charCodeAt(0) ^ 1).join("") + '.json';
    let getFiles = fs.readdirSync("./data");
    if (getFiles.indexOf(nameOfFile) === -1)
        res.send('User doesn\'t exist');
    else {
        let user = require("../data/" + nameOfFile)
        let passForCheck = (req.body.password).split("").map(el => el.charCodeAt(0) ^ 1).join("");
        if (user.password === passForCheck) {
            req.session.user = true
            res.redirect("/btcRate")
        } else
            res.send('Some wrong data (password)')

    }
}

module.exports.create = (req, res) => {
    let nameOfFile = (req.body.email).split("").map(el => el.charCodeAt(0) ^ 1).join("") + '.json';
    let getFiles = fs.readdirSync("./data");
    if (getFiles.indexOf(nameOfFile) === -1) {
        let data = {
            email: req.body.email,
            password: (req.body.password).split("").map(el => el.charCodeAt(0) ^ 1).join("")
        };
        fs.writeFile('./data/' + nameOfFile, JSON.stringify(data), () => {
                console.log('Everything is good!');
                res.send('Everything is good!')
            }
        )
    } else {
        res.send('User exist');
    }
}
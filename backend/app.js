//Par défaut 2-> 33 
//import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
//importer mongoose module
const mongoose = require('mongoose');
//import bcrypt module
const bcrypt = require("bcrypt");
//importer path
const path = require('path');
//importer multer
const multer = require('multer');
//importer Axios
const axios = require('axios');

//Connect APP with DB server (changeable a chaque projet)
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

//create express application
const app = express();

// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Upload Files Configuration
app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    // 'application/pdf': 'pdf' ajout d'un document pdf
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// import ObjectID
const { ObjectId } = require("mongodb");


//Model Importation
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
const Staduim = require("./models/staduim");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");






//Partie à developper: traittement des requests
// 1-3 getAll 4-6 getById 7-9 delete 10-12 add 13-15 edit 16 search 17 signup 18 login
//1-Business Logic:Get all Matches (service getAllMatches) (Peut être appelée dans plusiers component dashboard admin component matches-table / matches)
app.get("/matches", (req, res) => {
    //traitement logic
    Match.find().then((docs) => {
        res.json({ matchesArray: docs, message: "Done" });
    });
});

//2-Business Logic:Get all teams (service getAllTeams) (Peut être appelée dans plusiers component dashboard admin component teams-table/ teams)
app.get("/teams", (req, res) => {
    //traitement logic
    Team.find().then((docs) => {
        res.json({ teamsArray: docs, message: "Done" })
    });
});

//3-Business Logic:Get all players (service getAllPlayers) (Peut être appelée dans plusiers component dashboard admin compoent players-table/ players)
app.get("/players", (req, res) => {
    //traitement logic
    Player.find().then((docs) => {
        res.json({ playersArray: docs, message: "Done" });
    });
});

//4-Business Logic:Get one Match (service getMatchById) (component match-info (en cliquant sur display dash))
app.get("/matches/:x", (req, res) => {
    //traitement logic
    let id = req.params.x;
    Match.findOne({ _id: id }).then((doc) => {
        res.json({ match: doc });
    })
});

//5-Business Logic:Get one team (service getTeamById) (component team-info (en cliquant sur display dash)) 
app.get("/teams/:id", (req, res) => {
    //traitement logic
    let id = req.params.id;
    Team.findOne({ _id: id }).then((doc) => {
        res.json({ team: doc });
    });
});

//6-Business Logic:Get one player (service getPlayerById) (component player-info (en cliquant sur display dash))
app.get("/players/:id", (req, res) => {
    //traitement logic
    let id = req.params.id;
    Player.findOne({ _id: id }).then((doc) => {
        res.json({ player: doc });
    });
});


//7-Business Logic:delete one Match (service deleteMatchById) (component matches-table (dashboard) (à l'intérieur du fonction delete))
app.delete("/matches/:x", (req, res) => {
    //traitement logic
    let id = req.params.x;
    //delete match
    Match.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });

});

//8-Business Logic:delete one team By id (service deleteTeamById) (component teams-table (dashboard) (à l'intérieur du fonction delete))
app.delete("/teams/:id", (req, res) => {
    //traitement logic
    let id = req.params.id;
    //delete Team
    Team.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });

});

//9-Business Logic:delete one player (service deletePlayerById) (component players-table (dashboard) à l'intérieur du fonction delete)
app.delete("/players/:id", (req, res) => {
    //traitement logic
    let id = req.params.id;
    //delete Team
    Player.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });
});


//10-Business Logic:Post one match (service addMatch) (component add-match)
app.post("/matches", (req, res) => {
    //traitement logic
    console.log("Here into BL: Add a match");
    //Récupérattion de l'objet
    let match = new Match(req.body);
    //Enregistrer l'objet dans la base de donnéees
    match.save();
    res.json({ message: "Added with success" });
});


//11-Business Logic:post one team (service addTeam) (componet add-team)
app.post("/teams", (req, res) => {
    //traitement logic
    let team = new Team(req.body);
    //Enregistrer l'objet dans la base de données
    team.save();
    res.json({ message: "Added with success" });

});

//12-Business Logic:post one player  (service addPlayer) (component add-player)
app.post("/players", (req, res) => {
    //traitement logic
    let player = new Player(req.body);
    //Enregistrer l'objet dans la base de données
    player.save();
    res.json({ message: "Added with success" });
});

//13-Business Logic:update  match (service editMatch) (component edit-match à l'intèrieur du fonction editMatch())
app.put("/matches", (req, res) => {
    //traitement logic
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then(
        (response) => {
            if (response.nModified == 1) {
                res.json({ isUpdated: true });
            } else {
                res.json({ isUpdated: false });
            }
        }
    );

});
//14-Business Logic:update team (service editTeam) (component edit-team à l'intèrieur du fonction editTeam())
app.put("/teams", (req, res) => {
    //traitement logic
    let newTeam = req.body;
    Team.updateOne({ _id: newTeam._id }, newTeam).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    });
});
//15-Business Logic:edit player //Pas encore (service editPlayer) (component edit-player à l'intèrieur du fonction editPlayer())
app.put("/players", (req, res) => {
    //traitement logic
    let newPlayer = req.body;
    Player.updateOne({ _id: newPlayer._id }, newPlayer).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    });

});
// 16 searchMatches (service searchMatch) (component search)
app.post("/matches/search", (req, res) => {
    console.log("Here into business Logic", req.body)
    //traitement logic
    let search = req.body;
    Match.find({ $or: [{ scoreOne: search.scoreOne }, { scoreTwo: search.scoreTwo }] }).then((docs) => {
        res.json({ searchMatches: docs });
    });
});
// 17 SignupAdmin(signup en générale)
// app.post("/users/signup", (req, res) => {
//     console.log("Here into BL: signup", req.body);
//     bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
//         let user = new User({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             pwd: cryptedPwd,
//             tel: req.body.tel,
//             role: req.body.role,

//         });
//         user.save((err, doc) => {
//             console.log("Here error", err);
//             console.log("here doc", doc);
//             if (err) {
//                 res.json({ message: false });
//             } else {
//                 res.json({ message: true });
//             }
//         });


//     });

// });

// 18 login (service login) (component login)
app.post("/users/login", (req, res) => {
    let userToSend;
    User.findOne({ email: req.body.email }).then((response) => {
        console.log("Here doc", response);
        if (!response) {
            res.json({ message: "0" });
        }
        userToSend = response;
        return bcrypt.compare(req.body.pwd, response.pwd);

    }).then((pwdResponse) => {
        console.log("Here pwdResponse", pwdResponse);
        if (!pwdResponse) {
            res.json({ message: "1" });
        } else {
            // Obeject {fName, lName, id, role}
            let userObj = {
                id: userToSend._id,
                fName: userToSend.firstName,
                lName: userToSend.lastName,
                role: userToSend.role,

            };
            res.json({ message: "2", user: userObj });
        }
    }

    );
});

/*************************************Staduim********************************************** */
//19-Business Logic:add staduim (service addStaduim) (component add-staduim)
app.post("/staduims", (req, res) => {
    //traitement logic
    console.log("Here into BL: Add a staduim");
    //Récupérattion de l'objet
    let staduim = new Staduim(req.body);
    //Enregistrer l'objet dans la base de donnéees
    staduim.save();
    res.json({ message: "Added with success" });
});
//20-Business Logic:Get all staduims (service getAllStaduims) (Peut être appelée dans plusiers component dashboard admin component staduimss-table / staduims)
app.get("/staduims", (req, res) => {
    //traitement logic
    Staduim.find().then((docs) => {
        res.json({ staduimsArray: docs, message: "Done" });
    });

});
//21-Business Logic:delete one Staduim (service deleteStaduimById) (component staduims-table (dashboard) (à l'intérieur du fonction delete))
app.delete("/staduims/:x", (req, res) => {
    //traitement logic
    console.log("Here into BL: Delete a match");
    let id = req.params.x;
    //
    Staduim.deleteOne({ _id: id }).then((response) => {
        console.log("Here DB response", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });

});
//22-Business Logic:Get one staduim (service getStaduimById) (component staduim-info/edit-Staduim (en cliquant sur display dash))
app.get("/staduims/:x", (req, res) => {
    //traitement logic
    let id = req.params.x;
    Staduim.findOne({ _id: id }).then((doc) => {
        res.json({ staduim: doc });
    })

});
//23-Business Logic:update  staduim (service editMatch) (component edit-match à l'intèrieur du fonction editMatch())
app.put("/staduims", (req, res) => {
    //traitement logic
    let newStaduim = req.body;
    Staduim.updateOne({ _id: newStaduim._id }, newStaduim).then(
        (response) => {
            if (response.nModified == 1) {
                res.json({ isUpdated: true });

            } else {
                res.json({ isUpdated: false });
            }
        }
    );

});
/**************************************************uSER*********************************************** */
// 24- getAllUser
app.get("/users", (req, res) => {
    User.find({role:'user'}).then((docs) => {
        res.json({ usersArray: docs });
    });
});
// 25-getUserById
app.get("/users/:id", (req, res) => {
    User.findOne({ _id: req.params.id }).then((doc) => {
        res.json({ user: doc });
    });
});
// 25- deleteUser
app.delete("/users/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });
});
// 26- Business Logic: signup with avatar
app.post("/users/signup",
    multer({ storage: storageConfig }).single('img'),
    (req, res) => {
        // console.log("file", req.file );
        //req.protocol=> http req.get('host')=> localhost:3000
        let url = req.protocol + '://' + req.get('host');
        //  img: url + '/images/' + req.file.filename;
        console.log("Here into BL: signup", req.body);
        bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
            let imgPath;
            imgPath= req.file?  url + "/images/" +req.file.filename:  url + "/images/avatar.png";
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                tel: req.body.tel,
                role: req.body.role,
                img:imgPath,
            });
            user.save((err, doc) => {
                console.log("Here error", err);
                console.log("here doc", doc);
                if (err) {
                    res.json({ message: false });
                } else {
                    res.json({ message: true });
                }
            });


        });
    });
/************************************************API WEATHER    ********************************************* */
// 27-Weather api
app.post("/weather", (req, res) => {
    //traitement logic
    console.log("Here into BL:Weather", req.body);
    const city = req.body.city;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey + "&units=metric";
    axios.get(apiUrl).then((response) => {

        console.log('Here response', response);
        const weather = response.data.main;
        const wind = response.data.wind.speed * 2;
        const name = response.data.name;
        const weatherTab = response.data.weather;
        const img = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        console.log('here weatherTab', weatherTab);
        console.log('Here weather main', weather);
        //Result selon choix depuis response
        const result = {
            name: name,
            temp: weather.temp,
            pressure: weather.pressure,
            humidity: weather.humidity,
            windSpeed: wind,
            description: weatherTab[0].description,
            img: img,
        }
        console.log('Here result', result);
        res.status(200).json({
            result: result
        })
    });
});
/********************************************Reclamation****************************************** */
// 28- Businesse Logic: add reclamation
app.post("/reclamation", (req, res) => {
    //traitement logic
    console.log("Here into BL:reclamation", req.body);
    let reclamation = new Reclamation(req.body);
    reclamation.save();
    res.json({ message: "Added with success" });

});
// 29- Business Logic: getUserReclamation
app.get("/reclamation/:id", (req, res) => {
    Reclamation.find({ userId: req.params.id }).then((docs) => {
        res.json({ reclamationsArray: docs });
    });


});
// 29- Business Logic: delete Reclamation
app.delete("/reclamation/:id", (req, res) => {
    Reclamation.deleteOne({ _id: req.params.id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isdeleted: false });
        }
    });
});
/********************************************Aggregate MatchwithComments******************************************** */
// 30- Business Logic: add Comment (important)
app.post("/addComment", (req, res) => {
    console.log("Here into addcomment", req.body);
    const comment = new Comment({
        content: req.body.content,
        userId: ObjectId(req.body.userId),
        matchId: ObjectId(req.body.matchId),
    });
    comment.save((err, result) => {
        console.log("Error", err);
        if (result) {
            res.status(200).json({
                message: "Comment added with success",
            });
        }
    });
});

// 31- Business Logic: get matches with comment
//app.get("/matches/comments") génère un erreur meme que app.get("/matches/:id")
app.get("/matches/comments/matchwithcomment", (req, res) => {
    //traitement logic
    Match.aggregate(
        [
            {
                $lookup: {
                    from: "comments", // collection to join
                    localField: "_id", //field from the input documents
                    foreignField: "matchId", //field from the documents of the "from" collection
                    as: "comments", // output array field
                },
            },
        ],
        (error, docs) => {
            console.log("Here matches with comments", docs);
            res.status(200).json({
                matches: docs,
            });
        }
    );
});

//par défaut 83->84
//make app importable
module.exports = app;
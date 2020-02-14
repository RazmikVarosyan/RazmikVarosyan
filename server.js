var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs')
app.use(express.static('.'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log('ok');
});
matrix = [];
GrassArr = [];
GrassEaterArr = [];
PredatorArr = [];
HunterArr = [];
ZombieArr = [];
JrhexexArr = [];
bombArr = [];
weath = "winter"
Grass = require("./Grass");
GrassEater = require("./GrassEater");
Predator = require("./Predator");
Hunter = require("./Hunter");
Zombie = require("./Zombie");
Jrhexex = require("./Jrhexex");
bomb = require("./bomb")

// var side = 10;
var n = 30;
var m = 30;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = Math.floor(Math.random() * 3);
    }
}


var HunterQanak = Math.random() * (25 - 10) + 10;
var arr = [];
for (var i = 0; i < matrix.length; i++) {
    arr.push(i);
}
while (HunterQanak > 0) {
    elem = Math.floor(Math.random() * arr.length);
    matrix[elem][Math.floor(Math.random() * matrix[0].length)] = 4;
    arr.splice(arr.indexOf(elem), 1);
    HunterQanak--;
}




GrassEaterQanak = 50;

console.log(GrassEaterQanak);

while (GrassEaterQanak > 0) {
    x = Math.floor(Math.random() * matrix[0].length);
    y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        GrassEaterQanak--;

    }
}

PredatorQanak = 50;

console.log(PredatorQanak);

while (PredatorQanak > 0) {
    x = Math.floor(Math.random() * matrix[0].length);
    y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        PredatorQanak--;

    }
}




ZombieQanak = 50;

console.log(ZombieQanak);

while (ZombieQanak > 0) {
    x = Math.floor(Math.random() * matrix[0].length);
    y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
        ZombieQanak--;

    }
}

io.sockets.emit('Send Matrix', matrix);


function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1
                GrassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2;
                GrassEaterArr.push(new GrassEater(x, y, 2));
            }
            /* else if (matrix[y][x] == 3) {
                matrix[y][x] = 3;
                PredatorArr.push(new Predator(x, y, 3 ))
            } */
            else if (matrix[y][x] == 4) {
                matrix[y][x] = 4;
                HunterArr.push(new Hunter(x, y, 4));
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5;
                ZombieArr.push(new Zombie(x, y, 5));
            }
            else if (matrix[y][x] == 6) {
                matrix[y][x] = 6;
                JrhexexArr.push(new Jrhexex(x, y, 6));
            }
        }
    }
    io.sockets.emit("Send Matrix", matrix);
}
function game() {
    for (var i in GrassArr) {
        GrassArr[i].mul();
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].eat();
    }
    for (var i in PredatorArr) {
        PredatorArr[i].eat();
    }
    for (var i in HunterArr) {
        HunterArr[i].eat();
    }
    for (var i in ZombieArr) {
        ZombieArr[i].eat();
    }
    for(var i in JrhexexArr){
        JrhexexArr[i].mul()    
    }

    //     for (var y = 0; y < matrix.length; y++) {
    //         for (var x = 0; x < matrix[y].length; x++) {

    //             if (matrix[y][x].index == 1) {
    //                 matrix[y][x].mul();
    //             }
    //             else if (matrix[y][x].index == 2) {
    //                 matrix[y][x].eat();
    //             }
    //             else if (matrix[y][x].index == 3) {
    //                 matrix[y][x].eat();
    //             }
    //             else if (matrix[y][x].index == 4) {
    //                 matrix[y][x].move();
    //             }
    //             else if (matrix[y][x].index == 5) {
    //                 matrix[y][x].eat();
    //             }
    //         }
    //     }
    io.sockets.emit("Send Matrix", matrix);
}

setInterval(game, 1000);



//////////////////////////Ռազ ջան, նայիր, կարծում եմ աշխատեց: Ինձ մոտ մի քիչ ծանր ա աշխատում, 
//բայց ամեն դեպքում շարժվում ուտում են
//Հիմա փորձիր սրանք գրես,,,իհարկե քո ֆունկցիաներով:

/////////////////




// function Jrhexex() {

//     io.sockets.emit("send matrix", matrix);
// }


function addGrass() {
    for (var i = 0; i < 7; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            GrassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addGrassEater() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            GrassEaterArr.push(new GrassEater(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function fJrhexex() {
    for (y = 0; y < n; y++) {
        for (x = 0; x < m; x++) {
            matrix[y][x] = 6;
            var jrhex = new Jrhexex(x, y, 6)
            JrhexexArr.push(jrhex);
        }
    }
    io.sockets.emit("send Matrix", matrix)
}


io.on('connection', function (socket) {
    createObject();
    socket.on("Jrhexex", fJrhexex);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
});


// Նայի մի հատ ֆունկցիայա, որ մեջը հրթականությամբ գրած ա:
//Որ եթե ձմեռ ա, գա գարուն և այլն,,ու 5 վարկյանը մեկ կանչվում ա
function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);


var statistics = {};

setInterval(function() {
    statistics.grass = GrassArr.length;
    statistics.grassEater = GrassEaterArr.length;
    statistics.predator = PredatorArr.length;
    statistics.hunter = HunterArr.length;
    statistics.zombie = ZombieArr.length;
    statistics.jrhexex = JrhexexArr.length;
    statistics.bomb = bombArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)
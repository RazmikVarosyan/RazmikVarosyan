
var socket = io();
var side = 20;
function setup() {
    createCanvas(600, 600);
    background('#acacac');
}
var weath
//էստեղ լսում ա եղանակը ու որպես արկումենտ ստանում սերվերի weath-ը
socket.on("weather", function (data) {
    weath = data;
})

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var object = matrix[y][x];
            if (object == 1) {
                fill("green");
                if(weath == "winter"){
                    fill("white")
                }else if(weath == "spring"){
                    fill('lightgreen')
                }else if(weath == "summer"){
                    fill("brown")
                }
            }
            else if (object == 0) {
                fill('#acacac');
            }
            else if (object == 2) {
                fill('yellow');
            }
            else if (object == 3) {
                fill('red'); 
            }
            else if (object == 4) {
                fill('blue');         
            }
            else if (object == 5) {
                fill('orange');       
            }
            else if (object == 6) {
                fill('lightblue');       
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on("Send Matrix", nkarel);



function Jrhexex() {
    socket.emit("Jrhexex")
}
 function addGrass() {
    socket.emit("add grass")
} 
function addGrassEater() {
    socket.emit("add grassEater")
} 
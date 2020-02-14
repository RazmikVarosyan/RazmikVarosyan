let LeavingCreator = require("./class")
module.exports = class Grass extends LeavingCreator {
    eat() {
       var xot = super.chooseCell(1);
       var xotakerner = super.chooseCell(2);
       var gishatichner = super.chooseCell(3);
       var vorsordner = super.chooseCell(4);
       var zombiner =  super.chooseCell(5);
        xot.concat(xotakerner,gishatichner,vorsordner,zombiner)
       if(xot){
           var newX = xot[i];
           var newY = xot[i];
           matrix[newY][newX] =matrix[this.y][this.x];
           matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for(i in bombArr){
                if(GrassArr[i].x == newX && GrassArr[i].y == newY){
                    GrassArr.splice(i,1);
                }
                else  if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
                    GrassEaterArr.splice(i,1);
                }
                else  if(PredatorArr[i].x == newX && PredatorArr[i].y == newY){
                    PredatorArr.splice(i,1);
                }
                else  if(HunterArr[i].x == newX && HunterArr[i].y == newY){
                    HunterArr.splice(i,1);
                }
                else  if(ZombieArr[i].x == newX && ZombieArr[i].y == newY){
                    ZombieArr.splice(i,1);
                }
            }
       }
    }
}
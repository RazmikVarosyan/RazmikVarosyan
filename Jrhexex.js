let LeavingCreator = require("./class");
module.exports = class Jrhexex extends LeavingCreator {
    mul() {
        this.multiply++;
        let JrhexexCells0 = super.chooseCell(0);
        let JrhexexCells1 = super.chooseCell(1);
        let JrhexexCells2 = super.chooseCell(2);
        let JrhexexCells3 = super.chooseCell(3);
        let JrhexexCells4 = super.chooseCell(4);
        let JrhexexCells5 = super.chooseCell(5);
        JrhexexCells0.concat(JrhexexCells1, JrhexexCells2, JrhexexCells3, JrhexexCells4, JrhexexCells5)
        let newCell = JrhexexCells0[Math.floor(Math.random() * JrhexexCells0.length)]
        for(let i in newCell){
            if (newCell) {
                var newX = newCell[i];
                var newY = newCell[i];
                matrix[newY][newX] = 6;
                JrhexexArr.push(new Jrhexex(newX, newY, 6));

                //Ջան, նայի,,ստեղ ինչի ես վառեր ստեղծել,,իրանց արդեն ունեիր

              /*   var GrassArr = [];
                var GrassEaterArr = [];
                var PredatorArr = [];
                var HunterArr = [];
                var ZombieArr = [];
               */
               GrassArr = [];
               GrassEaterArr = [];
               PredatorArr = [];
               HunterArr = [];
               ZombieArr = [];
              
                this.x = newX;
                this.y = newY;
            }
        }
        
    }
    // eat(){
    //     let JrhexexCells1 = super.chooseCell(1);
    //     let JrhexexCells2 = super.chooseCell(2);
    //     let JrhexexCells3 = super.chooseCell(3);
    //     let JrhexexCells4 = super.chooseCell(4);
    //     let JrhexexCells5 = super.chooseCell(5);
    //     var final1 = JrhexexCells1.concat(JrhexexCells2, JrhexexCells3, JrhexexCells4, JrhexexCells5)
    //     let newCell1 = final1[Math.floor(Math.random() * final1.length)]
    //     if(newCell1){
    //         var newX = newCell1[i];
    //         var newY = newCell1[i];
    //         matrix[newY][newX] = 6;

    //     for(var i in JrhexexArr){
    //         if(GrassArr[i].x == newX && GrassArr[i].y == newY){
    //             GrassArr.splice(i,1)
    //         }
    //         else if(GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY){
    //             GrassEaterArr.splice(i,1)
    //         }
    //         else if(PredatorArr[i].x == newX && PredatorArr[i].y == newY){
    //             PredatorArr.splice(i,1)
    //         }
    //         else if(HunterArr[i].x == newX && HunterArr[i].y == newY){
    //             HunterArr.splice(i,1)
    //         }
    //         else if(ZombieArr[i].x == newX && ZombieArr[i].y == newY){
    //             ZombieArr.splice(i,1)
    //         }
    //     }
    // }
    //     else{
    //         this.mul();
    //     }
    // }
}
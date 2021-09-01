class Check{

    

    constructor(allItems,currentPlayer){
        this.currentPlayer = currentPlayer;
        this.allItems = allItems;
        this.allMoves = [];
        this.AllCombinations();
    }


    AllCombinations(){

        console.log("allItem12222s " + this.allItems);
       
        for (const property in this.allItems) {
            console.log(`${property}: ${this.allItems[property]}`);
            if(this.allItems[property] === "BlackPawn.png"){
                this.GetAllPawnMoves(property);
            }
        }

        console.log(this.allMoves);
       
    }



    GetAllPawnMoves(currentPosition){
        console.log("currentPosition " + typeof currentPosition);


        
        let numericalCurrentPosition = parseInt(currentPosition);
        let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
        let potentalNewPosition = "";
        numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);

        console.log("numericalCurrentPosition " + numericalCurrentPosition)
        console.log("numericalCurrentPositionRemainder " + numericalCurrentPositionRemainder)

        // let row = numericalCurrentPosition + 1
        // let col = numericalCurrentPositionRemainder + 1

        // console.log("row " + row)
        // console.log("col " + col);

        potentalNewPosition = (numericalCurrentPosition + 1).toString() +  (numericalCurrentPositionRemainder + 1).toString()

        console.log("potentalNewPosition " + typeof potentalNewPosition);

        console.log(this.allItems[potentalNewPosition]);

        if((this.allItems[potentalNewPosition] !== undefined) && (this.allItems[potentalNewPosition] !== "nothing") && (this.allItems[potentalNewPosition].substring(0,5) !== this.currentPlayer)){
            console.log("-----------------------------------")
            this.allMoves.push(potentalNewPosition)
        }

        potentalNewPosition = (numericalCurrentPosition + 1).toString() +  (numericalCurrentPositionRemainder - 1).toString()
        console.log("potentalNewPosition after " + potentalNewPosition);

        console.log(this.allItems[potentalNewPosition]);

        if((this.allItems[potentalNewPosition] !== undefined) && (this.allItems[potentalNewPosition].substring(0,5) !== this.currentPlayer) && (this.allItems[potentalNewPosition] !== "nothing")){
            console.log("++++++++++++++++++++++++++++")
            this.allMoves.push(potentalNewPosition)
        }

        potentalNewPosition = (numericalCurrentPosition + 1).toString() +  (numericalCurrentPositionRemainder).toString()
        if(this.allItems[potentalNewPosition] == "nothing"){
            console.log("tttttttttttttttttttttttttttttttttt")
            this.allMoves.push(potentalNewPosition);
        }


        if(numericalCurrentPosition == 2){
            potentalNewPosition = (numericalCurrentPosition + 2).toString() +  (numericalCurrentPositionRemainder).toString()
            console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

            console.log("potentalNewPosition13243545 " + this.allItems[potentalNewPosition]);

            if(this.allItems[potentalNewPosition] == "nothing"){
                console.log("pppppppppppppppppppppppppppppp")
                this.allMoves.push(potentalNewPosition);
            }

        }
       
    }









}
class Check{
    constructor(allItems,currentPlayer){
        this.currentPlayer = currentPlayer;
        this.allItems = allItems;
        this.allMoves = [];
        this.AllCombinations();
    }


    AllCombinations(){

        console.log("allItem12222s " + this.allItems);
       
        for (const position in this.allItems) {
            console.log(`${position}: ${this.allItems[position]}`);
            // if(this.allItems[position] === "BlackPawn.png"){
            //     this.GetBlackPawnMoves(position);
            // }

            if(this.allItems[position] === "WhitePawn.png"){
                this.GetWhitePawnMoves(position);
            }
        }

        console.log(this.allMoves);
       
    }



    GetBlackPawnMoves(currentPosition){
        let numericalCurrentPosition = parseInt(currentPosition);
        let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
        let potentalNewPosition = "";
        numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);

        potentalNewPosition = (numericalCurrentPosition + 1).toString() +  (numericalCurrentPositionRemainder + 1).toString()

        if((this.allItems[potentalNewPosition] !== undefined) && (this.allItems[potentalNewPosition] !== "nothing") && (this.allItems[potentalNewPosition].substring(0,5) !== this.currentPlayer)){
            this.allMoves.push(potentalNewPosition)
        }

        potentalNewPosition = (numericalCurrentPosition + 1).toString() +  (numericalCurrentPositionRemainder - 1).toString()
      

        if((this.allItems[potentalNewPosition] !== undefined) && (this.allItems[potentalNewPosition].substring(0,5) !== this.currentPlayer) && (this.allItems[potentalNewPosition] !== "nothing")){
            this.allMoves.push(potentalNewPosition)
        }

        potentalNewPosition = (numericalCurrentPosition + 1).toString() +  (numericalCurrentPositionRemainder).toString()
        if(this.allItems[potentalNewPosition] == "nothing"){
            this.allMoves.push(potentalNewPosition);
        }

        if(numericalCurrentPosition == 2){
            potentalNewPosition = (numericalCurrentPosition + 2).toString() +  (numericalCurrentPositionRemainder).toString()

            if(this.allItems[potentalNewPosition] == "nothing"){
                this.allMoves.push(potentalNewPosition);
            }

        }
       
    }



    GetWhitePawnMoves(currentPosition){
        let numericalCurrentPosition = parseInt(currentPosition);
        let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
        let potentalNewPosition = "";
        numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);

        potentalNewPosition = (numericalCurrentPosition - 1).toString() +  (numericalCurrentPositionRemainder - 1).toString()

        if((this.allItems[potentalNewPosition] !== undefined) && (this.allItems[potentalNewPosition] !== "nothing") && (this.allItems[potentalNewPosition].substring(0,5) !== this.currentPlayer)){
            this.allMoves.push(potentalNewPosition)
        }

        potentalNewPosition = (numericalCurrentPosition - 1).toString() +  (numericalCurrentPositionRemainder + 1).toString()
      

        if((this.allItems[potentalNewPosition] !== undefined) && (this.allItems[potentalNewPosition].substring(0,5) !== this.currentPlayer) && (this.allItems[potentalNewPosition] !== "nothing")){
            this.allMoves.push(potentalNewPosition)
        }

        potentalNewPosition = (numericalCurrentPosition - 1).toString() +  (numericalCurrentPositionRemainder).toString()

        if(this.allItems[potentalNewPosition] == "nothing"){
            this.allMoves.push(potentalNewPosition);
        }

        if(numericalCurrentPosition == 7){
            potentalNewPosition = (numericalCurrentPosition - 2).toString() +  (numericalCurrentPositionRemainder).toString()

            if(this.allItems[potentalNewPosition] == "nothing"){
                this.allMoves.push(potentalNewPosition);
            }

        }


    }





}
class Check{
    constructor(allItems,currentPlayer, checkMade){
        this.currentPlayer = currentPlayer;
        this.allItems = allItems;
        this.allMoves = [];
        this.oppisiteKingMoves = [];
        this.oppisiteKing = "";
        this.checkMade = checkMade;
        this.AllCombinations();
    }


    AllCombinations(){

        console.log("allItem12222s " + this.allItems);
       
        for (const position in this.allItems) {
            console.log(`${position}: ${this.allItems[position]}`);
            if((this.allItems[position] === "BlackPawn.png") || (this.allItems[position] === "WhitePawn.png")){
                if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                    if(this.allItems[position] === "BlackPawn.png"){
                        this.GetBlackPawnMoves(position);
                    }
                    else{
                        this.GetWhitePawnMoves(position);
                    }
                   
                }
            }

            else if((this.allItems[position] === "BlackBishop.png") || (this.allItems[position] === "WhiteBishop.png")){
                if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                    this.GetBishopMoves(position);
                }
               
            }

            else if((this.allItems[position] === "BlackKnight.png") || (this.allItems[position] === "WhiteKnight.png")){
                if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                    this.GetKnightMoves(position);
                }
               
            }

            else if((this.allItems[position] === "BlackRook.png") || (this.allItems[position] === "WhiteRook.png")){

                if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                    this.GetRookMoves(position);
                }                

            }

            else if((this.allItems[position] === "BlackQueen.png") || (this.allItems[position] === "WhiteQueen.png")){

                if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                    this.GetRookMoves(position);
                    this.GetBishopMoves(position);
                }                
    
            }

            else if((this.allItems[position] === "BlackKing.png") || (this.allItems[position] === "WhiteKing.png")){

                if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                    this.GetKingMoves(position);
                    
                }
                else{
                    this.oppisiteKing = position
                }                
    
            }

            console.log(this.allMoves);
            // console.log(this.oppisiteKingMoves);
            

        }

        for(let i=0;i<this.allMoves.length;i++){
            if(this.allMoves[i] === this.oppisiteKing){
                console.log(" this.allMoves[i] " + this.allMoves[i]);
                console.log(" this.oppisiteKing " + this.oppisiteKing);
                this.checkMade = true;
            }
        }
       
    }



    GetBlackPawnMoves(currentPosition){

        // sole.log("currentPositioconn " + currentPosition);

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


    GetBishopMoves(currentPosition){

        // console.log("currentPosition " + currentPosition);

        let currentPositionRow = parseInt(currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let potentalNewPosition = "";
        
        let j = currentPositionRow+1;
        let i = currentPositionColumn + 1
        let combine = "";
        while(true){
            combine = "";
            combine +=j;
            combine+=i;
            if(this.allItems[combine] === undefined){               
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                // console.log("this.currentPlayer " + this.currentPlayer);
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            j+=1;
            i+=1;
            
        }

        j  = currentPositionRow + 1;
        i = currentPositionColumn - 1;
        while(true){
            // console.log("j " + j)
            // console.log("i " + i)

            combine = "";
            combine+=j;
            combine+=i;

            // console.log("combine " + combine);

            if(this.allItems[combine] === undefined){
                
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    // console.log("this.currentPlayer " + this.currentPlayer);
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            //console.log("ASfdgfhgjkhjkhgjfgjkhjhkgjfjkhj,.")
            this.allMoves.push(combine);
            j+=1;
            i-=1;
        }

        j  = currentPositionRow - 1;
        i = currentPositionColumn + 1
        while(true){
            combine = "";
            combine +=j;
            combine+=i;
            if(this.allItems[combine] === undefined){
                
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    // console.log("this.currentPlayer " + this.currentPlayer);
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            j-=1;
            i+=1;
            
        }

        j  = currentPositionRow-1;
        i = currentPositionColumn - 1;
        while(true){
            combine = "";
            combine+=j;
            combine+=i;
            if(this.allItems[combine] === undefined){           
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    // console.log("this.currentPlayer " + this.currentPlayer);
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            j-=1;
            i-=1;
        }
    }

    GetKnightMoves(currentPosition){
        let currentPositionRow = parseInt(currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);

        this.CheckIfValid(currentPositionRow+1,currentPositionColumn+2 )

        
        this.CheckIfValid(currentPositionRow+2,currentPositionColumn+1)

     
        this.CheckIfValid(currentPositionRow+2,currentPositionColumn-1)

        this.CheckIfValid(currentPositionRow + 1,currentPositionColumn - 2)

        this.CheckIfValid(currentPositionRow-2,currentPositionColumn-1)

       
        this.CheckIfValid(currentPositionRow-1,currentPositionColumn+2)

       
        this.CheckIfValid(currentPositionRow-2,currentPositionColumn+1)

        

        // console.log("combine8 " + combine);
        this.CheckIfValid(currentPositionRow-1,currentPositionColumn-2)

    }
    CheckIfValid(row, col){
        // console.log("combine12344 " + combine)
        let combine = "";
        combine+=row;
        combine+=col;
        if(this.allItems[combine] === undefined){
            ;
        }
        else if((this.allItems[combine] === "nothing") || (this.allItems[combine].substring(0,5) === this.currentPlayer)){
            // console.log("combine123445678999 " + combine)
            this.allMoves.push(combine);
        }

        

    }


    GetRookMoves(currentPosition){
        let currentPositionRow = parseInt(currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);



        let j = currentPositionRow+1;
        let i = currentPositionColumn
        let combine = "";
        while(true){
            combine = "";
            combine +=j;
            combine+=i;
            if(this.allItems[combine] === undefined){               
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                // console.log("this.currentPlayer " + this.currentPlayer);
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            j+=1;
            
        }

        j = currentPositionRow-1;
        i = currentPositionColumn;
        combine = "";
        while(true){
            combine = "";
            combine +=j;
            combine+=i;
            if(this.allItems[combine] === undefined){               
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                // console.log("this.currentPlayer " + this.currentPlayer);
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            j-=1;
            
        }


        j = currentPositionRow;
        i = currentPositionColumn + 1;
        combine = "";
        while(true){
            combine = "";
            combine +=j;
            combine+=i;
            if(this.allItems[combine] === undefined){               
                // console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                // console.log("this.currentPlayer " + this.currentPlayer);
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            i+=1;
            
        }


        j = currentPositionRow;
        i = currentPositionColumn - 1;
        combine = "";
        while(true){
            combine = "";
            combine +=j;
            combine+=i;
            if(this.allItems[combine] === undefined){               
                console.log("-------------------");
                break;
            }
            else if(this.allItems[combine] !== "nothing"){
                // console.log("this.currentPlayer " + this.currentPlayer);
                if(this.allItems[combine].substring(0,5) === this.currentPlayer){
                    this.allMoves.push(combine);
                    break
                }
                else{
                    break;
                }
            }
            this.allMoves.push(combine);
            i-=1;
            
        }


       

    }

    // CheckIfValid(combine){
    //     // console.log("combine12344 " + combine)
    //     if(this.allItems[combine] === undefined){
    //         ;
    //     }
    //     else if((this.allItems[combine] === "nothing") || (this.allItems[combine].substring(0,5) === this.currentPlayer)){
    //         // console.log("combine123445678999 " + combine)
    //         this.oppisiteKingMoves.push(combine);
    //     }

        

    // }


    GetKingMoves(currentPosition){
        let currentPositionRow = parseInt(currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);

        this.CheckIfValid(currentPositionRow+1,currentPositionColumn+1)

        this.CheckIfValid(currentPositionRow, currentPositionColumn+1)

        this.CheckIfValid(currentPositionRow + 1, currentPositionColumn)

        this.CheckIfValid(currentPositionRow + 1, currentPositionColumn - 1)

        this.CheckIfValid(currentPositionRow - 1, currentPositionColumn)

        this.CheckIfValid(currentPositionRow - 1, currentPositionColumn - 1)

        this.CheckIfValid(currentPositionRow, currentPositionColumn - 1)

        this.CheckIfValid(currentPositionRow - 1, currentPositionColumn + 1)

    }

    GetCheckMade(){
        return this.checkMade;
    }


}
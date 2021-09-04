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
            // if((this.allItems[position] === "BlackPawn.png") || (this.allItems[position] === "WhitePawn.png")){
            //     if(this.allItems[position].substring(0,5) !== this.currentPlayer){
            //         if(this.allItems[position] === "BlackPawn.png"){
            //             this.GetBlackPawnMoves(position);
            //         }
            //         else{
            //             this.GetWhitePawnMoves(position);
            //         }
                   
            //     }
            // }

            // else if((this.allItems[position] === "BlackBishop.png") || (this.allItems[position] === "WhiteBishop.png")){
            //     console.log("weeeeeeeeeeeeeeee")
            //     console.log("this.allItems[position].substring(0,5) " + this.allItems[position].substring(0,5));
            //     console.log(" this.currentPlayer " + this.currentPlayer);
            //     if(this.allItems[position].substring(0,5) !== this.currentPlayer){
            //         this.GetBishopMoves(position);
            //     }
               
            // }

            // if((this.allItems[position] === "BlackKnight.png") || (this.allItems[position] === "WhiteKnight.png")){
            //     console.log("weeeeeeeeeeeeeeee")
            //     console.log("this.allItems[position].substring(0,5) " + this.allItems[position].substring(0,5));
            //     console.log(" this.currentPlayer " + this.currentPlayer);
            //     if(this.allItems[position].substring(0,5) !== this.currentPlayer){
            //         this.GetKnightMoves(position);
            //     }
               
            // }

            if((this.allItems[position] === "BlackRook.png") || (this.allItems[position] === "WhiteRook.png")){

                    if(this.allItems[position].substring(0,5) !== this.currentPlayer){
                        this.GetRookMoves(position);
                    }                

            }

            console.log(this.allMoves);
            

        }

       
       
    }



    GetBlackPawnMoves(currentPosition){

        console.log("currentPosition " + currentPosition);

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

        console.log("currentPosition " + currentPosition);

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
            j+=1;
            i+=1;
            
        }

        j  = currentPositionRow + 1;
        i = currentPositionColumn - 1;
        while(true){
            console.log("j " + j)
            console.log("i " + i)

            combine = "";
            combine+=j;
            combine+=i;

            console.log("combine " + combine);

            if(this.allItems[combine] === undefined){
                
                console.log("-------------------");
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
            console.log("ASfdgfhgjkhjkhgjfgjkhjhkgjfjkhj,.")
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
                
                console.log("-------------------");
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
                console.log("-------------------");
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

        console.log("currentPosition " + currentPosition);

        let combine = "";
        let row = currentPositionRow+1
        let col = currentPositionColumn+2;
        
        

        combine+=row
        combine+=col

        console.log("combine1 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";

        row = currentPositionRow+2;
        col =  currentPositionColumn+1;
       

        combine+=row
        combine+=col

        console.log("combine2 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";

        row = currentPositionRow+2;
        col =  currentPositionColumn-1;
       

        combine+=row
        combine+=col

        console.log("combine3 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";
        

        row = currentPositionRow + 1;
        col = currentPositionColumn - 2;

        combine+=row;
        combine+=col;

        console.log("combine4 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";

        row = currentPositionRow-2
        col = currentPositionColumn-1
        

        combine+=row;
        combine+=col;

        console.log("combine5 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";

        row = currentPositionRow-1
        col = currentPositionColumn+2
        

        combine+=row
        combine+=col

        console.log("combine6 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";

        row = currentPositionRow-2
        col = currentPositionColumn+1
        

        combine+=row;
        combine+=col;

        console.log("combine7 " + combine);
        this.CheckIfKnightValid(combine)

        combine = "";

        row = currentPositionRow-1
        col = currentPositionColumn-2
        
        combine+=row
        combine+=col

        console.log("combine8 " + combine);
        this.CheckIfKnightValid(combine)

    }
    CheckIfKnightValid(combine){
        // console.log("combine12344 " + combine)
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


}
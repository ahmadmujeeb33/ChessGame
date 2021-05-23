class Knight{

    constructor(squares,currentPosition,futurePosition,currentPlayer,blackMove,whiteMove,allItems,ID){
        this.squares = squares;
        this.currentPosition = currentPosition;
        this.futurePosition = futurePosition;
        this.currentPlayer = currentPlayer;
        this.blackMove = blackMove;
        this.whiteMove = whiteMove;
        this.allItems = allItems;
        this.ID = ID;
        this.onSquareClicked();
    }


    onSquareClicked(){
        if(this.currentPlayer == "White"){
    
            if(this.whiteMove == true){
                this.currentPosition = this.ID;
                this.whiteMove = false;
            }
            else{
                this.futurePosition = this.ID;
                this.whiteMove = true; 
                //this.PlaceComputerPawns();  
                if(this.PlaceKnight()){
                    console.log("white golie");
                    this.currentPlayer = "White";
                }
                else{
                    this.currentPlayer = "Black";
                }
                
                        
            }
        }
        else{
            if(this.blackMove == true){
                console.log("firstThis");
                this.currentPosition = this.ID;
                this.blackMove = false;
                //console.log("current " + this.currentPosition);
               
            }
            else{
                console.log("thenThis");
                this.futurePosition = this.ID;
                this.blackMove = true;
                if(this.PlaceKnight()){
                    console.log("black golie");
                    this.currentPlayer = "Black";
                }
                else{
                    this.currentPlayer = "White";
                }
               
                //console.log("future " + this.futurePosition);
               
                
                
                
            }
        }
    }


    PlaceKnight(){
        console.log("this.allitems " + this.allItems[this.futurePosition]);
        console.log("this.id " + this.ID);
        console.log("futureposition " + this.futurePosition);
        console.log("currentPostion " + this.currentPosition);
        if(this.ValidKnightMove()){
            console.log("in knight");
            let createImage = document.createElement("img");
            this.removeKnight(this.futurePosition);
            if(this.currentPlayer === "Black"){
                console.log("blackkkkkkkk");
                this.allItems[this.futurePosition] = "BlackKnight.png";
            }
            else{
                console.log("whiteeeeeeee");
                this.allItems[this.futurePosition] = "WhiteKnight.png";
            }
            
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "35";
            createImage.height = "55";
            createImage.src = this.allItems[this.currentPosition];
            this.removeKnight(this.currentPosition);
        }
        else{
            console.log(" this does not work dsss");
            alert("Move not allowed");
            return true;
            

        }
    }


    ValidKnightMove(){
        let currentPositionRow = parseInt(this.currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let futurePositionRow = parseInt(this.futurePosition);
        let futurePositionColumn = Math.floor(futurePositionRow % 10);
        futurePositionRow = Math.floor(futurePositionRow/10);

        if(((currentPositionColumn + 2 === futurePositionColumn) && (currentPositionRow + 1 === futurePositionRow)) || ((currentPositionColumn + 1=== futurePositionColumn) && (currentPositionRow + 2 === futurePositionRow)) || ((currentPositionColumn - 1 === futurePositionColumn) && (currentPositionRow + 2 === futurePositionRow)) || ((currentPositionColumn - 2 === futurePositionColumn) && (currentPositionRow + 1 === futurePositionRow)) || ((currentPositionColumn - 1 === futurePositionColumn) && (currentPositionRow - 2 === futurePositionRow)) || ((currentPositionColumn + 2 === futurePositionColumn) && (currentPositionRow - 1 === futurePositionRow)) || ((currentPositionColumn + 1 === futurePositionColumn) && (currentPositionRow - 2 === futurePositionRow)) || ((currentPositionColumn - 2 === futurePositionColumn) && (currentPositionRow - 1 === futurePositionRow))){
            console.log("This.currentPlayer " + this.currentPlayer);
            console.log("this.allItems[this.futurePosition].substring(0,5) " + this.allItems[this.futurePosition].substring(0,5));
            if(this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)){
                console.log("in herekjldnxl");
                return true;
            } 
            
            return false;
        }
        else{
            return false
        }
    }

    removeKnight(elementToRemove){
        const myNode = document.getElementById(elementToRemove);
        this.allItems[elementToRemove] = "nothing";
      
        while(myNode.hasChildNodes()){
            myNode.removeChild(myNode.childNodes[0]);
        }

        console.log("this.currentpositon " + this.allItems[this.currentPosition]);
        console.log("this.futurePosition " + this.allItems[this.futurePosition]);
        
        
    }

    // attackComputer(){
        
    //     let currentPositionRow = parseInt(this.currentPosition);
    //     let currentPositionColumn  = Math.floor(currentPositionRow % 10);
    //     currentPositionRow = Math.floor(currentPositionRow/10);
    //     let futurePositionRow = parseInt(this.futurePosition);
    //     let futurePositionColumn = Math.floor(futurePositionRow % 10);
    //     futurePositionRow = Math.floor(futurePositionRow/10);

    //     if(((currentPositionColumn + 2 === futurePositionColumn) && (currentPositionRow + 1 === futurePositionRow)) || ((currentPositionColumn + 1=== futurePositionColumn) && (currentPositionRow + 2 === futurePositionRow)) || ((currentPositionColumn - 1 === futurePositionColumn) && (currentPositionRow + 2 === futurePositionRow)) || ((currentPositionColumn - 2 === futurePositionColumn) && (currentPositionRow + 1 === futurePositionRow)) || ((currentPositionColumn - 1 === futurePositionColumn) && (currentPositionRow - 2 === futurePositionRow)) || ((currentPositionColumn + 2 === futurePositionColumn) && (currentPositionRow - 1 === futurePositionRow)) || ((currentPositionColumn + 1 === futurePositionColumn) && (currentPositionRow - 2 === futurePositionRow)) || ((currentPositionColumn - 2 === futurePositionColumn) && (currentPositionRow - 1 === futurePositionRow))){
    //         if(this.currentPlayer === this.allItems[this.futurePosition].substring(0,5)){
    //             return true;
    //         }
           
    //     }
    //     else{
    //         return false
    //     }

    // }





    getDictionary(){
        return this.allItems;
    }
    
    getCurrentPlayer(){
        return this.currentPlayer;
    }


    getBlackMove(){
        return this.blackMove;
    }
    
    getWhiteMove(){
        return this.whiteMove;
    }

    getCurrentPosition(){
        return this.currentPosition;
    }
    
    getFuturePosition(){
        return this.futurePosition;
    }







}
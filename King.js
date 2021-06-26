class King{
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
                if(this.PlaceKing()){
                    this.currentPlayer = "White";
                }
                else{
                    this.currentPlayer = "Black";
                }                                    
            }
        }
        else{
            if(this.blackMove == true){
                this.currentPosition = this.ID;
                this.blackMove = false;
            }
            else{
                this.futurePosition = this.ID;
                this.blackMove = true;
                if(this.PlaceKing()){
                    this.currentPlayer = "Black";
                }
                else{
                    this.currentPlayer = "White";
                }
            }
        }

    }


    PlaceKing(){
        if(this.ValidKingMove()){
            let createImage = document.createElement("img");
            this.removeKing(this.futurePosition);
            if(this.currentPlayer === "Black"){
                this.allItems[this.futurePosition] = "BlackKing.png";
            }
            else{
                this.allItems[this.futurePosition] = "WhiteKing.png";
            }
            
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "55";
            createImage.height = "60";
            createImage.src = this.allItems[this.currentPosition];
            this.removeKing(this.currentPosition);
        }
        else{
            console.log(" this does not work dsss");
            alert("Move not allowed");
            return true;
            

        }
    }

    ValidKingMove(){
        let currentPositionRow = parseInt(this.currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let futurePositionRow = parseInt(this.futurePosition);
        let futurePositionColumn = Math.floor(futurePositionRow % 10);
        futurePositionRow = Math.floor(futurePositionRow/10);

        if( Math.abs(currentPositionRow - futurePositionRow) < 2 && Math.abs(currentPositionColumn - futurePositionColumn) < 2){
            if(this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)){
                return true;
            } 
            return false;
        }

        return false;

    }

    removeKing(elementToRemove){
        this.allItems[elementToRemove] = "nothing";
        const myNode = document.getElementById(elementToRemove);
        while(myNode.hasChildNodes()){
            myNode.removeChild(myNode.childNodes[0]);
        }
    }
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
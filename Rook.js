class Rook{
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
                if(this.PlaceRook()){
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
                if(this.PlaceRook()){
                    this.currentPlayer = "Black";
                }
                else{
                    this.currentPlayer = "White";
                }
                       
            }
        }
    }

    PlaceRook(){
        if(this.ValidRookMove()){
            ;
        }
    }

    ValidRookMove(){
        let currentPositionRow = parseInt(this.currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let futurePositionRow = parseInt(this.futurePosition);
        let futurePositionColumn = Math.floor(futurePositionRow % 10);
        futurePositionRow = Math.floor(futurePositionRow/10);

        if(futurePositionRow > currentPositionRow){
            for(let i=currentPositionRow + 1;i<futurePositionRow;i++){  
                let combine = "";
                combine+=i;
                combine+=currentPositionColumn;
                if(this.allItems[combine] !="nothing"){
                    return false
                }
            }
        }
        else if(futurePositionRow < currentPositionRow){
            for(let i=currentPositionRow-1;i>futurePositionRow;i--){
                let combine = "";
                combine+=i;
                combine+=currentPositionColumn;
                if(this.allItems[combine] !="nothing"){
                    return false
                }
            }
        }

    }

}
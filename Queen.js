class Queen{

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
        
        console.log("----------------------------------");
        console.log("whiteMove1 " + this.whiteMove);
        console.log("blackMove1 " + this.blackMove);
        console.log("currentPlayer " + this.currentPlayer);
        if(this.currentPlayer == "White"){
    
            if(this.whiteMove == true){
                this.currentPosition = this.ID;
                this.whiteMove = false;
            }
            else{
                this.futurePosition = this.ID;
                this.whiteMove = true;
                this.currentPlayer = "Black";
                this.PlaceQueen();              
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
                this.currentPlayer = "White";
                console.log("wereeeeeeeeeeeeeeee");
                this.PlaceQueen();
                
                
                
            }
        }

    }


    PlaceQueen(){
        if(this.ValidQueenMove()){

        }
    }

    ValidQueenMove(){
        let currentPositionRow = parseInt(this.currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let futurePositionRow = parseInt(this.futurePosition);
        let futurePositionColumn = Math.floor(futurePositionRow % 10);
        futurePositionRow = Math.floor(futurePositionRow/10);

        if((Math.abs(futurePositionColumn-currentPositionColumn) === Math.abs(futurePositionRow-currentPositionRow)) && this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)){
            
        }
        else if((currentPositionColumn === futurePositionColumn) || (currentPositionRow === futurePositionRow) && this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)){

        }
        else{
            return false;
        }
    }

    CheckDiagonal(){

    }

    CheckSides(){

    }



}
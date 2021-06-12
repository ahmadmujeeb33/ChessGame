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
                this.PlaceComputerBishop();              
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
                this.PlaceBishop();
                
                
                
            }
        }

    


}







}
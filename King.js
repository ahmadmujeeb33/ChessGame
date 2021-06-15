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
                //this.PlaceComputerPawns();  
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
                //console.log("current " + this.currentPosition);
               
            }
            else{
                this.futurePosition = this.ID;
                this.blackMove = true;
                if(this.PlaceKing()){
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







}
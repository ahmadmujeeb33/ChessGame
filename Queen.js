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
            if(this.CheckDiagonal(currentPositionRow,currentPositionColumn,futurePositionRow,futurePositionColumn)){
                return true;
            }
        }
        else if((currentPositionColumn === futurePositionColumn) || (currentPositionRow === futurePositionRow) && this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)){
            if(this.CheckSides(currentPositionRow,currentPositionColumn,futurePositionRow,futurePositionColumn)){
                return true;
            }
        }
        
        return false;
        
    }

    CheckDiagonal(currentPositionRow,currentPositionColumn,futurePositionRow,futurePositionColumn){
        let combine = "";

        if((currentPositionColumn < futurePositionColumn) && (currentPositionRow < futurePositionRow)){
            let j = currentPositionRow+1;
            for(let i = currentPositionColumn + 1; i<futurePositionColumn;i++){
                combine = "";
                combine +=j;
                combine+=i;
                if(this.allItems[combine] != "nothing"){
                    return false;
                }
                j+=1;
                
            }
        }
        else if(( currentPositionRow < futurePositionRow) && (futurePositionColumn < currentPositionColumn)){
            let j  = currentPositionRow + 1;
            for(let i = currentPositionColumn - 1; i>futurePositionColumn;i--){
                combine = "";
                combine+=j;
                combine+=i;
                if(this.allItems[combine] != "nothing"){
                    return false;
                }
                j+=1;
            }
        }
        else if((currentPositionColumn < futurePositionColumn) && (currentPositionRow>futurePositionRow)){
            let j  = currentPositionRow - 1;
            for(let i = currentPositionColumn + 1; i<futurePositionColumn;i++){
                combine = "";
                combine +=j;
                combine+=i;
                if(this.allItems[combine] != "nothing"){
                    return false;
                }
                j-=1;
                
            }

        }
        else{
            console.log("thisherei398623592");
            let j  = currentPositionRow-1;
            for(let i = currentPositionColumn - 1; i>futurePositionColumn;i--){
                combine = "";
                combine+=j;
                combine+=i;
                if(this.allItems[combine] != "nothing"){
                    return false;
                }
                j-=1;
            }
        }
    
    }

    CheckSides(currentPositionRow,currentPositionColumn,futurePositionRow,futurePositionColumn){
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

        else if(futurePositionColumn > currentPositionColumn){
            for(let i=currentPositionColumn + 1;i<futurePositionColumn;i++){
                let combine = "";
                combine+=currentPositionRow;
                combine+=i;
                if(this.allItems[combine] !="nothing"){
                    return false
                }
            }
        }
        else{
            for(let i=futurePositionColumn - 1;i>currentPositionColumn;i--){
                let combine = "";
                combine+=currentPositionRow;
                combine+=i;
                if(this.allItems[combine] !="nothing"){
                    return false
                }
            }
        }
    }



}
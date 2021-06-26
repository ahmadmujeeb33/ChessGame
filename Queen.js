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
        if(this.currentPlayer == "White"){
            if(this.whiteMove == true){
                this.currentPosition = this.ID;
                this.whiteMove = false;
            }
            else{
                this.futurePosition = this.ID;
                this.whiteMove = true; 
                if(this.PlaceQueen()){
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
                if(this.PlaceQueen()){
                    this.currentPlayer = "Black";
                }
                else{
                    this.currentPlayer = "White";
                }          
                
            }
        }
        

    }


    PlaceQueen(){
        if(this.ValidQueenMove()){
            let createImage = document.createElement("img");
            this.RemoveQueen(this.futurePosition);
            if(this.currentPlayer === "Black"){
                this.allItems[this.futurePosition] = "BlackQueen.png";
            }
            else{
                this.allItems[this.futurePosition] = "WhiteQueen.png";
            }
            
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "60";
            createImage.height = "60";
            createImage.src = this.allItems[this.currentPosition];
            this.RemoveQueen(this.currentPosition);
        }
        else{
            alert("Move not allowed");
            return true;
            

        }
    }

    ValidQueenMove(){
        let currentPositionRow = parseInt(this.currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let futurePositionRow = parseInt(this.futurePosition);
        let futurePositionColumn = Math.floor(futurePositionRow % 10);
        futurePositionRow = Math.floor(futurePositionRow/10);

        console.log("columns " + Math.abs(futurePositionColumn-currentPositionColumn))
        console.log("row " + Math.abs(futurePositionRow-currentPositionRow))

        console.log("currentplayer " + this.currentPlayer);
        console.log("futureposition " + this.allItems[this.futurePosition].substring(0,5));

        if((Math.abs(futurePositionColumn-currentPositionColumn) === Math.abs(futurePositionRow-currentPositionRow)) && (this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5))){
            console.log("thfildxfn");
            if(this.CheckDiagonal(currentPositionRow,currentPositionColumn,futurePositionRow,futurePositionColumn)){
                return true;
            }
        }
        else if(((currentPositionColumn === futurePositionColumn) || (currentPositionRow === futurePositionRow)) && (this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5))){
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
        return true;
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

        return true;
    }

    RemoveQueen(elementToRemove){
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
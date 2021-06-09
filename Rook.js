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
        // for(let i = 0; i< squares.length;i++){
        //     squares[i].addEventListener('click',this.onSquareClicked);
        // };
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
                this.currentPlayer = "Black";
                this.PlaceRook();              
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
                this.PlaceRook();
                
                
                
            }
        }

    }

    PlaceRook(){
        if(this.ValidRookMove()){
            let createImage = document.createElement("img");
            this.removePonds(this.futurePosition);
            this.allItems[this.futurePosition] = "BlackRook.png";
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "40";
            createImage.height = "50";
            createImage.src = this.allItems[this.currentPosition];
            this.removePonds(this.currentPosition);
        }

        else{
            alert("Move not allowed");
            this.currentPlayer =  "White";
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

        if(((currentPositionColumn === futurePositionColumn) || (currentPositionRow === futurePositionRow))){
            if(this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)){
                console.log("in herekjldnxl");
                return true;
            } 

            return false;
        }
        else{
            return false;
        }

    }

    removeRook(elementToRemove){
        this.allItems[elementToRemove] = "nothing";
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
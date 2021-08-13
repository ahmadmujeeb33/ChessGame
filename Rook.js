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
                //this.PlaceComputerPawns();  
                if(this.PlaceRook()){
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
               
                //console.log("future " + this.futurePosition);
               
                
                
                
            }
        }

    }

    PlaceRook(){
        if(this.ValidRookMove()){
            let createImage = document.createElement("img");
            this.removeRook(this.futurePosition);
            if(this.currentPlayer === "Black"){
                this.allItems[this.futurePosition] = "BlackRook.png";
            }
            else{
                this.allItems[this.futurePosition] = "WhiteRook.png";
            }
            
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "35";
            createImage.height = "55";
            createImage.src = this.allItems[this.currentPosition];
            this.removeRook(this.currentPosition);
        }
        else{
            console.log(" this does not work dsss");
            alert("Move not allowed");
            return true;
            

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
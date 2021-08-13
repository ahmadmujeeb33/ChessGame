class Bishop{

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
                if(this.PlaceBishop()){
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
            }
            else{
                console.log("thenThis");
                this.futurePosition = this.ID;
                this.blackMove = true;
                if(this.PlaceBishop()){

                    this.currentPlayer = "Black";
                }
                else{
                    this.currentPlayer = "White";
                }
            }
        }

    }


    PlaceBishop(){
        console.log("fdfbslbk")
        if(this.CheckValidBishopMove()){
            let createImage = document.createElement("img");
            this.removeBishop(this.futurePosition);
            if(this.currentPlayer === "Black"){
                this.allItems[this.futurePosition] = "BlackBishop.png";
            }
            else{
                this.allItems[this.futurePosition] = "WhiteBishop.png";
            }
            
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "35";
            createImage.height = "55";
            createImage.src = this.allItems[this.currentPosition];
            this.removeBishop(this.currentPosition);
        }
        else{
            alert("Move not allowed");
            return true;
            

        }
        
    }


    CheckValidBishopMove(){
        let currentPositionRow = parseInt(this.currentPosition);
        let currentPositionColumn  = Math.floor(currentPositionRow % 10);
        currentPositionRow = Math.floor(currentPositionRow/10);
        let futurePositionRow = parseInt(this.futurePosition);
        let futurePositionColumn = Math.floor(futurePositionRow % 10);
        futurePositionRow = Math.floor(futurePositionRow/10);

        let combine = "";

        if((currentPositionColumn < futurePositionColumn) && (currentPositionRow < futurePositionRow)){
            let j = currentPositionRow+1;
            for(let i = currentPositionColumn + 1; i<futurePositionColumn;i++){
                combine = "";
                combine +=j;
                combine+=i;
                if(this.allItems[combine] != "nothing"){
                    console.log("false");
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
    
         
            
        if((currentPositionColumn!=futurePositionColumn) && (currentPositionRow!=futurePositionRow) && (this.currentPlayer !== this.allItems[this.futurePosition].substring(0,5)) && (Math.abs(futurePositionColumn-currentPositionColumn) === Math.abs(futurePositionRow-currentPositionRow))){
            return true;
        }
        else{
            return false;
        }       
        
        
    }
 
    getDictionary(){
        return this.allItems;
    }
    
    getCurrentPlayer(){
        return this.currentPlayer;
    }

    removeBishop(elementToRemove){
        const myNode = document.getElementById(elementToRemove);
        this.allItems[elementToRemove] = "nothing";
      
        while(myNode.hasChildNodes()){
            myNode.removeChild(myNode.childNodes[0]);
        }
        
        
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
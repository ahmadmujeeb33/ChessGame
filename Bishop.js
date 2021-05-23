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
        // for(let i = 0; i< squares.length;i++){
        //     squares[i].addEventListener('click',this.onSquareClicked);
        // };
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


    PlaceBishop(){
        if(this.attack()){
            let createImage = document.createElement("img");
            this.removePonds(this.futurePosition);
            this.allItems[this.futurePosition] = "BlackBishop.png";
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "35";
            createImage.height = "55";
            createImage.src = this.allItems[this.currentPosition];
            this.removePonds(this.currentPosition);
            
        }
        else if(this.CheckValidBishopMove()){
            let createImage = document.createElement("img");
            this.allItems[this.futurePosition] = "BlackBishop.png";
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "35";
            createImage.height = "55";
            createImage.src = this.allItems[this.currentPosition];
            this.removePonds(this.currentPosition);
        }
        else{
            alert("Move not allowed");
            this.currentPlayer = "Black";
            console.log(" this does not work dsss");
            //blackMove = false;
        }
        
    }

    PlaceComputerBishop(){
        if(this.attack()){
            let createImage = document.createElement("img");
            this.removePonds(this.futurePosition);
            this.allItems[this.futurePosition] = "WhiteBishop.png";
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "40";
            createImage.height = "50";
            createImage.src = this.allItems[this.currentPosition];
            this.removePonds(this.currentPosition);
        }
        else if(this.CheckValidBishopMove()){
            let createImage = document.createElement("img");
            //console.log(value);
            this.allItems[this.futurePosition] = "WhiteBishop.png";
            document.getElementById(this.futurePosition).appendChild(createImage);
            createImage.width = "35";
            createImage.height = "55";
            createImage.src = this.allItems[this.currentPosition];
            this.removePonds(this.currentPosition);
        }
        else{
            console.log(" this does not work dsss");
            alert("Move not allowed");
            this.currentPlayer =  "White";

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
            console.log("thissssssddhksfl");
            for(let i = currentPositionColumn + 1; i<futurePositionColumn;i++){
                combine = "";
                combine +=j;
                combine+=i;
                console.log("combine " + combine);
                console.log("imageHere " + this.allItems[combine]);
                if(this.allItems[combine] != "nothing"){
                    console.log("false");
                    return false;
                }
                j+=1;
                
            }
        }
        else if(( currentPositionRow < futurePositionRow) && (futurePositionColumn < currentPositionColumn)){
            let j  = currentPositionRow + 1;
            console.log("dhjkskhdkfkjlfdhklfhkslllllllk333");
            for(let i = currentPositionColumn - 1; i>futurePositionColumn;i--){
                console.log("dhjkskhdkfkjlfdhklfhkslllllllk");
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
                console.log("combine " + combine);
                console.log("imageHere " + this.allItems[combine]);
                if(this.allItems[combine] != "nothing"){
                    console.log("false");
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
    
         
            
        if((currentPositionColumn!=futurePositionColumn) && (currentPositionRow!=futurePositionRow) && (this.allItems[this.futurePosition] == "nothing")){
            return true;
        }
        else{
            return false;
        }       
        
        
    }
    

    attack(){
        let numericalCurrentPosition = parseInt(this.currentPosition);
        let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
        numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);
        let numericalFutureposition = parseInt(this.futurePosition);
        let numericalFuturepositionRemainder = Math.floor(numericalFutureposition % 10);
        numericalFutureposition = Math.floor(numericalFutureposition/10);
    
        console.log("in this ")
    
    
        if((numericalCurrentPositionRemainder!=numericalFuturepositionRemainder) && (numericalCurrentPosition!=numericalFutureposition) && (this.allItems[this.futurePosition] != "nothing")){
            return true;
        }
        else{
            return false;
        }
        
        
    }
    
    // attackPlayer(){
    //     let numericalCurrentPosition = parseInt(this.currentPosition);
    //     let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
    //     numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);
    //     let numericalFutureposition = parseInt(this.futurePosition);
    //     let numericalFuturepositionRemainder = Math.floor(numericalFutureposition % 10);
    //     numericalFutureposition = Math.floor(numericalFutureposition/10);
    
    
    //     if((numericalCurrentPositionRemainder!=numericalFuturepositionRemainder) && (numericalCurrentPosition!=numericalFutureposition) && (this.allItems[this.futurePosition] != "nothing")){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    getDictionary(){
        return this.allItems;
    }
    
    getCurrentPlayer(){
        return this.currentPlayer;
    }

    removePonds(elementToRemove){
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
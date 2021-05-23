class Pawns{

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
        //console.log("thisssss " + this.moveStillNeeded);
        // for(let i = 0; i< squares.length;i++){
        //     console.log("we hreeee")
        //     squares[i].addEventListener('click',this.onSquareClicked);
        // };
    }


onSquareClicked(){

        console.log("----------------------------------");
        console.log("whiteMove2 " + this.whiteMove);
        console.log("blackMove2 " + this.blackMove);
        //this.moveAllReadyMade = true;
        if(this.currentPlayer == "White"){
    
            if(this.whiteMove == true){
                this.currentPosition = this.ID;
                this.whiteMove = false;
            }
            else{
                this.futurePosition = this.ID;
                this.whiteMove = true;
                this.currentPlayer = "Black";
                this.PlaceComputerPawns();              
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
                this.currentPlayer = "White";
                //console.log("future " + this.futurePosition);
                this.PlacePonds();
                
                
                
            }
        }
    }
    
    
    





PlacePonds(){
    if(this.attackComputer()){
        let createImage = document.createElement("img");
        this.removePonds(this.futurePosition);
        this.allItems[this.futurePosition] = "BlackPawn.png";
        document.getElementById(this.futurePosition).appendChild(createImage);
        createImage.width = "60";
        createImage.height = "60";
        createImage.src = this.allItems[this.currentPosition];
        this.removePonds(this.currentPosition);
        
    }
    else if(this.CheckValidPawnMove()){
        console.log("this again ");
        let createImage = document.createElement("img");
        this.allItems[this.futurePosition] = "BlackPawn.png";
        document.getElementById(this.futurePosition).appendChild(createImage);
        console.log("we here again");
        createImage.width = "60";
        createImage.height = "60";
        createImage.src = this.allItems[this.currentPosition];
        this.removePonds(this.currentPosition);
    }
    else{
        alert("Move not allowed");
        this.currentPlayer = "Black";
        //blackMove = false;
    }
    
}



removePonds(elementToRemove){
    const myNode = document.getElementById(elementToRemove);
    this.allItems[elementToRemove] = "nothing";
  
    while(myNode.hasChildNodes()){
        myNode.removeChild(myNode.childNodes[0]);
    }
    
    
}

PlaceComputerPawns(){
    if(this.attackPlayer()){
        let createImage = document.createElement("img");
        this.removePonds(this.futurePosition);
        this.allItems[this.futurePosition] = "WhitePawn.png";
        document.getElementById(this.futurePosition).appendChild(createImage);
        createImage.width = "40";
        createImage.height = "50";
        createImage.src = this.allItems[this.currentPosition];
        this.removePonds(this.currentPosition);
    }
    else if(this.checkValidPawnForComputer()){
        let createImage = document.createElement("img");
        //console.log(value);
        this.allItems[this.futurePosition] = "WhitePawn.png";
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


CheckValidPawnMove(){
    let numericalCurrentPosition = parseInt(this.currentPosition);
    let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
    numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);
    let numericalFutureposition = parseInt(this.futurePosition);
    let numericalFuturepositionRemainder = Math.floor(numericalFutureposition % 10);
    numericalFutureposition = Math.floor(numericalFutureposition/10);

    
    if(this.currentPosition[0] == '2'){
        
        if((numericalCurrentPosition>=numericalFutureposition-2) && (numericalCurrentPosition!=numericalFutureposition) && (numericalFutureposition>numericalCurrentPosition) && (numericalCurrentPositionRemainder == numericalFuturepositionRemainder) && (this.allItems[this.futurePosition] != "WhitePawn.png")){
            return true;
        }
        else{
            return false;
        }       
    }
    
    else{
        if((numericalCurrentPosition>=numericalFutureposition-1) && (numericalCurrentPosition!=numericalFutureposition) && (numericalFutureposition>numericalCurrentPosition) && (numericalCurrentPositionRemainder == numericalFuturepositionRemainder) && (this.allItems[this.futurePosition] != "WhitePawn.png")){
            return true;
        }
        else{
            return false;
        }
    }
}

checkValidPawnForComputer(){
    let numericalCurrentPosition = parseInt(this.currentPosition);
    let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
    numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);
    let numericalFutureposition = parseInt(this.futurePosition);
    let numericalFuturepositionRemainder = Math.floor(numericalFutureposition % 10);
    numericalFutureposition = Math.floor(numericalFutureposition/10);

    if(this.currentPosition[0] == '7'){
        if((numericalCurrentPosition<=numericalFutureposition+2) && (numericalCurrentPosition!=numericalFutureposition) && (numericalCurrentPosition > numericalFutureposition) && (numericalCurrentPositionRemainder == numericalFuturepositionRemainder) && (this.allItems[this.futurePosition] != "BlackPawn.png")){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if((numericalCurrentPosition<=numericalFutureposition+1) && (numericalCurrentPosition!=numericalFutureposition) && (numericalCurrentPosition > numericalFutureposition) && (numericalCurrentPositionRemainder == numericalFuturepositionRemainder) && (this.allItems[this.futurePosition] != "BlackPawn.png")){
            return true;
        }
        else{
            return false;
        }
    }

}

attackComputer(){
    let numericalCurrentPosition = parseInt(this.currentPosition);
    let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
    numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);
    let numericalFutureposition = parseInt(this.futurePosition);
    let numericalFuturepositionRemainder = Math.floor(numericalFutureposition % 10);
    numericalFutureposition = Math.floor(numericalFutureposition/10);

    console.log(" this here ")

    console.log(" numericalCurrentPosition " + numericalCurrentPosition);
    console.log(" numericalCurrentPositionRemainder " + numericalCurrentPositionRemainder);
    console.log("numericalFutureposition " + numericalFutureposition);
    console.log(" numericalFuturepositionRemainder " + numericalFuturepositionRemainder);


    if((numericalCurrentPositionRemainder + 1 == numericalFuturepositionRemainder) && (numericalCurrentPosition + 1 == numericalFutureposition) && (this.allItems[this.futurePosition] != "nothing" )){
        
        return true;
    }
    else if((numericalCurrentPositionRemainder - 1 == numericalFuturepositionRemainder) && (numericalCurrentPosition + 1 == numericalFutureposition) && (this.allItems[this.futurePosition] != "nothing" )){
        
        return true;
    }

    else{
        return false;
    }
    
    
}

attackPlayer(){
    let numericalCurrentPosition = parseInt(this.currentPosition);
    let numericalCurrentPositionRemainder  = Math.floor(numericalCurrentPosition % 10);
    numericalCurrentPosition = Math.floor(numericalCurrentPosition/10);
    let numericalFutureposition = parseInt(this.futurePosition);
    let numericalFuturepositionRemainder = Math.floor(numericalFutureposition % 10);
    numericalFutureposition = Math.floor(numericalFutureposition/10);


    console.log("thid is the one");
    console.log(" numericalCurrentPosition " + numericalCurrentPosition);
    console.log(" numericalCurrentPositionRemainder " + numericalCurrentPositionRemainder);
    console.log("numericalFutureposition " + numericalFutureposition);
    console.log(" numericalFuturepositionRemainder " + numericalFuturepositionRemainder);

    if((numericalCurrentPositionRemainder - 1 == numericalFuturepositionRemainder) && (numericalCurrentPosition - 1 == numericalFutureposition) && (this.allItems[this.futurePosition] != "nothing")){
        
        return true;
    }
    else if((numericalCurrentPositionRemainder + 1 == numericalFuturepositionRemainder) && (numericalCurrentPosition - 1 == numericalFutureposition) && (this.allItems[this.futurePosition] != "nothing")){
        
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


class Pieces{
    constructor(dictionary,currentPlayer,blackMove,whiteMove,currentPosition,futurePosition){
        this.dictionary = dictionary;
        this.currentPlayer = currentPlayer;
        this.blackMove = blackMove;
        this.whiteMove = whiteMove;
        this.currentPosition = currentPosition;
        this.futurePosition = futurePosition;
      
    }
    callPawns(ID){
        //console.log(" current[;surt1 " + this.currentPlayer);
        
        
        let board = new Pawns(squares,this.currentPosition,this.futurePosition,this.currentPlayer,this.blackMove,this.whiteMove,this.dictionary,ID);
        this.dictionary = board.getDictionary();
        this.currentPlayer = board.getCurrentPlayer();
        this.blackMove = board.getBlackMove();
        this.whiteMove = board.getWhiteMove();
        this.currentPosition = board.getCurrentPosition();
        this.futurePosition = board.getFuturePosition();
        

    }

    callBishop(ID){
        //console.log(" current[;surt2 " + this.currentPlayer);
        
        
        let board = new Bishop(squares,this.currentPosition,this.futurePosition,this.currentPlayer,this.blackMove,this.whiteMove,this.dictionary,ID);
        this.dictionary = board.getDictionary();
        this.currentPlayer = board.getCurrentPlayer();
        this.blackMove = board.getBlackMove();
        this.whiteMove = board.getWhiteMove();
        this.currentPosition = board.getCurrentPosition();
        this.futurePosition = board.getFuturePosition();
          

    }

    callKnight(ID){
        let board = new Knight(squares,this.currentPosition,this.futurePosition,this.currentPlayer,this.blackMove,this.whiteMove,this.dictionary,ID);
        this.dictionary = board.getDictionary();
        this.currentPlayer = board.getCurrentPlayer();
        this.blackMove = board.getBlackMove();
        this.whiteMove = board.getWhiteMove();
        this.currentPosition = board.getCurrentPosition();
        this.futurePosition = board.getFuturePosition();
    }
}



let map = new Pieces({"10":"nothing", "11":"BlackKnight.png", "12":"BlackBishop.png","13":"nothing","14":"nothing","15":"BlackBishop.png","16":"BlackKnight.png","17":"nothing", "20":"BlackPawn.png","21":"BlackPawn.png","22":"BlackPawn.png","23":"BlackPawn.png","24":"BlackPawn.png","25":"BlackPawn.png","26":"BlackPawn.png","27":"BlackPawn.png","30":"nothing","31":"nothing","32":"nothing","33":"nothing","34":"nothing","35":"nothing","36":"nothing","37":"nothing","40":"nothing","41":"nothing","42":"nothing","43":"nothing","44":"nothing","45":"nothing","46":"nothing","47":"nothing","50":"nothing","51":"nothing","52":"nothing","53":"nothing","54":"nothing","55":"nothing","56":"nothing","57":"nothing","60":"nothing","61":"nothing","62":"nothing","63":"nothing","64":"nothing","65":"nothing","66":"nothing","67":"nothing","70":"WhitePawn.png","71":"WhitePawn.png","72":"WhitePawn.png","73":"WhitePawn.png","74":"WhitePawn.png","75":"WhitePawn.png","76":"WhitePawn.png","77":"WhitePawn.png","80":"nothing","81":"nothing","82":"WhiteBishop.png","83":"nothing","84":"nothing","85":"WhiteBishop.png","86":"nothing","87":"nothing"},"Black",true,true,"","");
let infomationOFPieces = {"10":"nothing", "11":"BlackKnight.png", "12":"BlackBishop.png","13":"nothing","14":"nothing","15":"BlackBishop.png","16":"BlackKnight.png","17":"nothing", "20":"BlackPawn.png","21":"BlackPawn.png","22":"BlackPawn.png","23":"BlackPawn.png","24":"BlackPawn.png","25":"BlackPawn.png","26":"BlackPawn.png","27":"BlackPawn.png","30":"nothing","31":"nothing","32":"nothing","33":"nothing","34":"nothing","35":"nothing","36":"nothing","37":"nothing","40":"nothing","41":"nothing","42":"nothing","43":"nothing","44":"nothing","45":"nothing","46":"nothing","47":"nothing","50":"nothing","51":"nothing","52":"nothing","53":"nothing","54":"nothing","55":"nothing","56":"nothing","57":"nothing","60":"nothing","61":"nothing","62":"nothing","63":"nothing","64":"nothing","65":"nothing","66":"nothing","67":"nothing","70":"WhitePawn.png","71":"WhitePawn.png","72":"WhitePawn.png","73":"WhitePawn.png","74":"WhitePawn.png","75":"WhitePawn.png","76":"WhitePawn.png","77":"WhitePawn.png","80":"nothing","81":"nothing","82":"WhiteBishop.png","83":"nothing","84":"nothing","85":"WhiteBishop.png","86":"nothing","87":"nothing"};
const squares = document.querySelectorAll('.grid > div');
let currentGoingPlayer = "Black";
let previousSelected = "";
for(let i = 0; i< squares.length;i++){
    squares[i].addEventListener('click',initiliztion);
};

function initiliztion(event){
    console.log("in this2");
    console.log("image " + map.dictionary[event.currentTarget.id]);
    console.log("previouselected " + previousSelected);
    let colorOfPiece = map.dictionary[event.currentTarget.id];
    if((previousSelected == "") && (map.dictionary[event.currentTarget.id] == "BlackPawn.png" || map.dictionary[event.currentTarget.id] == "WhitePawn.png")){
        console.log("in this");
        if(map.currentPlayer != colorOfPiece.substring(0,5)){
            alert("other player turn");
        }
        else{
            previousSelected = map.dictionary[event.currentTarget.id];
            map.callPawns(event.currentTarget.id);
        }
       
        
        
    }
    else if((previousSelected == "BlackPawn.png" || previousSelected == "WhitePawn.png")){
        console.log(" ++++++++++++++++++++++-----------------");
        previousSelected = "";
        map.callPawns(event.currentTarget.id);
       
        
    }
    else if((previousSelected == "") && (map.dictionary[event.currentTarget.id] == "BlackBishop.png" || map.dictionary[event.currentTarget.id] == "WhiteBishop.png")){
        console.log(" currentGoingPlayer " + currentGoingPlayer);
        console.log(" map.currentPlayer " + map.currentPlayer);
        if(map.currentPlayer != colorOfPiece.substring(0,5)){
            alert("other player turn");
        }
        else{
            previousSelected = map.dictionary[event.currentTarget.id];
            map.callBishop(event.currentTarget.id);
        }
        
        
        
    }
    else if((previousSelected == "BlackKnight.png" || previousSelected == "WhiteKnight.png")){
        console.log(" ++++++++++++++++++++++");
        previousSelected = "";
        map.callKnight(event.currentTarget.id);
        
    }

    else if((previousSelected == "") && (map.dictionary[event.currentTarget.id] == "BlackKnight.png" || map.dictionary[event.currentTarget.id] == "WhiteKnight.png")){
        if(map.currentPlayer != colorOfPiece.substring(0,5)){
            alert("other player turn");
        }
        else{
            previousSelected = map.dictionary[event.currentTarget.id];
            map.callKnight(event.currentTarget.id);
        }
    }
}
//while(true){
    // map.callPawns();
    // map.callBishop();
//}


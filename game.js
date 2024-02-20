alert("Hello")

var theBoard = [0,0,0,0,0,0,0,0,0,0,0,0];

var player1 = theBoard[0];



function rollDice() {
    x = Math.floor(Math.random() * 10);
    console.log(x);
    if (x == 0 ){ 
        x = 1; 
        console.log(x);
        } else if (x > 6) { 
            x = Math.floor(x/2); 
            console.log(x); 
            console.log("number is more than 6");
            } else { 
                console.log(x); 
                console.log("number not more than 6");}
    
    console.log("You rolled " + x + "!"); 
    return x;
}
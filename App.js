let boxes=document.querySelectorAll(".box") ;
// let resetbtn = document.querySelector("#rest") ;
let newgame = document.querySelector("#reset") ;
let result = document.querySelector(".result") ;

let turn0 = true ;
const winPatterns = [
      [0,1,2] ,
      [3,4,5] ,
      [6,7,8] ,
      [0,3,6] ,
      [1,4,7] ,
      [2,5,8] , 
      [0,4,8] ,
      [2,4,6] ,
]

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
       console.log("Box was Clicked") ;  
       if(turn0){ 
       box.innerText="0" ;
       turn0 = false ;
       }else{
        box.innerText="1" ;
        turn0=true ;
       }
       box.disabled = true ;
       checkWinner() ;
    });
});

const showWinner = (winner) => {
    result.innerText=`Congractulations, Winner is ${winner}` ;
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText ;
        let pos2Val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText ;

        if(pos1Val!="" && pos2Val!="" && pos3val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3val){
                console.log("Winner") ;
                showWinner(pos1Val) ; 
                disableButtons() ;
            }
        }
    }
}

const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
}
const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false ;
    }
}

newgame.addEventListener("click" , resetGame) ;

const resetGame = () => {
    turn0 = true ;
    enableButtons() ;
    boxes.forEach((box) =>{
        box.innerTEXT="" ;
        box.disabled=false ;
    });
    result.innerTEXT="Keep Playing" ;
}
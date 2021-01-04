


let MyAnswer;
let Count;
let Start=document.getElementById("cheat");
let Restart=document.getElementById("restart");
//let Start=document.getElementById("start");
var answer = '';

//window.onload=StartGame();

    function GetRandomNumbers() {
      let RandomAnswer='';
        for (let i = 0; i < 4; i++) {
          let rdNum = Math.floor(Math.random()*10);
          RandomAnswer+=rdNum;
        }
      return RandomAnswer;
    };
    
    let StartGame = ()=> {
      CreateNumber();
    }
    Start.addEventListener("click",StartGame);
//Guess功能，判斷MyAnswer與RandomAnswer異同
    function LookUpAns() {
      if(!Cheat.getAttribute("disabled")) {
        alert(`The Answer is:${RandomAnswer}`); //取得答案
      } 
    };
    var clear=()=>{
      answer.innerHTML="";
    }

    function RestartGame() {
      clear();
    }
//.input-group-addon中填入#userGuess input
//判斷並儲存input data
//列入一個動態生成的list-gruop-item，並顯示?A?B
//結束遊戲(4A0B)，紅色變綠色

  // seedlength = seed.length;//陣列長度


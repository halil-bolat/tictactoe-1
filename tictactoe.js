
var boxs = document.getElementsByTagName('td');
var winner = [
  ['0','1','2'],
  ['3','4','5'],
  ['6','7','8'],
  ['0','3','6'],
  ['1','4','7'],
  ['2','5','8'],
  ['0','4','8'],
  ['2','4','6'],
];
var player1 = [];
var player2 = [];

var player_one = 1;

function play(){
  if (this.innerHTML == ''){
    if(player_one == 1){
      document.getElementById('playerTurn').innerHTML = 'It is Os turn';
      this.innerHTML = 'x';
      player2.push(event.target.dataset.num);
      console.log(player2);
      check(player2, "x");
      player_one = 0;
      }


    else {
      this.innerHTML = 'O';
      document.getElementById('playerTurn').innerHTML = 'It is Xs turn';
      player_one = 1;
      player1.push(event.target.dataset.num);
      console.log(player1);
      check(player1, "O");
    }
  }
  else {
    console.log("error");
  }
}

function check(arr, player) {
  for(var i=0; i<winner.length; i++){
    if (winner[i].every((val) =>arr.includes(val)))
    {
      document.getElementById('playerTurn').innerHTML = "Player " + player + " Wins!";
    }
  }
}

for (var box of boxs) {
  box.addEventListener('click', play);
}


var reset = document.getElementById('reset');

reset.addEventListener('click', function(){
  location.reload();
});

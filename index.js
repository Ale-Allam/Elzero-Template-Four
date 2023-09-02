// let hoverLiList = document.querySelectorAll("li");
// hoverLiList.forEach(function(e){
//   e.onmouseenter = function(){
//   e.classList.add("fa-beat-fade")
//   }
//   e.onmouseleave = function(){
//   e.classList.remove("fa-beat-fade")
//   }
// })
let arra = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
let y = arra[4].split(":");
console.log(y[0] > y[1])
function points(games) {
  for (let i = 0; i < games.length;i++) {
    games[i].split(" ")
  }
  return games
}
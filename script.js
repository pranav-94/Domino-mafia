// let img = document.querySelectorAll("img");
let img = ["https://i.kym-cdn.com/photos/images/facebook/001/822/061/f9a.jpg",
"https://static.wikia.nocookie.net/b53483a1-0dfc-4f97-bdad-4e63ca275e11/scale-to-width/755",
"https://preview.redd.it/m75ja0p83hb61.jpg?auto=webp&s=adf990bede1a19153a0081d3952b8f13c324d83c"
]
let e1 = Math.floor(Math.random()*3)
let e2 = Math.floor(Math.random()*3)
let e3 = Math.floor(Math.random()*3)
console.log(e1,e2,e3)
document.querySelector("#f1").setAttribute("src",img[e1])
document.querySelector("#f2").setAttribute("src",img[e2])
document.querySelector("#f3").setAttribute("src",img[e3])
var a = document.querySelector("body")
function ishoot(img){
    img.classList.add("dead")
    if(!livingEnemies().length){
        alert("You won")
        window.location.reload()
    }
}
function enemyAttacksMe(img){
    img.classList.add("showing");
    setTimeout(() => {
        enemyShootsMe(img)
    }, 1000);
    setTimeout(()=>{
        img.classList.remove("showing")
    },3000);
}
function enemyShootsMe(img){
    if(! img.classList.contains("dead")){
    img.classList.add("shooting")
    updatePoints(helpoints-20)
    setTimeout(()=>{
        img.classList.remove("shooting")
    },200)
}
 }
 let living = document.querySelectorAll(".img")
 function livingEnemies(){
    return document.querySelectorAll(".img:not(.dead)")
 }
 function random(){
    var randomE = Math.random()*livingEnemies().length;
    randomE = Math.floor(randomE);
    var enemy = livingEnemies()[randomE]
    var randomDelay = Math.random()*2000+1000
    setTimeout(()=>{
        enemyAttacksMe(enemy)
        random();
    },randomDelay)
 }
 var helpoints = 100;
 function updatePoints(points){
      helpoints = points
      var healthbar = document.querySelector("#healthbar")
      healthbar.style.width = points + "%"

      if(helpoints<1){
        alert("Game over")
        window.location.reload();
      }    
 }
// a.style.backgroundColor = "black"

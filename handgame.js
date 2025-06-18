const options=document.querySelectorAll(".handgame")
const msg=document.querySelector(".msg")
const you=document.querySelector(".user")
const comp=document.querySelector(".comp")

let userscore=0
let compscore=0
//let userwin=true


const gencomp=()=>{
const arr=["paper","rock","scissor"]
const randinx=Math.floor(Math.random()*3)
return arr[randinx]
}

const draw=()=>{
    console.log("game was drawn")
    msg.innerHTML="DRAW"
}

// const decider=(userwin)=>{
// if(userchoice!==compchoice){
//     if(userwin){
//     msg.innerHTML="you won"
//     userscore++
//     you.innerHTML=userscore
//     console.log(userwin)
//    }
// else {
// msg.innerHTML="you lose"
// compscore++
// comp.innerHTML=compscore
// console.log("choomat")
// }
// }



// }



const playgame=(userchoice)=>{
console.log("user choice",userchoice)
const compchoice= gencomp()
console.log("computer choice",compchoice)
 
if(userchoice===compchoice){
    draw()

}

else if(userchoice==="rock"){
  if(compchoice==="scissor"){
    userwin=true
    console.log("you won") 
    decider(userwin)




    
}  

else{
userwin=false
    console.log("you loose")
    console.log(userwin)
    decider(userwin)
}}


else if(userchoice==="paper"){
    if(compchoice==="scissor"){
        console.log("you loose")
        userwin=false
        decider(userwin)
    }
    else{
        console.log("you won")
        userwin=true
        decider(userwin)
    }}


else{
    if(compchoice==="rock"){
        console.log("you loose")
        userwin=false
        decider(userwin)
        
    }
    else{
        console.log("you won")
        userwin=true
        decider(userwin)
    }
}
}



const decider=(userwin)=>{
//if(userchoice!==compchoice){
    if(userwin){
    msg.innerHTML="you won"
    userscore++
    you.innerHTML=userscore
    console.log(userwin)
   }
else {
msg.innerHTML="you lose"
compscore++
comp.innerHTML=compscore
console.log("choomat")
}
}









options.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //console.log("option choosen")
        const userchoice=choice.getAttribute("id")
        playgame(userchoice)
       // decider(userwin)

    })
})




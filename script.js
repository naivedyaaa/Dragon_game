score=0;
cross =true;

var audio = new Audio('music.mp3')
var audiogo = new Audio('gameover.mp3')

setTimeout(()=>{
    audio.play();
},1000)

document.onkeydown=function(element){
    console.log("Key code is : ", element.keyCode)
    if(element.keyCode==38){
        //querySelector will give you the first element whose class is dino and querySelectorAll will give you all the element whose class is dino and same will be done by getElementByClass
        dino =document.querySelector('.dino')
        dino.classList.add('animateDino')
        //to do the work after 700 ms
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(element.keyCode==39){
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left")) 
        dino.style.left = dinoX+112+"px";
    }
    if(element.keyCode==37){
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left")) 
        dino.style.left = dinoX-112+"px";
    }
}

setInterval(()=>{
    dino=document.querySelector(".dino")
    gameOver = document.querySelector('.gameOver')
    obstacle= document.querySelector('.obstacle')

    // to get the compouted left value of the dino from the css  and we are using parseInt to convert the pixel value to int 
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))

    // to get the compouted left value of the obstacle from the css 
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))

    // to get the absolute value of their difference in left and right
    offsetX =Math.abs(dx-ox);
    offsetY =Math.abs(dy-oy);
    if(offsetX< 93 && offsetY<52){
        gameOver.innerHTML="Game Over - Reload to start over"
        obstacle.classList.remove("obstacleAni")
        audiogo.play();
        setTimeout(() => {
            console.log('audio paused')
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX < 145 && cross){
        score += 1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(() => {
            aniDur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"))
            newDur=aniDur-0.1;
            obstacle.style.animationDuration=newDur+'s'
        }, 500);
    }

},10)

function updateScore(score){
    scoreContainer.innerHTML = "Your Score : " +score 
}



























// let dinoX=52
// let obstacleX=0
// let flag=0
// let dinoY=0
    
//     // whenever any key is pressed in keyboard
//     document.onkeydown =function(element){
//         console.log(element.keyCode)
//         if(element.keyCode==39 && flag==0){
//         dinoX=dinoX+5
//         document.querySelector(".dino").style.left=`${dinoX}px`
//     }
//     if(element.keyCode==37 && flag==0){
//         dinoX=dinoX-5
//         document.querySelector(".dino").style.left=`${dinoX}px`
//     }
//     if((element.keyCode==38 || element.keyCode==32) && flag==0){
//         const css= window.document.styleSheets[0]
//         css.insertRule(`
//         @keyframes jump{
//             0%{
//                 bottom: 0;
//                 left: ${dinoX}px;
//             }
//             25%{
//                 bottom: 130px;
//                 left:${dinoX+100}px;
//             }
//             50%{
//                 bottom: 200px;
//                 left:${dinoX+160}px;
//             }
//             75%{
//                 bottom: 130px;
//                 left: ${dinoX+300}px;    
//             }
//             100%{
//                 bottom: 0px;
//                 left:${dinoX+400}px;    
//             }
//         }`)
//         document.querySelector(".dino").classList.add("jump")
//         timer=setTimeout(() => {
//             const jumpDuration=setInterval(()=>{
//                 dinoY=dinoY+1
//                 setTimeout(()=>{
//                     clearInterval(jumpDuration)
//                 },500)
//                 console.log(dinoY)
//             },0.05)
            
//             setTimeout(() => {
//                 const jumpDuration=setInterval(()=>{
//                     dinoY=dinoY-1
//                     setTimeout(()=>{
//                         clearInterval(jumpDuration)
//                     },500)
//                     console.log(dinoY)
//                 },0.05)

//             }, 500);
//         }, 0);  
//         setTimeout(()=>{
//             document.querySelector(".dino").classList.remove("jump")
//             dinoX=dinoX+400
//             document.querySelector(".dino").style.left=`${dinoX}px`
//             css.removeRule("@keyframes jump")
//         },975)
        
//     }
//     console.log("executed")
// }
// const game=setInterval(()=>{
//     document.querySelector(".obstacle").style.right=`${obstacleX}px`
//     obstacleX += 1
//     if(obstacleX==1300){
//         obstacleX=0
//     }
//     if(obstacleX+dinoX>=990 && obstacleX+dinoX<=995){
//         console.log("game over")
//         flag=1
//         clearInterval(game)
//     }
//     if(obstacleX+dinoX>=990 && obstacleX+dinoX<=1100 && dinoY!=0 && dinoY<113){
//         console.log("game over")
//         flag=1
//         clearInterval(game)
//     }
// },1)
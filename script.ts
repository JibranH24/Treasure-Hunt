"use strict"

 
 
 let treasureBox=<HTMLImageElement> document.getElementById("treasurebox")
 document.addEventListener("click",mouseClick)


 
 let treasureXPosition=Math.random()*window.innerWidth-35
 let treasureYPosition=Math.random()*window.innerHeight-35


 treasureBox.style.left=treasureXPosition-25 +"px"
 treasureBox.style.top=treasureYPosition-25+"px"

 let banner=document.createElement("h1")
 document.body.appendChild(banner)
 banner.innerText="Click the screen and find the treasure"


 function mouseClick(e:MouseEvent){
      // treasureBox.style.left=e.clientX+"px"
      // treasureBox.style.top=e.clientY+"px"
      


      //alert(distanceBetween(e.clientX,e.clientY,treasureXPosition,treasureYPosition))

      let distance=distanceBetween(e.clientX,e.clientY,treasureXPosition,treasureYPosition)
        //You have to be able to know if this distance is "colder" then the previous distance
      
      
      
      if (distance<50){
         myAlert("You've found the treasure")
         banner.style.color="gold"
         treasureBox.style.visibility="visible"
         setTimeout(resetGame,1500)
         
      }
      else if(distance<150){             
         myAlert("Really Hot") 
         banner.style.color="darkred"
      }
      else if(distance<250){
         myAlert("Hot")
         banner.style.color="red"
      }
      else if(distance<350){
         myAlert("Warm")
         banner.style.color="orange"
      }
      else if(distance<550){
         myAlert("Cold")
         banner.style.color="rgb(102, 170, 247)"
      }
      else if(distance>750){
         myAlert("Freezing")
         banner.style.color="blue"
         
      }
      



      //alert the distance between where they clicked and where the treasure is
   }
 function myAlert(message:string){
    banner.innerHTML=message
 }

function resetGame(){
   document.location.reload()
}




 function distanceBetween(x1:number,y1:number,x2:number,y2:number){

   let distance=Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)))//passes any 2 points and tells distance between 2 points


   return distance
 }
const  element = document.querySelectorAll(".element")




let count= 0

setInterval(()=>{
    
   
    count++
    let currentElement= document.querySelector(".current")
    currentElement.classList.remove("current")
    if(count==element.length){
        element[0].classList.add("current")
       count=0
    }else{
        currentElement.nextElementSibling.classList.add("current")
        console.log(count)
       
    }
    
    



   
},6000)

const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")


    btn1.addEventListener("click",()=>
{
     btn1.style.backgroundColor="rgb(176, 245, 73)"
     
     btn2.style.backgroundColor="rgb(200, 193, 193)"
    
     btn3.style.backgroundColor="rgb(200, 193, 193)"
     
     
     
     
})

    btn2.addEventListener("click",()=>
{
     btn2.style.backgroundColor="rgb(176, 245, 73)"
    
     btn3.style.backgroundColor="rgb(200, 193, 193)"
     
     btn1.style.backgroundColor="rgb(200, 193, 193)"

     
     
})
    btn3.addEventListener("click",()=>
{
     btn3.style.backgroundColor="rgb(176, 245, 73)"
    
     btn1.style.backgroundColor="rgb(200, 193, 193)"
     
     btn2.style.backgroundColor="rgb(200, 193, 193)"
     
     
})


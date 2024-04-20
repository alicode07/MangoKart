const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const dynTrend=document.getElementById("dynTrend")
const TrendProduct=[
    
    {
        name:"Grapes",
        img:"./assets/grapes.jpg"
    },
    {
        name:"Pine",
        img:"./assets/pine.jpg"
    },
    {
        name:"Tomato",
        img:"./assets/tomato.jpg"
    }
];
// console.log(dynTrend)

// console.log(TrendProduct[0].name)


    
function getData(){
    return dynTrend.innerHTML=
    `
    <div class="bottomimg" style="margin-right: 10px;">
               <div class="topData" >
                  ${TrendProduct[0].name}
               </div>
                <img src="${TrendProduct[0].img}">
             </div>
    <div class="bottomimg" style="margin-right: 10px;">
               <div class="topData" >
                  ${TrendProduct[1].name}
               </div>
                <img src="${TrendProduct[1].img}">
             </div>
    <div class="bottomimg" style="margin-right: 10px;">
               <div class="topData" >
                  ${TrendProduct[2].name}
               </div>
                <img src="${TrendProduct[2].img}">
             </div>
    `
} 

 



    btn1.addEventListener("click",()=>
{
     btn1.style.backgroundColor="rgb(176, 245, 73)"
     
     btn2.style.backgroundColor="rgb(200, 193, 193)"
    
     btn3.style.backgroundColor="rgb(200, 193, 193)"
     getData()
     
     
     
     
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

 



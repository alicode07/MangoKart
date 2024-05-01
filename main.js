const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const dynTrend=document.querySelector("#dynTrend")
const AddCart=document.querySelector(".AddCart")
const DisCart=document.querySelector(".DisCart")
const DelCart=document.querySelector(".DelCart")
let basket=JSON.parse(localStorage.getItem("data")) || []
const TrendProduct2=[
    
    {
        id:"5",
        name:"CARROT",
        img:"./assets/GAZAR.png",
        price:"₹30"
    },
    {
        id:"6",
        name:"KIWI JUICE",
        img:"./assets/KIWI JUICE.jpg",
        price:"₹50"
    },
    {
        id:"7",
        name:"WATERMELON",
        img:"./assets/WATERMELON.jpg",
        price:"₹30"
    },
    {
        id:"8",
        name:"WHEAT ",
        img:" ./assets/WHEAT.jpg",
        price:"₹25"

    }
];
const TrendProduct1=[
    
    { 
        id:"1",
        name:"BROCALLI",
        img:"./assets/pine.png",
        price:"₹120"
    },
    {
        id:"2",
        name:"KIWI",
        img:"./assets/KIWI.jpg",
        price:"₹50"
    },
    {
        id:"3",
        name:"GINJERJUICE",
        img:"./assets/GINJAR JUICE.jpg",
        price:"₹60"
    },
    {   
        id:"4",
        name:"APPLE ",
        img:" ./assets/APPLE.jpg",
        price:"₹90"

    },
   
];
const TrendProduct3=[
    
    {
        id:"9",
        name:"MELON JUICE",
        img:"./assets/MELON JUICE.jpg",
        price:"₹30"
    },
    {   
        id:"10",
        name:"BANANA",
        img:"./assets/BANANA1.jpg",
        price:"₹40"
    },
    {
        id:"11",
        name:"ORANGE",
        img:"./assets/ORANGE.jpg",
        price:"₹45"
    },
    {  
        id:"12",
        name:"ORANGE ICE",
        img:" ./assets/ORANGE WITH ICE.jpg",
        price:"₹55"

    }
];  

let getData1 =()=>{
    return (dynTrend.innerHTML=TrendProduct1.map((x)=>
   { 
      let {id,name,price,img}=x;
      let search=basket.find((x)=>x.id===id) || []
      console.log(search)
     
       return `
       <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                   ${name}
                </div>
                 <img src="${img}" class="fruitImgCat">
                 <div class="priceTag">
                     ${price}
                </div>
                 <hr >
                 <div class="addToCartMain">
                     <div class="Wishlist">
                        <img src="./assets/heart-thin-icon.svg" alt="" width="25" >
                        <!-- <img src="./assets/heart-icon.svg" alt="" width="30" > -->
                     </div>
                     <div class="addToCart">
                        <table border="1"  class="AddTable">
                             <tr>
                                <th class="AddCart" onclick="increase1 ${id}">+</th>
                                <th class="DisCart" id="${id}"></th>
                                <th class="DelCart" onclick="decrease ${id}">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>`
   }).join(" "))
    
};
getData1()
let getData2=()=>
{
   return (dynTrend.innerHTML=TrendProduct2.map((x)=>
   {
      let {id,name,price,img}=x;

      return `
      <div class="bottomimg" style="margin-right: 10px;">
               <div class="topData" >
                  ${name}
               </div>
                <img src="${img}" class="fruitImgCat">
                <div class="priceTag">
                    ${price}
               </div>
                <hr >
                <div class="addToCartMain">
                    <div class="Wishlist">
                       <img src="./assets/heart-thin-icon.svg" alt="" width="25" >
                       <!-- <img src="./assets/heart-icon.svg" alt="" width="30" > -->
                    </div>
                    <div class="addToCart">
                       <table border="1"  class="AddTable">
                            <tr>
                               <th class="AddCart"onclick="increase2 ${id}">+</th>
                               <th class="DisCart" onclick="decrease2 ${id}"></th>
                               <th class="DelCart">-</th>
                            </tr>
                       </table>
                    </div>

                </div>
             </div>`



   }


).join(" "))
};

let getData3=()=>
{
   return (dynTrend.innerHTML=TrendProduct3.map((x)=>
   {
      let {id,name,price,img}=x;

      return `
      <div class="bottomimg" style="margin-right: 10px;">
               <div class="topData" >
                  ${name}
               </div>
                <img src="${img}" class="fruitImgCat">
                <div class="priceTag">
                    ${price}
               </div>
                <hr >
                <div class="addToCartMain">
                    <div class="Wishlist">
                       <img src="./assets/heart-thin-icon.svg" alt="" width="25" >
                       <!-- <img src="./assets/heart-icon.svg" alt="" width="30" > -->
                    </div>
                    <div class="addToCart">
                       <table border="1"  class="AddTable">
                            <tr>
                               <th class="AddCart"onclick="increase ${id}">+</th>
                               <th class="DisCart" onclick="decrease ${id}"></th>
                               <th class="DelCart">-</th>
                            </tr>
                       </table>
                    </div>

                </div>
             </div>`
   }
).join(" "))
}


    btn1.addEventListener("click",()=>
{    
     getData1()
     btn1.style.backgroundColor="rgb(176, 245, 73)"
     btn2.style.backgroundColor="rgb(200, 193, 193)"
     btn3.style.backgroundColor="rgb(200, 193, 193)"
     
});

    btn2.addEventListener("click",()=>
{
    getData2();
     btn2.style.backgroundColor="rgb(176, 245, 73)"
     btn3.style.backgroundColor="rgb(200, 193, 193)"
     btn1.style.backgroundColor="rgb(200, 193, 193)"
     
});
    btn3.addEventListener("click",()=>
{
    getData3()
     btn3.style.backgroundColor="rgb(176, 245, 73)"
     btn1.style.backgroundColor="rgb(200, 193, 193)"
     btn2.style.backgroundColor="rgb(200, 193, 193)"
     
});

let increase1=(id)=>
{
   let selectedProduct=id
   let search=basket.find((x)=>x.id===selectedProduct)
   // if(search===undefined)
   // {
   //    basket.push({
   //       id:selectedProduct,
   //       item:1,
   //    })
   // }
   // else
   // {
   //    search.item+=1
   // }

   
   
}





console.log("hello")


// Add to Cart In Cart




 



const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const dynTrend=document.querySelector("#dynTrend")
const AddCart=document.querySelector(".AddCart")
const DisCart=document.querySelector(".DisCart")
const DelCart=document.querySelector(".DelCart")
const TrendProduct2=[
    
    {
        name:"CARROT",
        img:"./assets/GAZAR.png",
        price:"₹30"
    },
    {
        name:"KIWI JUICE",
        img:"./assets/KIWI JUICE.jpg",
        price:"₹50"
    },
    {
        name:"WATERMELON",
        img:"./assets/WATERMELON.jpg",
        price:"₹30"
    },
    {
        name:"WHEAT ",
        img:" ./assets/WHEAT.jpg",
        price:"₹25"

    }
];
const TrendProduct1=[
    
    {
        name:"BROCALLI",
        img:"./assets/pine.png",
        price:"₹120"
    },
    {
        name:"KIWI",
        img:"./assets/KIWI.jpg",
        price:"₹50"
    },
    {
        name:"GINJERJUICE",
        img:"./assets/GINJAR JUICE.jpg",
        price:"₹60"
    },
    {
        name:"APPLE ",
        img:" ./assets/APPLE.jpg",
        price:"₹90"

    }
];
const TrendProduct3=[
    
    {
        name:"MELON JUICE",
        img:"./assets/MELON JUICE.jpg",
        price:"₹30"
    },
    {
        name:"BANANA",
        img:"./assets/BANANA1.jpg",
        price:"₹40"
    },
    {
        name:"ORANGE",
        img:"./assets/ORANGE.jpg",
        price:"₹45"
    },
    {
        name:"ORANGE ICE",
        img:" ./assets/ORANGE WITH ICE.jpg",
        price:"₹55"

    }
];  
function getData1(){
    return dynTrend.innerHTML=
    ` 
      
    <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                   ${TrendProduct1[0].name}
                </div>
                 <img src="${TrendProduct1[0].img}" class="fruitImgCat">
                 <div class="priceTag">
                     ${TrendProduct1[0].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct1[1].name}
                </div>
                 <img src="${TrendProduct1[1].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct1[1].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct1[2].name}
                </div>
                 <img src="${TrendProduct1[2].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct1[2].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct1[3].name}
                </div>
                 <img src="${TrendProduct1[3].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct1[3].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
    `
} 
function getData2(){
    return dynTrend.innerHTML=
    `
    <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                   ${TrendProduct2[0].name}
                </div>
                 <img src="${TrendProduct2[0].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct2[0].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct2[1].name}
                </div>
                 <img src="${TrendProduct2[1].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct2[1].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct2[2].name}
                </div>
                 <img src="${TrendProduct2[2].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct2[2].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct2[3].name}
                </div>
                 <img src="${TrendProduct2[3].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct2[3].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
    `
} 
function getData3(){
    return dynTrend.innerHTML=
    `
    <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                   ${TrendProduct3[0].name}
                </div>
                 <img src="${TrendProduct3[0].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct3[0].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct3[1].name}
                </div>
                 <img src="${TrendProduct3[1].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct3[1].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct3[2].name}
                </div>
                 <img src="${TrendProduct3[2].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct3[2].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
     <div class="bottomimg" style="margin-right: 10px;">
                <div class="topData" >
                ${TrendProduct3[3].name}
                </div>
                 <img src="${TrendProduct3[3].img}" class="fruitImgCat">
                 <div class="priceTag">
                 ${TrendProduct3[3].price}
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
                                <th class="AddCart">+</th>
                                <th class="DisCart"></th>
                                <th class="DelCart">-</th>
                             </tr>
                        </table>
                     </div>

                 </div>
              </div>
    `
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
let add=0;
let del=1;
AddCart.addEventListener("click",()=>
{
    add++
    DisCart.innerText=add
})
DelCart.addEventListener("click",()=>
{
     add--
     DisCart.innerText=add
})


 



const loginbtn=document.getElementById("loginbtn")
const signupbtn=document.getElementById("signupbtn")
const innercard=document.querySelector(".innercard")
const returnLink1=document.querySelector(".returnLink1")
const returnLink=document.querySelector(".returnLink")
const loginCard=document.querySelector(".loginCard")


// console.log(signupbtn)
// console.log(loginbtn)

function domreturn()
{
    return loginCard.innerHTML=
    `
    <div id="innercard1">
    <div>First Name</div>
    <div class="firstName"><input type="text" name="" id="firstName"></div>
    <div>Last Name</div>
    <div class="lastName"><input type="text" name="" id="lastName"></div>
    <div>E-Mail</div>
    <div class="signEmail"><input type="email" name="" id="signEmail"></div>
    <div>Mobile</div>
    <div class="mobile"><input type="number" name="" id="mobile"></div>
    <br>
    <div style="font-weight: 900; text-decoration: underline;">Your Password</div>
    <hr border="10">
    <br>
    
    <div>Password</div>
    <div><input type="password" name="" id="signPass"></div>
    <div>Password Confirm</div>
    <div class="passConfirm"><input type="password" name="" id="signCnfpass"></div>
    <div><input type="checkbox" name="" id="checkTnC"> I have read and agree to the <strong>Privacy policy</strong></div>
    <div class="registerBtn">
        <button id="regBtn">Register</button>
    </div>
</div>
    `
}
// domreturn()
signupbtn.addEventListener("click",()=>
{
    //  innercard.style.display="none"
     returnLink1.style.display="none"
     innercard.style.display="none"
     domreturn() 
     return returnLink.innerHTML=
     `
     <div class="returnLink2">
         <h2><a href="../index.html">Home / </a><a href="login.html" class="active">Register</a></h2> 
    </div>
          
    `  
     
})

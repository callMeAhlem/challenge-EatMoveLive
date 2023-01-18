// window.addEventListener("hashchange",function (){
//     document.getElementById(location.hash.substr[1]).style.display="block"
// })

function getContent(id){
    document.getElementById(id).style.display="block"
}
function dissContent(id){
    document.getElementById(id).style.display="none"
}
document.getElementById("know-Your-Body-link").onclick=()=>getContent("knowYourBody")
document.getElementById("quickStart").onclick=()=>getContent("knowYourBody")
var genderBtn=document.querySelectorAll(".genderImg")
var ageBtn=document.querySelectorAll(".rangeBox button")
genderBtn[0].onclick=function () { 
    dissContent("knowYourBody")
    getContent("ageBox")
} 
genderBtn[1].onclick=function () { 
    dissContent("knowYourBody")
    getContent("ageBox")
} 
for(i=0;i<ageBtn.length;i++){
    ageBtn[i].onclick=function(){
        dissContent("ageBox")
        getContent("heightBox")
    }
}
function submitHeight(){
    if(document.querySelector("#height").value!=""){

    dissContent("heightBox")
    getContent("weightBox")}
    else{
        alert("Please enter your height")}
}
function submitWeight(){
    if(document.querySelector("#weight").value!=""){
    dissContent("weightBox")
    getContent("activityBox")}
    else{
alert("Please enter your weight")   }
}
function bmiCalcul (){
    var h=(document.querySelector("#height").value)/100
    var w=document.querySelector("#weight").value
    return w/(h*h)
}
var actBtn=document.querySelectorAll(".activityLevels img")
for (i=0;i<actBtn.length;i++){
    actBtn[i].onclick=function(){
dissContent("activityBox")
dissContent("home")
dissContent("result1")
dissContent("result2")
dissContent("result3")
dissContent("result4")
dissContent("eatBetter")
dissContent("getFit")
var bmi=bmiCalcul()
if((bmi<=24.9) && (bmi>=18.5)){
getContent("result1")
document.querySelector(".resultContent h4").textContent+=bmi.toFixed(2)
window.scrollTo(0,0)
}
if((bmi<18.5)){
    getContent("result2")
    document.querySelector(".resultContent2 h4").textContent+=bmi.toFixed(2)
    window.scrollTo(0,0)
    }
if((bmi>24.9) && (bmi<=29.9)){
        getContent("result3")
        document.querySelector(".resultContent3 h4").textContent+=bmi.toFixed(2)
        window.scrollTo(0,0)
        }
if((bmi>29.9)){
        getContent("result4")
        document.querySelector(".resultContent4 h4").textContent+=bmi.toFixed(2)
        window.scrollTo(0,0)
        }
    }
}
document.querySelector("#eat-better-link").onclick = function () {
    dissContent("home")
    dissContent("result1")
    dissContent("result2")
    dissContent("result3")
    dissContent("result4")
    dissContent("knowYourBody")
    getContent("eatBetter")
    window.scrollTo(0, 0)
}
document.querySelector("#get-fit-link").onclick = function () {
    dissContent("home")
    dissContent("result1")
    dissContent("result2")
    dissContent("result3")
    dissContent("result4")
    dissContent("knowYourBody")
    dissContent("eatBetter")
    getContent("getFit")
    window.scrollTo(0, 0)
}
document.querySelector("#logoBtn").onclick=function(){
    dissContent("result1")
    dissContent("result2")
    dissContent("result3")
    dissContent("result4")
    dissContent("knowYourBody")
    dissContent("eatBetter")
    dissContent("getFit")
    getContent("home")
}
document.querySelector("#sign-in").onclick=()=>getContent("signIn")
document.querySelector("#email").onclick=function(){
    document.querySelector("#email").style.color="black"
}
document.querySelector("#password").onclick=function(){
    document.querySelector("#password").style.color="black"
}



window.onload=function(){
    document.querySelector("#height").value=""
    document.querySelector("#weight").value=""

}

// All the Number:-

let audio = new Audio("Click2.mp3");

let Num = document.querySelectorAll(".Num");
let AC = document.getElementsByClassName("AC")[0];
let Input_Circle = document.querySelectorAll('.Input-Circle')
let Answer = document.getElementsByClassName("Answer")[0];
Answer.innerText = "";

// Operation Part:-

let Op = Array.from(document.querySelectorAll(".Op"));
let Operation = [
    { Op: "%" },
    { Op: "/" },
    { Op: "*" },
    { Op: "+" },
    { Op: "-" },
]
Op.forEach((element, i) => {
    element.addEventListener("click", () => {
        Answer.innerText = Answer.innerText + Operation[i].Op;
        audio.play();
    })
})

Input_Circle.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.computedStyleMap.scale="0"
    })
    
})


// Number Click:-

Array.from(Num).forEach((element, i) => {

    element.addEventListener("click", () => {
        Answer.innerText = Answer.innerText + Num[i].innerText;
        audio.play();
    })
})


// Keyborad Input:--

document.addEventListener('keydown',(e)=>{

    if((e.key>=0 && e.key <=9)||(e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-" || e.key == "%" || e.key == "."    )){
        Answer.innerHTML = Answer.innerHTML + e.key;
        audio.play();
    }
   
    if(e.key == "Enter"){
        let Ans = eval(Answer.innerHTML);
        Answer.innerHTML = "="+ Ans;
        audio.play();
    }

    if(e.key == "Backspace"){
        Answer.innerHTML = Answer.innerHTML.slice(0,-1)
        audio.play();
    }

})




// Answer Calculation:-

let EqualTo = document.getElementsByClassName("EqualTo")[0];
EqualTo.addEventListener("click", () => {
    let FinalValue = eval(Answer.innerText);
    audio.play();
    Answer.innerText = "=" + FinalValue
})
// AC Button :-

AC.addEventListener("click", () => {
    Answer.innerText = ""
    audio.play();
})

// Delete Function:-

let Delete = document.getElementsByClassName("Delete")[0];
Delete.addEventListener("click", () => {
    Answer.innerText = Answer.innerText.toString().slice(0, -1);
    audio.play();
})


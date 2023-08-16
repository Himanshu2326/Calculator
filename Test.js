
console.log("Hello");

let Answer = document.querySelector('.Answer');
let AC = document.querySelector('.AC');

AC.addEventListener('click', () => {
    Answer.innerHTML = "";
})

let Num = document.querySelectorAll('.Num');


Num.forEach((e) => {
    e.addEventListener('click', () => {
        Answer.innerHTML = Answer.innerHTML + e.innerText;
    })
})

let Op = document.querySelectorAll('.Op');

Operation = [
    { "Op": "%" },
    { "Op": "/" },
    { "Op": "*" },
    { "Op": "+" },
    { "Op": "-" }
]

Op.forEach((e,i) => {
    e.addEventListener('click', () => {
        Answer.innerHTML = Answer.innerHTML + Operation[i].Op    
    })
})


let EqualTo = document.querySelector('.EqualTo');

EqualTo.addEventListener('click',()=>{
    let Ans = eval(Answer.innerHTML);
    Answer.innerHTML= "=" + Ans;
    console.log(Ans);
})

let Delete = document.querySelector('.Delete');

Delete.addEventListener('click',()=>{
    Answer.innerHTML = Answer.innerHTML.slice(0,-1)
})


document.addEventListener('keydown',(e)=>{
    if((e.key>=0 && e.key <=9)||(e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-" || e.key == "%"   )){
        Answer.innerHTML = Answer.innerHTML + e.key;
    }
   
    if(e.key == "Enter"){
        let Ans = eval(Answer.innerHTML);
        Answer.innerHTML = Ans;
    }
})


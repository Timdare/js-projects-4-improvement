let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById('question');
question.innerText = `What is ${num1} multipled by ${num2}?`;

let correctAns = num1 * num2;
let score = JSON.parse(sessionStorage.getItem("score")) || 0;

/*if(!score){
    score = 0;
}*/

document.getElementById("score").innerText = `score: ${score}`;

const input = document.getElementById('input');

const form = document.getElementById('form');

form.addEventListener("submit", ()=> {

    const userAns =+ input.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }

})

function updateLocalStorage(){
    sessionStorage.setItem("score", JSON.stringify(score));
}

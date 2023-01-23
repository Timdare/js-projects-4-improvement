const textarea = document.getElementById('textarea');
const totalCounter = document.getElementById('totalCounter');
const remainingCounter = document.getElementById('remainingCounter');

textarea.addEventListener("keyup", ()=> {
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCounter.innerText = textarea.value.length;
    remainingCounter.innerText = textarea.getAttribute("maxLength") - textarea.value.length;

}
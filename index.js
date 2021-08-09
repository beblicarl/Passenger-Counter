let count = 0;
let countEl = document.getElementById("count");

function counted(){
    count += 1
    countEl.innerHTML = count;   
}

let saveEl = document.getElementById("passenger")

function saved(){
let number = count + " - "
saveEl.innerHTML += number
countEl.innerHTML = 0
count = 0
}


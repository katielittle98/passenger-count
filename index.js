
let countEl = document.getElementById("count-el")
let saveMe = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")
let count = 0;


function increment() {
    count += 1;
    countEl.innerText = count
    console.log(count)
    
}


function save() {
    let countSave = count + " - "
    saveEl.textContent += countSave
    console.log(count)
    countEl.textContent = 0;
    count = 0;

}









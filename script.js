const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearIcon = document.getElementById("clear-icon"); //update

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    clearIcon.style.display = 'none'; //update
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


//update
clearIcon.addEventListener("click", function () {
    inputBox.value = '';
    clearIcon.style.display = 'none';
});

inputBox.addEventListener("input", function () {
    clearIcon.style.display = inputBox.value ? 'block' : 'none';
});

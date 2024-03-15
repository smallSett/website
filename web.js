let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <span class="delete" onclick="removeTask(this)">❌</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
let quotes = [
	"Every man is a poet when he is in love. — Plato",
	"I am a slow walker, but I never walk backwards. — Abraham Lincoln",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
	"Tell me and I forget. Teach me and I remember. Involve me and I learn. — Benjamin Franklin",
	" A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties. — Harry S. Truman",
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

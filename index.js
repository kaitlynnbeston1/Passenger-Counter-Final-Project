let count = 0
console.log(count)

let welcomeEl = document.getElementById("welcome-el")
let name = prompt("What is your name? ") + " "
let greeting = "Welcome back, "
let welcome = welcomeEl.textContent = greeting + name + "\u{0263A}"

function increment() {
    count = count + 1
    document.getElementById("count").textContent = count
}

function decrement() {
    count = count - 1
    document.getElementById("count").textContent = count
}

function save() {
    console.log(count)
    let time = new Date()
    let logtime = time.toLocaleTimeString()
    let listItem = document.createElement("li")
    listItem.textContent = logtime + " - " + count + " people."
    document.getElementById("logs").appendChild(listItem)
}


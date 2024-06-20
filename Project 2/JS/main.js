let join = document.querySelector('#participate')
let team1 = document.querySelector('#playersTeam1')

function participate() {
    join.textContent = "Done"
    let choose = prompt("Choose Team Number")
    console.log("Your Team is " + choose)
    let name = prompt("Write Your Name (13 Char. Max")
    console.log("Your Name is " + name)
}

if (choose = 1) {
    team1.textContent = name
}
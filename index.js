
let bal = 0;
fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => add(jsondata));

let data = {}

const add = (jsondata) => {
    let count = 0;
    data = {
        ...jsondata
    }
    load();
    while (count < 7) {
        bal = bal + data[count].amount;
        count++;
    }
    let largest = data[0].amount;
    let id;
    count = 0;
    while (count < 7) {
        if (data[count].amount > largest) {
            largest = data[count].amount;
            id = count;
        }
        count++;
    }
    let max = `day${id + 1}`;
    let max_exp = document.getElementById(max);
    max_exp.style.backgroundColor = 'hsl(186, 34%, 60%)'
    let expense = document.getElementById('expense');
    expense.innerHTML = `$${bal}`;
    let day1 = document.getElementById('day1');
    day1.style.height = `${data[0].amount}%`;
    let day2 = document.getElementById('day2');
    day2.style.height = `${data[1].amount}%`;
    let day3 = document.getElementById('day3');
    day3.style.height = `${data[2].amount}%`;
    let day4 = document.getElementById('day4');
    day4.style.height = `${data[3].amount}%`;
    let day5 = document.getElementById('day5');
    day5.style.height = `${data[4].amount}%`;
    let day6 = document.getElementById('day6');
    day6.style.height = `${data[5].amount}%`;
    let day7 = document.getElementById('day7');
    day7.style.height = `${data[6].amount}%`;
}

function show(id) {
    let max = `per${id + 1}`;
    let hover = document.getElementById(max);
    hover.innerHTML = `$${data[id].amount}`;
    hover.style.display = 'block'
}

function hide(id) {
    let max = `per${id + 1}`;
    let hover = document.getElementById(max);
    hover.style.display = 'none'
}

function load() {
    let c = 0;

    while (c < 7) {
        let d = document.getElementById(`d${c + 1}`);
        d.innerHTML = data[c].day;
        console.log(data[c].day);
        c++;
    }
}
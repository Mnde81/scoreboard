const buttonsDOM = document.querySelectorAll('button');
const plus1aDOM = buttonsDOM[1];
const plus2aDOM = buttonsDOM[2];
const plus3aDOM = buttonsDOM[3];
const plus1bDOM = buttonsDOM[4];
const plus2bDOM = buttonsDOM[5];
const plus3bDOM = buttonsDOM[6];
const clearDOM = buttonsDOM[0];
const deleteLastDOM = buttonsDOM[7];

const resultaDOM = document.querySelector('.first > div');
const resultbDOM = document.querySelector('.second > div');
const scoresDOM = document.querySelector('.scores');


const teamADOM = document.querySelector('.aTeam');
const teamBDOM = document.querySelector('.bTeam');

let totalA = 0;
let totalB = 0;
let HTML = '';
let count = 0;

const localData = localStorage.getItem('scores');

let scoreData = [];

if (localData !== null) {
    scoreData = JSON.parse(localData);
    renderTaskList();
}



function plusOneA() {
    totalA++;
    count++;
    // resultaDOM.textContent = totalA;
    // HTML = `<p># ${count}: <span>A</span> Team scores <span>1</span> point</p> ${HTML}`
    // scoresDOM.innerHTML = HTML;

    scoreData.push({ 
        number: count,      
        createdAt: Date.now(),
        team: teamADOM.innerHTML,
        score: plus1aDOM.innerText,
        totalA: totalA,
        totalB: totalB,
    });
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();

    

}
function plusTwoA() {
    totalA += 2;
    count++;
    // resultaDOM.textContent = totalA;
    // HTML = `<p># ${count}: <span>A</span> Team scores <span>2</span> points</p> ${HTML}`
    // scoresDOM.innerHTML = HTML;

    scoreData.push({ 
        number: count,      
        createdAt: Date.now(),
        team: teamADOM.innerHTML,
        score: plus2aDOM.innerText,
        totalA: totalA,
        totalB: totalB,
    });
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();

    
}
function plusThreeA() {
    totalA += 3;
    count++;
    // resultaDOM.textContent = totalA;
    // HTML = `<p># ${count}: <span>A</span> Team scores <span>3</span> points</p> ${HTML}`
    // scoresDOM.innerHTML = HTML;

    scoreData.push({
        number: count,        
        createdAt: Date.now(),
        team: teamADOM.innerHTML,
        score: plus3aDOM.innerText,
        totalA: totalA,
        totalB: totalB,
    });
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();
    
}

plus1aDOM.addEventListener('click', plusOneA);
plus2aDOM.addEventListener('click', plusTwoA);
plus3aDOM.addEventListener('click', plusThreeA);


function plusOneB() {
    totalB++;
    count++;
    // resultbDOM.textContent = totalB;
    // HTML = `<p># ${count}: <span>B</span> Team scores <span>1</span> point</p> ${HTML}`
    // scoresDOM.innerHTML = HTML;

    scoreData.push({ 
        number: count,      
        createdAt: Date.now(),
        team: teamBDOM.innerHTML,
        score: plus1bDOM.innerText,
        totalA: totalA,
        totalB: totalB,
    });
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();
}
function plusTwoB() {
    totalB += 2;
    count++;
    // resultbDOM.textContent = totalB;
    // HTML = `<p># ${count}: <span>B</span> Team scores <span>2</span> points</p> ${HTML}`
    // scoresDOM.innerHTML = HTML;

    scoreData.push({ 
        number: count,      
        createdAt: Date.now(),
        team: teamBDOM.innerHTML,
        score: plus2bDOM.innerText,
        totalA: totalA,
        totalB: totalB,
    });
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();
}
function plusThreeB() {
    totalB += 3;
    count++;
    // resultbDOM.textContent = totalB;
    // HTML = `<p># ${count}: <span>B</span> Team scores <span>3</span> points</p> ${HTML}`
    // scoresDOM.innerHTML = HTML;

    scoreData.push({ 
        number: count,      
        createdAt: Date.now(),
        team: teamBDOM.innerHTML,
        score: plus3bDOM.innerText,
        totalA: totalA,
        totalB: totalB,
    });
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();
}

plus1bDOM.addEventListener('click', plusOneB);
plus2bDOM.addEventListener('click', plusTwoB);
plus3bDOM.addEventListener('click', plusThreeB);





function renderTaskList() {
    let HTML = '';

    for (const score of scoreData) {
        HTML = `<p># ${score.number}: ${formatTime(score.createdAt)} <span>${score.team}</span> scores <span>${score.score}</span> point</p> ${HTML}`;
        resultaDOM.textContent = score.totalA;
        resultbDOM.textContent = score.totalB;
        totalA = score.totalA;
        totalB = score.totalB;
        count = score.number;
        
    }   
    
    scoresDOM.innerHTML = HTML;
}


function formatTime(timeInMs) {
    const date = new Date(timeInMs);
    const y = date.getFullYear();
    const m = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    const d = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const h = date.getHours();
    const mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${y}-${m}-${d} ${h}:${mn}:${s}`;
}


clearDOM.addEventListener('click', () => {
    localStorage.clear('scores');
    totalA = 0;
    totalB = 0;
    count = 0;
    scoreData = [];
    resultaDOM.textContent = 0;
    resultbDOM.textContent = 0;
    renderTaskList();    
});

deleteLastDOM.addEventListener('click', () => {
    scoreData.pop();
    localStorage.setItem('scores', JSON.stringify(scoreData));
    renderTaskList();    
});





let nameData1 = [];

const textInputADOM = document.querySelector('.inputA');
const teamANameDOM = document.querySelector('.aTeam')

textInputADOM.addEventListener('click', e => {
    e.preventDefault();
    teamANameDOM.innerHTML = textInputADOM.value;
    nameData1.push(textInputADOM.value);
    localStorage.setItem('names1', JSON.stringify(nameData1));
    nameData1.shift();
    
})

const names1Data = localStorage.getItem('names1');
if (names1Data !== null) {
    teamANameDOM.innerHTML = JSON.parse(names1Data);
    renderTaskList();
}


let nameData2 = [];

const textInputBDOM = document.querySelector('.inputB');
const teamBNameDOM = document.querySelector('.bTeam')

textInputBDOM.addEventListener('click', e => {
    e.preventDefault();
    teamBNameDOM.innerHTML = textInputBDOM.value;
    nameData2.push(textInputBDOM.value);
    localStorage.setItem('names2', JSON.stringify(nameData2));
    nameData2.shift();
    
})

const names2Data = localStorage.getItem('names2');
if (names2Data !== null) {
    teamBNameDOM.innerHTML = JSON.parse(names2Data);
    renderTaskList();
}
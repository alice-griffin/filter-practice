let people = [
    { name: 'jacob', age: 29, level: 100 },
    { name: 'james', age: 29, level: 80 },
    { name: 'jon', age: 30, level: 70 },
    { name: 'marie', age: 26, level: 55 },
    { name: 'michelle', age: 58, level: 67 },
    { name: 'david', age: 60, level: 35 },
    { name: 'alyssa', age: 29, level: 20 },
];

//filter into a new array if age is over 40
function filterFunction(array) {
    let over40 = array.filter(x => x.age >= 40);
    return over40;
}

//filter into a new array if names start with J
function filterLetter(array) {
    let startWithJ = array.filter(x => x.name.startsWith('j'));
    return startWithJ;
}

//filter into a new array if scores are between 30 and 90
function filterLevels(array) {
    let between30And90 = array.filter(x => x.level >= 30 && x.level <= 90);
    return between30And90;
}

console.log(filterFunction(people));
console.log(filterLetter(people));
console.log(filterLevels(people));
function solution(strings, n) {
let temp = {};
for (string of strings) {
    let char = string[n];
    let t = (char in temp) ? temp[char] : [];

    t.push(string);
    t.sort();

    temp[char] = t;
    }

    let result = [];
    let sortKeys = Object.keys(temp).sort();
    for (key of sortKeys){
        result = result.concat(temp[key]);
    }
    return result;
}
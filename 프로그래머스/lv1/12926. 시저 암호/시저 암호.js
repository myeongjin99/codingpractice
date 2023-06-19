function solution(s, n) {
    let result = "";

    const uppers = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    const lowers = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

    for(let i=0; i<s.length; i++) {
        let element = s[i];
        if(element === " ") {
            result += " "
            continue;
    }

    let arr = element.toUpperCase() === element ? uppers : lowers;
    let index = arr.indexOf(element);
    index += n;
    if(index >= arr.length) {
        index = index - arr.length;
     }
        result += arr[index];
     }

    return result;
}
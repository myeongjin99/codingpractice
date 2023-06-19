function solution(s) {
    let upperCases = []; // 대문자
    let lowerCases = []; // 소문자

    for (let i=0; i<s.length; i++) {
        let char = s[i];
        if (char.toLowerCase() === char) { // 소문자
            lowerCases.push(char);
        } else { // 대문자
            upperCases.push(char);
        }
    }

    lowerCases.sort().reverse();
    upperCases.sort().reverse();

    return lowerCases.join("") + upperCases.join("");
}
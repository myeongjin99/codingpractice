function gcd(min, max){
    let result = min % max;
    return (result === 0) ? max : gcd(max, result); // result의 값이 0이 될 때까지
}

function lcm(min, max){
    console.log(min * max);
    return min * max / gcd(min, max);
}

function solution(n, m) {

    let min = Math.min(n, m); // 3
    let max = Math.max(n, m); // 12

    let result = [];
    result[0] = gcd(min, max); // 최대 공약수
    result[1] = lcm(min, max); // 최소 공배수

    return result;
}
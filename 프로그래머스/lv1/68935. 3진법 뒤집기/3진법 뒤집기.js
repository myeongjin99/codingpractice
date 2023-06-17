function solution(n){
    let answer = 0;
    
    // 1.n을 문자열로 바꾸고 3진법으로 바꾸기
    let a = n.toString(3)
    // 2.배열로 바꾸고 3진법을 뒤집기
    let arr = [...a];
    let b = arr.reverse();
    let str = b.join("");
    // 3.3진법을 10진법으로 표현
    answer = parseInt(str,3)
    
    return answer
}
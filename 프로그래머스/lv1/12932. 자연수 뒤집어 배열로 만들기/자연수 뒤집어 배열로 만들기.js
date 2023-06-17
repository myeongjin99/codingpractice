function solution(n) {
    //배열로 변환
    //숫자 거꾸로 하는 함수 쓰기
    
    let answer = [];
    let m = String(n).split('').reverse()
    for(let i=0; i<m.length;i++){
        answer.push(parseInt(m[i]))
    }
    
    return answer;
}
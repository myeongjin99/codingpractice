function solution(a, b) {
    var answer = 0;
    //a의 인덱스
    //b의 인덱스
    //곱하고 더함    
    for(let i=0;i<a.length;i++){
        answer += a[i]*b[i]
    }
    return answer;
}
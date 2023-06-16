function solution(x, n) {
    var answer = [];
    //x의 값에 n개만큼 x의배수가 된다.
    // for(let i=1;i<=n;i++){
    //     answer[i-1] = x*i
    // }

        for(let i=1;i<=n;i++){
            
            answer.push(x*i)
    }
        return answer;
}

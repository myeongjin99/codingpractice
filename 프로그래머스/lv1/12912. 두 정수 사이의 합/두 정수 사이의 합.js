function solution(a, b) {
    var answer = 0;
    if(a<=b){
        for(let i=a;i<=b;i++){
            answer+=i
        }
    }else{
        for(let i=b;i<=a;i++){
            answer+=i
        }
    }
        return answer;
}

//let max = a > b ? a:b;
//let min = a > b ? b:a;

// for(let i=min; i<=max;i++){
//     answer+=i;
// }
// return answer;
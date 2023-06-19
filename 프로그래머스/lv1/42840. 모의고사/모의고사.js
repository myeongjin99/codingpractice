function solution(answers) {
    //1번,2번,3번 수포자 찍는방식
    let answer = [0,0,0];
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    
    for(let i=0; i< answers.length;i++){
        if(first[i%5]===answers[i]){
             answer[0]++;
        }
        if(second[i%8]===answers[i]){
            answer[1]++;
        }
        if(third[i%10]===answers[i]){
            answer[2]++;
        }
    }
    let result = [];
    let index = 0;
    let maxPerson = Math.max(...answer);
    for(let i=0;i<answer.length;i++){
        if(answer[i]===maxPerson){
            result[index] = i+1;
            index++;
        } 
    }
    return result;//가장 많이 맞힌사람(오름차순)
}
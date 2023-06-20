//약수의 갯수
function findDiv(num) {
    let count = 0;
    for(let i=1; i<=num; i++){
        if(num % i === 0) {
            count++;
        }
    }
    return count;
}


function solution(start, end) {
    let result = 0;
    let numbers = Array.from({length: end-start + 1}, (_, i) => i + start);

    
    for(let i=0; i<numbers.length; i++) {
        let cnt = findDiv(numbers[i])
        if(cnt % 2 === 0) {
            result += numbers[i]
        } else {
            result -= numbers[i]
        }   
    }
    return result;
}
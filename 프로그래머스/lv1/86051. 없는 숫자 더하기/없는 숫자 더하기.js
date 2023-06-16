function solution(numbers) {
    //배열내에서 없는걸 찾는법 => 배열순회
    //총합 => 빼면 그수
    
    var answer = 45;
    
    numbers.forEach((item)=>{
        answer-=item;
    })
    return answer;
}
function solution(n) {
    let answer = 118372;
    //1. 배열로 만들어주고 오름차순 정렬 후 뒤집지
    let arr = Array.from(n.toString()).sort().reverse();
    //2. 배열 정리
    answer = Number(arr.join(''))
    //3. return
    return answer;
}
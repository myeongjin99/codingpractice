function solution(nums) {
    let temp = [...new Set(nums)];
    let templen = temp.length; // 포켓몬 종류
    let len = nums.length / 2;
    return templen > len ? len : templen;
}

// function solution(nums) {
//     // N/2 마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾기
//     // 그때의 폰켓몬 종류 번호의 개수를 return
//     let result = 0;
//     let count = num.length / 2 // N/2마리의 폰켓몬을 선택하는 것을 변수로 선언
    
//     //중복 제거 - indexOf()
//     let noDuplicated = 
    
    
//     return result;
// }
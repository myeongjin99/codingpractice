function solution(arr) {
    //배열안의 값들의 총합
    //총합을 길이만큼 나눔 = 평균
    var answer = 0;
    let total = 0;
    // for(let i=0;i<arr.length;i++){
    //     sum+= arr[i]
    // }
    //  answer =sum / arr.length
    // return answer;
    total = arr.reduce((acc,curr) => acc+curr)
    answer = total/arr.length;
    return answer
}
function solution(arr1, arr2) {
    let answer = [];
    
    // for(let i=0;i<arr1.length;i++){
    //     answer.push([])
    //     for(let j=0;j<arr2[0].length;j++){
    //         answer[i][j] = arr1[i][j]+arr2[i][j]
    //   }    
    // }
    // return answer;
    
    return arr1.map((arr1,idx1) => arr1.map((val,idx2) => val+arr2[idx1][idx2]));
};
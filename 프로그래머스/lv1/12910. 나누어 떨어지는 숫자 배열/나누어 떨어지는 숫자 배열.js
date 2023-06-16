function solution(arr, divisor) {
    let resultArr = arr.filter( number => number%divisor === 0)
    if(resultArr==false){ 
        //나누어떨어지는값들반환
        return [-1]
    }else{
        return resultArr.sort((a,b)=>a-b) 
    }
    return resultArr;
}
function solution(n) {
    //2진법(0,1)
    //2진법(0,1,2)
    //3진법(0,1,2)
    //parseInt("문자열",진법) //진법 표기를 10진법으로 보여준다.
    
    // n (10진법상 정수) => 3진법 바꿔야돼요 => 3진법을 뒤집고 => 3진법을 10진법으로 보여준다
    let answer = 0;
    let b = n.toString(3);
    
    let arr = [...b];
    arr.reverse();
    
    let str = arr.join("")
    
    answer = parseInt(str,3)
    return answer;
}
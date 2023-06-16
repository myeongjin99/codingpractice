function solution(price, money, count) {
    var answer = 0;
    var total_price=0;
    //price만큼 count번 증가한 총합을 구한다.
    for(let i=1; i<= count; i++){
        total_price += price*i
    }
    answer = total_price - money
    if(answer<=0){
        return 0
    }
    return answer;
}
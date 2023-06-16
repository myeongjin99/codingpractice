function solution(price, money, count) {
    var answer = 0;
    var total_price=0;
    //price만큼 count번 증가한 총합을 구한다.
    for(let i=0; i<= count; i++){
        total_price += price*i
    }
    answer = total_price - money
    if(answer<=0){
        return 0
    }
    //총합 - 내가가진 돈
    return answer;
}
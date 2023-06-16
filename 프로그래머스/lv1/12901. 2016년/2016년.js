function solution(a, b) {
    //2016년
    //1월1일 == 금
    //1월 1일부터 몇번째날인지
    //70%7 ===0 금
    //[1월:31][2월:29][3월:31][4월:30][5월:31]
    //[6월:30][7월:31][8월:31][9월 30] [10월 31] [11월 30] [12월 31]
    const month_day = [31,29,31,30,31,30,31,31,30,31,30,31];
    const week_name = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let answer = '';
    let date =0;
    //0이면 목요일
     //요일계산 
    
    if(a===1){
        date += b;
    }else{
        for(let i=0;i<a-1;i++){ //이전달의 날의 합 더래준다
            date += month_day[i];
        }
        date += b;
    }
    answer = week_name[date % 7];
    
    return answer;
}
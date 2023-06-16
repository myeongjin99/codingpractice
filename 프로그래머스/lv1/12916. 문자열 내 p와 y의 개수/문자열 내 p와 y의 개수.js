function solution(s){
    var answer;
    //p,y의 갯수가 없거나 같으면 true
    //다르면 false
    let split = s.split("");
    let pValue = [];
    let yValue = [];
    
    pValue= split.filter((item) => 'P' === item || 'p' === item).length
    yValue = split.filter((item) => 'Y' === item || 'y' === item).length
    
    if(pValue === yValue){
       return true      
       }else{
        return false
    }
    return answer;
}
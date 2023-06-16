function solution(s) {
    //숫자로만 구성인지 확인
    //e지수 때문에
    
    if(!isNaN(s)&&(s.length==4 || s.length==6) && s.includes('e') == false){
        return true;
    }else{
        return false;
    }
}
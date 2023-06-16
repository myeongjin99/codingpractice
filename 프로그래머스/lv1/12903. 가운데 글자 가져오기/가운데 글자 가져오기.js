function solution(s) {
    var answer = '';
    if(s.length%2!==0){
        let middle=s.length/2;
        answer = s.slice(middle,middle+1);
    }else{
        let middle=s.length/2 -1;
        answer = s.slice(middle,middle+2);
    }
    // let middle = s.length/2
    // answer = middle!==0 ? 's.slice(middle, middle+1)':'s.slice(middle,middle+2)';
    return answer;
}
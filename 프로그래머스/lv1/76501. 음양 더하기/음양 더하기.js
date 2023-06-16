function solution(absolutes, signs) {
    //absolutes 배열과 signs 배열의 인덱스를 매칭해준다.
    //false는 -로 붙여준다.
    //그리고 합한다.
    var answer = 0;
    for(let i=0; i<absolutes.length;i++){
        if(signs[i]==true){
             answer += absolutes[i]
        }else{
            answer -= absolutes[i]
        }
    }

    //합한다.
    return answer;
}
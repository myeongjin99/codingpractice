function solution(new_id) {
    let result = '';
    // 1단계 대문자 'B'와 'T'가 소문자 'b'와 't'로 바뀌었습니다.
    result = new_id.toLowerCase()
    console.log(result)
    
    // 2단계 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    result = result.replace(/[^a-z0-9\-_.]/g,'');
    console.log(result)
    
    // 3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    result = result.replace(/\.{2,}/g,'.');
    console.log(result)
    
    // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    result = result.replace(/^\.|\.$/g,'');
    console.log(result)
    
    // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    result = result.length == 0 ? 'a' : result
    console.log(result)
    
    // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    //변수.substring(시작 인덱스, 종료 인덱스) => 인덱스 범위에 해당하는것을 뽑아온다.
    if(result.length >= 16) {
        result = result.substring(0,15).replace(/\.$/g,'');
        console.log(result)
    }
    
    // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    let len = result.length
    if(len < 3) {
        result += result[len - 1].repeat(3 -len)
            //repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다. -매개변수, 리턴값을 중요
    }
    return result
    
}
function solution(participant, completion) {
    //conpletion, participant 배열 비교
    //완주못한사람 추출  
    // let difference = participant.filter(x => !completion.includes(x))
    // return difference.join("");  
    participant.sort();
    completion.sort();
    for(let i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }

    
    
    
    
    
    // for(let i=0;i<participant.length;i++){
    //     if(participant.has(completion[i])){
    //         answer = participant.delete(completion)
    //     }    
    //     return answer
    // }
}
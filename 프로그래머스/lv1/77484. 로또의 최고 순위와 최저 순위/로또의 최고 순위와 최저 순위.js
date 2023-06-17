function solution(lottos, win_nums) {
    var answer = [];
    let zero_count = 0; // 0 개수
    let win_count = 0; // 맞은 개수
    let len = lottos.length;
    // [44, 1, 0, 0, 31, 25] : 구매한 로또
    // [31, 10, 45, 1, 6, 19] : 당첨 로또
    for(let i = 0; i < len; i++) {
        if(win_nums.includes(lottos[i])) {
            win_count++;
            }
        if(lottos[i] == 0) {
            zero_count++;
            }
        }
    console.log(win_count); // 2
    console.log(zero_count); // 2
    let sum = win_count + zero_count;
    // 최고 순위
    switch(sum) { // sum = 현재 맞춘 개수 + 맞출 가능성 있는 개수(맞았다고 가정)
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }
    // 최저 순위
    switch(win_count) { // 현재 맞춘 개수 (이것 말고 맞는 거 없음)
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
        }
    return answer;
}
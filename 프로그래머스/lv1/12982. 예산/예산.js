function solution(d, budget) {
    d.sort((a, b) => a - b); // 작은 수부터 정렬

    let sum = 0;
    let cnt = 0;
    for (let i=0; i<d.length; i++) {
        cnt++;
        sum += d[i];
        if (sum > budget) cnt--;
    }
    return cnt
}

// let count = 0;
// for (let i=0; i<d.length; i++) {
// budget -= d[i];
// if (budget >= 0) count++;
// if (budget < 0) break;
// }

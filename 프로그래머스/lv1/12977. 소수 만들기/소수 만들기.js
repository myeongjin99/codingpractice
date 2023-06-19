function isPrime(num) {
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}

function solution(nums) {
    let answer = 0;

    let numslen = nums.length;
    for (let i=0; i<numslen-2; i++) {
        for (let j=i+1; j<numslen-1; j++){
            for (let k=j+1; k<numslen; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
        }
        }
    }
    return answer;
}
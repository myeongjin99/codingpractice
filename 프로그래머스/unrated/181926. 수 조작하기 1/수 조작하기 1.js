function solution(n, control) {
    for(let i in control){
        if(control[i] === "w") ++n 
        if(control[i] === "s") --n
        if(control[i] === "d") n += 10
        if(control[i] === "a") n -= 10
    }
    return n
}
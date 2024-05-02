function solution(numbers) {
    let arr = numbers.sort((a,b) => a-b)
    let answer = 0;
    for(let i  = 0; i < 10; i++){
        arr.indexOf(i) === -1 ? answer += i : null;
    }
    return answer;
}
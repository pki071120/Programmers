function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        n%i==0 ? answer+=i : null;
    }
    return answer;
}
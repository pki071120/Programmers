function solution(n_str) {
    var answer = n_str;
    for(let i = 0; i < answer.length; i++){
        if(answer[i]!="0") {
            answer = answer.slice(i, answer.length);
            break;
        }
    }
    return answer;
}
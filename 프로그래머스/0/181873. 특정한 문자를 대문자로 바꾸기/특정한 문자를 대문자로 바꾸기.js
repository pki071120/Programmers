function solution(my_string, alp) {
    let answer = my_string.split("");
    for(let i = 0; i < answer.length; i++){
        answer[i] == alp ? answer[i] = answer[i].toUpperCase() : null;
    }
    return answer.join("");
}
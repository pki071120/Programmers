function solution(q, r, code) {
    var answer = [];
    code.split("").map((item, idx) => {
       idx % q === r ? answer.push(item) : null;
    });
    return answer.join("");
}
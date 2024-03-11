function solution(binomial) {
    var answer = binomial.split(" ");
    if(answer[1]=="+") return parseInt(answer[0])+parseInt(answer[2]);
    else if(answer[1]=="-") return parseInt(answer[0])-parseInt(answer[2]);
    else if(answer[1]=="*") return parseInt(answer[0])*parseInt(answer[2]);
}
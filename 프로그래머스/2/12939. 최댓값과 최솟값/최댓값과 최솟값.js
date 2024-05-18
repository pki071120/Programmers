function solution(s) {
    var arr = s.split(" ").map(item => {return Number(item)});
    let answer = [Math.min(...arr), Math.max(...arr)]
    return answer.toString().replace(","," ");
}
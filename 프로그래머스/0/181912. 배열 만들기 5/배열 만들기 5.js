function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0 ; i< intStrs.length;i++){
        let n1 = intStrs[i].split('').map(item => parseInt(item))
        let n2 = n1.slice(s, s+l).join('');
        if(n2>k) answer.push(parseInt(n2));
    }
    return answer;
}
function solution(emergency) {
    var answer = [];
    let sortarr = [...emergency].sort((a,b) => b-a);
    for(let i = 0; i < emergency.length; i++) {
        for(let j = 0; j < emergency.length; j++) {
            sortarr[j] === emergency[i] ? answer.push(j+1) : 'none';
        }
    }
    
    return answer;
}
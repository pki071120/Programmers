function solution(names) {
    let answer = [];
    answer.push(names[0]);
    names.map(function(item, index, array) {
        if((index)%5==0 && index!=0){
            answer.push(item);
        }
    })
    return answer;
}
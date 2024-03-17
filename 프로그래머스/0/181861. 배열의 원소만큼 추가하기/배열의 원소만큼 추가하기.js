function solution(arr) {
    var answer = [];
    arr.map(item => {
        for(let i = 0;i < item; i++){
            answer.push(item);
        }
    })
    return answer;
}
function solution(todo_list, finished) {
    var answer = [];
    let count =0 ;
    for(let i = 0; i<finished.length;i++){
        finished[i] ? count++ : answer.push(todo_list[i]);
    }
    return answer;
}
function solution(arr, query) {
    var answer = arr;
    query.map((item, index) => {
       index % 2 !== 0 ? answer.splice(0,item) : answer.splice(item+1,)
    })
    return answer;
}
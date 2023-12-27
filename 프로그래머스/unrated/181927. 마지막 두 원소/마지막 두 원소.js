function solution(num_list) {
    var answer = num_list;
    const Item1 = answer[answer.length-1]
    const Item2 = answer[answer.length-2]
    Item1>Item2 ? answer.push(Item1-Item2) : answer.push(Item1*2)
    return answer;
}
function solution(order) {
    var answer = 0
    let arr = order.toString().split("")
    arr.map(item => {
        item === "3" || item === "6" || item ==="9" ? answer++ : null
    })
    return answer;
}
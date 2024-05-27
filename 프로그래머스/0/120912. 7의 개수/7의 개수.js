function solution(array) {
    let arr = array.toString().split("").filter(item => item === '7')
    return arr.length;
}
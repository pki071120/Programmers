function solution(a, b) {
    let A = String(a) 
    let B = String(b)
    let answer = parseInt(A+B)>parseInt(B+A) ? parseInt(A+B) : parseInt(B+A);
    return answer;
}
function solution(myString, pat) {
    let answer = myString.toLowerCase().includes(pat.toLowerCase());
    return answer == true ? 1 : 0;
}
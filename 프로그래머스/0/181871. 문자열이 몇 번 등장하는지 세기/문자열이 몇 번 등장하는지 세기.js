function solution(myString, pat) {
    var answer = 0;
    let clone = myString;
    let ms = myString.split("");
    ms.map((item, index) => {
        let arr = clone.slice(index, index+pat.length)
        arr.includes(pat) ? answer++ : null; 
    })
     return answer;
}
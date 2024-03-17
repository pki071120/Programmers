function solution(str1, str2) {
    // var answer = [];
    // let arr1 = str1.split("");
    // arr1.map(( item, index ) => {
    //     answer.push(arr1[index]);
    //     answer.push(str2[index]);
    // })
    let answer = "";
    for(let i = 0; i< str1.length; i++){
        answer += str1[i]+str2[i];
    }
    return answer;
}
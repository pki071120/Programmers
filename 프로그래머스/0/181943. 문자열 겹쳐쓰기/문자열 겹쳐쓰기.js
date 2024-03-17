function solution(my_string, overwrite_string, s) {
    let arr1 = my_string.split("");
    let arr2 = overwrite_string.split("");
    let index = 0;
    
    for(let i = s; i < s + overwrite_string.length; i++){
        arr1[i] = arr2[index++];
    }
    
    return arr1.join("");
}
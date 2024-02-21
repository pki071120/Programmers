function solution(num_list) {
    num_list.sort(function(a, b){
       return b - a;
    })
    for(let i = 0; i<5; i++){
        num_list.pop();
    }
    num_list.sort(function(a, b){
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    })
    let numList = num_list;
    return numList;
}
function solution(array) {
    var answer = [];
    let max=0;
    let idx=0;
    array.map((item, ix) => {
        if(max < item){
            max = item;
            idx = ix;
        }
    })
    return [max, idx];
}
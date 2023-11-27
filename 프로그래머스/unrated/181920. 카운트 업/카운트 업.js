function solution(start_num, end_num) {
    let arr=[];
    let count=0;
    for(let i=start_num;i<=end_num;i++){
        arr[count]=i;
        count++;
    }
    return arr
}
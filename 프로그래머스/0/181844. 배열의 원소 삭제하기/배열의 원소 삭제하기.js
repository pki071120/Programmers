function solution(arr, delete_list) {
    delete_list.map(del => arr = arr.filter(item => item != del));
    return arr;
}
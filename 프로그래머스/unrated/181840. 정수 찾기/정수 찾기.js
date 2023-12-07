function solution(num_list, n) {
    // 배열에 n이 포함되어 있는지 여부에 따라 1 또는 0을 반환
    return num_list.includes(n) ? 1 : 0;
}
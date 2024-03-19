function solution(date1, date2) {
    for (let i = 0; i < 3; i++) {
        if (date1[i] !== date2[i]) {
            return date1[i] < date2[i] ? 1 : 0;
        }
    }
    return 0;
}
function solution(strArr) {
    const con = /ad/;
    return strArr.filter(item => !con.test(item));
}

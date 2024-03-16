function solution(a, b) {
    return Number(String(a)+String(b)) >= a*b*2 ? Number(String(a)+String(b)) : 2*a*b;
}
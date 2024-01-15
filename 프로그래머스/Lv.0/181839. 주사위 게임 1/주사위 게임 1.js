function solution(a, b) {
    return a%2!=0 && b%2!=0 ? a*a+b*b : a%2==0 && b%2!=0 || a%2!=0 && b%2==0 ? (a+b) * 2 : a%2==0 && b%2==0 ? a>b ? a-b : b-a : 0;
}
function solution(l, r) {
  const result = [];
  const condition = /^[05]+$/;
  for (let i = l; i <= r; i++) {
    if (condition.test(i)) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}
const myMemo = (func) => {
  const cache = {};
  return (val) => {
    return cache[val] || (cache[val] = func(val));
  };
};

const fibo = myMemo((n) => {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
});

console.time();
const ans = fibo(4500);
console.log(`🚀 ~ ans:`, ans);
console.timeEnd();

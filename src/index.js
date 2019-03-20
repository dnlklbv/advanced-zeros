module.exports = function getZerosCount(number, base) {
  function factorizer(x) {
    const arr = [];
    if (x > 0 && x !== 1) {
      for (let i = 2; i <= x; i += 1) {
        while (x % i === 0 && x > 1) {
          arr.push(i);
          x /= i;
        }
        if (x / i === 1) {
          arr.push(x);
        }
      }
      return arr;
    } if (x === 1) {
      return 1;
    }
    return NaN;
  }

  function sum(n, p) {
    const k = Math.floor(Math.log(n) / Math.log(p));
    let res = 0;
    let divider = p;
    for (let i = 1; i <= k; i += 1) {
      res += Math.floor(n / divider);
      divider *= p;
    }
    return res;
  }

  const primeNums = factorizer(base);
  const uniquePrimeNums = [];
  const uniqueRepeatings = {};

  for (let i = 0; i < primeNums.length; i += 1) {
    if (!uniquePrimeNums.includes(primeNums[i])) {
      uniquePrimeNums.push(primeNums[i]);
      uniqueRepeatings[primeNums[i]] = 1;
    } else { uniqueRepeatings[primeNums[i]] += 1; }
  }

  let min = Infinity;
  for (let i = 0; i < uniquePrimeNums.length; i += 1) {
    min = Math.min(min, sum(number, uniquePrimeNums[i]) / uniqueRepeatings[uniquePrimeNums[i]]);
  }

  return Math.floor(min);
};

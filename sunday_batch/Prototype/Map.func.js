let arr = [2, 5, 6, 8, 10];

// higher order function

// let ans1 = arr.map((element, index, array) => {
//   console.log(`🚀 ~ element:`, element);
// });
// console.log(`🚀 ~ ans1:`, ans1);

Array.prototype.apnaMap = function (callBack) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let val = callBack(this[i], i, this);
    // console.log(`🚀 ~ val:`, val);
    newArr.push(val);
  }
  return newArr;
};

let ans = arr.apnaMap((el, i, arrs) => {
  console.log(`🚀 ~ el:`, el);
  //   return el * 2;
});
console.log(`🚀 ~ ans:`, ans);

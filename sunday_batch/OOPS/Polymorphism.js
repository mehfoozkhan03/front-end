/* 
Poly -> many
*/

// let name1 = 'mehfooz',
//   name2 = 'khan';

// let name3 = 'punit',
//   name4 = 'singh';

// const Name = (first, last) => {
//   return first + ' ' + last;
// };

// const ans = Name(name1, name2);
// const ans1 = Name(name3, name4);
// console.log(`🚀 ~ ans1:`, ans1);
// console.log(`🚀 ~ ans:`, ans);

/* === class base component's === */

/* class Vehical {
  constructor(name) {
    this.name = name;
    this.run = function () {
      return `${this.name} is running`;
    };
  }
}

class Truk extends Vehical {
  constructor(brand) {
    super(brand);
  }
}

class Car extends Vehical {
  constructor(brand) {
    super(brand);
  }
}

const data_1 = new Vehical('naino');
console.log(`🚀 ~ data_1:`, data_1.run());

const data_2 = new Truk('layland');
console.log(`🚀 ~ data_2:`, data_2.run());

const data_3 = new Car('BMW');
console.log(`🚀 ~ data_3:`, data_3.run()); */

const printPDF = {
  print: () => {
    console.log('Printing PDF');
  },
};

const printTEXT = {
  print: () => {
    console.log('Printing TEXT');
  },
};

const printTag = {
  print: () => {
    console.log('Printing Tag');
  },
};

function output(value) {
  value.print();
}

output(printPDF);
output(printTEXT);
output(printTag);

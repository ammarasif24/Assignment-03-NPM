//  Two sum

// using bruteForce method

let num = [0, 1, 1, 2, 3, 4, 5];
let index = [];
let target = 3;

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] + num[j] === target) {
      index.push([j, i]);
    }
  }
}

if (index.length === 0) {
  console.log("no sol");
} else {
  console.log(index);
}

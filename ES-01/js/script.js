const array = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

array.forEach((num) => {
  console.log(`Numero: ${num}`);
  sum = sum + num;
  console.log(sum);
});

finalResult = sum / 2;

console.log(`finalResult: ${finalResult}`);

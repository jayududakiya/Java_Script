{

function PerfectNum(num) {
  let total = 0;
  for (let i = 1; i < num; i++) {
      if (num % i == 0) {
          total = total + i;
          console.log(i);
    }
  }
  if (total === num) {
    return console.log("this is number is perfect", num);
  } else {
    return console.log("this is number is NOT perfect", num);
  }
}
PerfectNum(28);
}
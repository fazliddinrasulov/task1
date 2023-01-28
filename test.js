// ------------------- TASK 1-------------------

const sortString = (str) => {
  if (str === "") return "";
  let arr = str.split(" ");
  arr.sort((a, b) => {
    let aNum = parseInt(a.replace(/[^0-9]/g, ""));
    let bNum = parseInt(b.replace(/[^0-9]/g, ""));

    return aNum - bNum;
  });
  return arr.join(" ");
};

//  ----------------- TASK 2--------------------
const queueTime = (customers, n) => {
  let tills = Array(n).fill(0);
  customers.forEach((customer) => {
    let min = Math.min(...tills);
    let minIndex = tills.indexOf(min);
    tills[minIndex] += customer;
  });
  return Math.max(...tills);
};

queueTime(
  [34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47],
  4
);

//  ----------------- TASK 3--------------------
const biggerNum = (num) => {
  let numString = num.toString();
  let numArray = numString.split("");
  let numSort = parseInt(numArray.sort().reverse().join(""));

  if (numSort === num) {
    return -1;
  }
  return numSort;
};

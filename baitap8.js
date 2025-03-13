function prime(num) {
    if (Number.isInteger(num) && num > 0) {
      let i = 2;
      let check = true;
      if (num !== 1) {
        while (i < num) {
          if (num % i === 0) {
            check = false;
            break;
          }
          i++;
        }
      } else {
        check = false;
      }
      if (check) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  let n = +prompt("Mời nhập số lượng phần tử");
  if (Number.isInteger(n) && n >= 0) {
    let arr = [];
    let i = 0;
    while (i < n) {
      arr[i] = +prompt("Mời nhập số thứ " + (i + 1));
      if (Number.isNaN(arr[i])) {
        alert("Giá trị không hợp lệ");
      } else {
        i++;
      }
    }
    alert(arr.filter((value) => prime(value)).filter((value) => value % 2 === 1));
  } else {
    alert("Giá trị không hợp lệ");
  }
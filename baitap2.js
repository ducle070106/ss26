function length5(arr) {
    if (arr.length === 0) {
      alert("Mảng không có phần tử nào");
    } else {
      alert(arr.filter((value) => value.length > 5));
    }
  }
  let n = +prompt("Mời nhập số lượng phần tử");
  if (Number.isInteger(n) && n >= 0) {
    let arr = [];
    let i = 0;
    while (i < n) {
      arr[i] = prompt("Mời nhập chuỗi thứ " + (i + 1));
      i++;
    }
    length5(arr);
  } else {
    alert("Giá trị không hợp lệ");
  }
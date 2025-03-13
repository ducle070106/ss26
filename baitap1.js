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
  if (arr.length === 0) {
    alert("Mảng không có phần tử nào");
  } else if (arr.every((value) => !Number.isNaN(value))) {
    alert(arr.filter((value) => value >= 10));
  } else {
    alert("Dữ liệu không hợp lệ");
  }
} else {
  alert("Giá trị không hợp lệ");
}
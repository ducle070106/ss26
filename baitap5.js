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
  } else {
    alert(
      "max = " +
        Math.max(...arr) +
        "\nposition: " +
        arr.indexOf(Math.max(...arr))
    );
  }
} else {
  alert("Giá trị không hợp lệ");
}
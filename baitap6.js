function formDDMMYYYY(arr) {
    if (arr.length === 0) {
      return "Mảng không có phần tử nào";
    } else {
      return arr
        .map((value) =>
          value
            .split(/[-/ ,]/)
            .reverse()
            .join("/")
        )
        .join("\n");
    }
  }
  let n = +prompt("Mời nhập số lượng phần tử");
  if (Number.isInteger(n) && n >= 0) {
    let arr = [];
    let i = 0;
    while (i < n) {
      arr[i] = prompt("Mời nhập yyyy-mm-dd thứ " + (i + 1));
      if (!isNaN(new Date(arr[i]))) {
        i++;
      }
    }
    alert(formDDMMYYYY(arr));
  } else {
    alert("Giá trị không hợp lệ");
  }
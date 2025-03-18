function reverseString(str) {
  let arr = str.split("");
  let n = arr.length;
  let start = 0,
    end = n - 1;

  function isAlphabet(char) {
    let charCode = char.charCodeAt(0);
    return (
      (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
    );
  }

  while (start < end) {
    while (start < end && !isAlphabet(arr[start])) start++;
    while (start < end && !isAlphabet(arr[end])) end--;
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr.join("");
}

console.log(reverseString("a&bj%:08cecke"));

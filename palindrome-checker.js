function palindrome(str) {
  let newStr = str.slice(0).replace(/\s|[^a-z0-9]/ig, "")
  .toLowerCase();
  return newStr == newStr.split("").reverse().join("");
}

console.log(palindrome("eye"));

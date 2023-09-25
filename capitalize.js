const text = "hello world je suis samuel";

function capitalizeEachWord(str) {
  return str.replace(/\b[a-z]/g, function(char) {
    return char.toUpperCase();
  });
}

console.log(capitalizeEachWord(text));
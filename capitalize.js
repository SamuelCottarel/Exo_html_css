const text = "hello world je suis samuel";

function capitalize(str) {
  return str.replace(/\b[a-z]/g, function(char) {
    return char.toUpperCase();
  });
}

console.log(capitalize(text));
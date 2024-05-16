(() => {
  console.pathLog = (text) => {
    let a = __dirname + "\\";
    let b = __filename;
    let temp = b.replace(a, "");
    console.log(temp, ":", text);
  };
})();

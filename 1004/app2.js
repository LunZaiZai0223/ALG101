const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
// com + d 結束這個程式後會做的事情 => 執行 func solve
rl.on('close', function() {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const arrLength = Number(lines[0]);
  for (let i = 1; i <= arrLength; i++) {
    const temp = lines[i].split(' ');
    const [a, b, k] = temp;
    checkValue(a, b, k);
  }
}

function checkValue(a, b, k) {
  if (k === '1') {
    if (BigInt(a) > BigInt(b)) {
      console.log('A');
    } else if (BigInt(a) < BigInt(b)) {
      console.log('B');
    } else { console.log('DRAW'); }
    // if (a.length !== b.length) {
    //   if (a.length > b.length) { console.log('A');}
    //   else if (a.length < b.length) { consol.log('B'); }
    // } else {
    //     if (a > b) { console.log('A'); } 
    //     else if (a < b) { console.log('B'); }
    //     else { console.log('DRAW'); }
    //   }
  } else if (k === '-1') {
      if (BigInt(a) > BigInt(b)) {
        console.log('B');
      } else if (BigInt(a) < BigInt(b)) {
        console.log('A');
      } else { console.log('DRAW'); }
      // if (a.length !== b.length) {
      //   if (a.length > b.length) { console.log('B'); }
      //   else if (a.length < b.length) { console.log('A'); }
      // } else {
      //   if (a > b) { console.log('B'); }
      //   else if (a < b) { console.log('A'); }
      //   else { console.log('DRAW'); }
      // }
  }
}

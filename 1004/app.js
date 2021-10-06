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
  const temp = [];
  // lines.forEach(value => {
  //   if (value.length !== 1) {
  //     const num = value.split(' ');
  //     console.log(num);
  //   }
  // });
  lines.forEach(value => {
    if (value.length !== 1) {
      const num = value.split(' ');
      temp.push(num);
    }
  });

  temp.forEach(value => {
    console.log(value);
    const [ bigOrSmall ] = value.splice(-1);
    console.log(bigOrSmall);
    if (bigOrSmall === '1') {
      if (value[0] > value[1]) {
        console.log('A');
      } else if (value[0] < value[1]) {
        console.log('B');
      } else { console.log('DRAW'); }
    } else {
      if (value[0] > value[1]) {
        console.log('B');
      } else if (value[0] < value[1]) {
        console.log('A');
      } else { console.log('DRAW'); }
    }
  });

  // const temp = [];
  // lines.forEach(value => {
  //   if (value.length > 1) {

  //   }
  // })

  // for (let i = 0; i < lines.length; i ++) {
  //   if (lines[i].length > 1) {
  //     const num = lines[i].split(' ');
  //     temp.push(num);
  //   }
  // }
  // console.log(temp);

  // temp.forEach(value => {
  //   console.log(value);
  //   if (value[0] === value[1]) {
  //     return console.log('DRAW');
  //   }
  //   const [lastValue] = value.splice(-1);
  //   console.log(lastValue);
  //   if (lastValue === '1') {
  //     if (value[0] > value[1]) {
  //       console.log('A');
  //     } else { console.log('B'); }
  //   } else if (lastValue === '-1') {
  //     if (value[0] > value[1]) {
  //       console.log('B');
  //     } else { console.log('A'); }
  //   }
  // });
}
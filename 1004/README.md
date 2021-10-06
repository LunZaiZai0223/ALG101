# 1004 聯誼順序比大小
## 心得
做這題的時候我又回去看說明影片，因為我忘記要怎麼分開一個在陣列中含有空白的值了。如下例：
```javaScript
const data = ['1 2 3'];
// 想要變成 ['1', '2', '3'];
```
這題一開始卡了很久都找不到怎麼解決，好險有找到其他大神的練習心得。
我後來也有嘗試不用 `Bigint`，用先判斷兩個比較值的 `length` ，如果有一個 `length` 比較大 = 該數比較大，但是寫的可能太醜了，丟到解答區得到 runtime error .... 看了大神的解法，發現竟然是要一個 `indexNum` 比 `indexNum` 完全沒料到會這麼麻煩 XD。

註解：`app.js` 為一開始的版本，`app2.js` 則是使用 `Bigint`。

### 如何分開字串？
後來發現老師是用字串方法 `str.split(separator)` 來整理資料。這邊就來筆記起來，避免自己忘記。
- split (vt.) 分裂、分開
- `str.split(separator)` 會回傳一個陣列
- 參數 `separator` 係指哪個字符會觸發分開，並變成陣列中的值
```javaScript
const data = ['1 2 3'];
// 碰到空白就會分開
console.log(data[0].split(' '));
// (3) ['1', '2', '3']
```
### 題目解析
1. 陣列的最後一個值代表是比大（1），還是比小（-1）
2. 兩個數相等的話就印出 DRAW

所以只要先判斷代表是比大還是比小的值，接下來再判斷實際比較的兩數就好了。正當我完成比較測試也從本機得到與題目 output 相同的結果，然後開開心心地把答案貼到作答區的時候，竟然發生錯誤，囧。

### JavaScript 中的最大運算整數
JavaScript 中有一個最大運算整數（Number.MAX_SAFE_INTEGER），只要當數值超過這個數字，就會無法成功顯示運算了。
那麼實際的最大運算整數為何呢？
```javaScript
let max = Number.MAX_SAFE_INTEGER;
console.log(max);
// 9007199254740991
```
所以只要超過這個數字，JavaScript 就沒辦法正確的運算啦（吐血）。也因為如此，即使在本機測試示範的 input 及 output 都與題目相同，但是當遇到「非常大的數字」時，就會錯誤。（題目的數字會出到 512 個位數）
>A 代表 A 選擇的數字，B 代表 B 選擇的數字，兩者皆保證為正整數，要特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內。

這時就要使用 JavaScript ES11 中新出來的語法 `BigInt`，`BigInt` 會突破最大運算整數的限制，讓更大的運算能夠正常執行。（簡而言之就會在數字後面多加一個n，而且 `typeof` 出來會是 `bigint`）
以這個邏輯來看的話我只要把比較兩數都變成 `bigint` 就可以正確地得到大數運算的結果了。

*雖然好像還是可以算的好好的...？但是不加題目就過不了R==*
<img width="467" alt="螢幕快照 2021-10-07 00 18 54" src="https://user-images.githubusercontent.com/77038018/136245953-b7b9e3c3-a148-48f2-a46c-faadfa49d188.png">


## 參考資料
1. [67 尚硅谷 ES11 BigInt类型](https://www.youtube.com/watch?v=-t5qBDuTB0w) -> 忘記什麼是 `Bigint` 可以回來看
2. [程式導師實驗計畫 Week 3 題目與解答](https://program-4th-notes.coderbridge.io/2020/12/08/week3/) -> 裡面有大神 / 老師做的題目解答


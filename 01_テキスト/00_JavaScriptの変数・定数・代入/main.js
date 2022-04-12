// * let キーワードを使って、hensu という名前の変数を宣言する
let hensu
console.log(hensu) // => undefined というなにもないことを表す値が表示される

// 変数には値を代入（割り当て）できる
hensu = 42
console.log(hensu) // => 42

// 変数には値を再代入できる
hensu = 100
console.log(hensu) // => 100

// * 多くの場合、変数には宣言と同時に値を代入する
let hensu2 = 42
console.log(hensu2) // => 42

// * const キーワードを使うと、定数になる
const teisu = 42

// 定数には値を再代入できない
teisu = 100 // エラー
console.log(teisu) // => 42

// * 変数や定数の名前はだいたい自由に決められるが、-（ハイフン）が使えなかったり、最初の文字に数字が使えなかったり、あらかじめ使えないと決められた名前は使えなかったりする。
// let my-name // だめ
// let 1banme // だめ
// let delete // だめ

// 複数の単語を組み合わせるときは、ふたつめ以降の単語の最初の文字を大文字にしてくっつけることが多い
// このような書き方をキャメルケースという（大文字がキャメル＝ラクダのこぶにみえることから）
let camelCase // camel + case
let x = 5
x += 2
x *= 5
x = 100 % x
x /= 6

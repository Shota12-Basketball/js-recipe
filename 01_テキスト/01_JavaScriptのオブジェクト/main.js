const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()
// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
const shota = {
  name: "翔太",
  age: 20,
  hobbies: ["バスケットバール", "ゲーム"],
  isHappy: true,
  address: {
    country: "日本",
    city: "京都",
  },
  sayHello: function () {
    console.log("こんにちは")
  },
}
// オブジェクトにはたくさんのプロパティを追加してください。

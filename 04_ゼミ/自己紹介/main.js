const Mikuru = document.getElementById("mikuru-button")
const Jojo = document.getElementById("jojo-button")
const Tiktok = document.getElementById("tiktok-button")

const PoseChoose = function (number) {
  if (number === 0) {
    comment.textContent = "正解!! 朝倉未来さんの動画よく見ます"
  } else if (number === 1) {
    comment.textContent = "不正解、ジョジョ立ちふざけて友達とたまにします"
  } else {
    comment.textContent = "不正解,Tiktok全くわからないです"
  }
}

Mikuru.onclick = function (number) {
  PoseChoose(0)
}
Jojo.onclick = function (number) {
  PoseChoose(1)
}
Tiktok.onclick = function (number) {
  PoseChoose(2)
}

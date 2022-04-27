const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  console.log(memoinput.value)
  memocontainer.textContent = memoinput.value
}

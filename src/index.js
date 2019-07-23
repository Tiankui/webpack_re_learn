import _ from "lodash"
import printMe from "./print"

function component() {
  const element = document.createElement("div")
  const btn = document.createElement("button")
  element.innerHTML = _.join(["Hello", "webpack"], " ") //eslint-disable-line
  btn.innerHTML = "CLick me and check the console!"
  btn.addEventListener("click", printMe)
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())

var dropTarget = document.createElement("div")
dropTarget.style.width = "1000px"
dropTarget.style.height = "1000px"
document.body.appendChild(dropTarget)

require("../ondrop.js")(dropTarget, function(files) {
  console.log(files)
})


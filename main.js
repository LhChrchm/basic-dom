const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color= "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Life is beautiful"
subHeader.setAttribute("class", "subHeader")
document.body.appendChild(subHeader)


const moveUp = function(){
    let blockUp = document.getElementById("block")
    if(blockUp.style.top != "0px"){
    blockUp.style.top = (parseInt(blockUp.style.top) || 0) - 15 + "px"
    }
  }

  const moveDown = function(){
    let blockDown = document.getElementById("block")
    if(blockDown.style.top != "405px"){
    blockDown.style.top = (parseInt(blockDown.style.top) || 0) + 15 + "px"
    }
  }

  const moveLeft = function(){
    let blockRight = document.getElementById("block")
    if(blockRight.style.left != "0px"){
    blockRight.style.left = (parseInt(blockRight.style.left) || 0) - 15 + "px"
  }
  }

  const moveRight = function(){
    let blockLeft = document.getElementById("block")
    if(blockLeft.style.left != "405px"){
    blockLeft.style.left = (parseInt(blockLeft.style.left) || 0) + 15 + "px"
  }
  }

  document.onkeydown = function(e){
    if(e.keyCode == 81){
        moveLeft()
    } else if (e.keyCode == 90){
        moveUp()
    } else if (e.keyCode == 68){
        moveRight()
    } else if (e.keyCode == 83) {
        moveDown()
    }
  }
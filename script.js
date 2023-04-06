let d = document.getElementById("ok")

let b = document.getElementById("okk")
d.style.textAlign = 'center'
d.style.marginLeft = '40%'

d.style.width = "300px"
d.style.height = "100px"
d.style.fontSize = '20px'
d.style.color = 'red'
b.style.display = "none"
b.style.width = "600px"
b.style.height = "600px"
b.style.textAlign = 'center'
d.onmouseenter = function() {
    d.style.backgroundColor = 'black'
}
let body = document.getElementById("body")
d.onclick = function () {
    let x = document.createElement("h1")
    x.innerHTML = ' <h1>I LOVE WHEN U SMILE :) </h1>'
    x.style.backgroundColor = 'white'
    x.style.textAlign = 'center'
    x.style.display = "block"
    document.body.appendChild(x)
    document.body.appendChild(b)
    d.style.display = "none"
    body.style.backgroundColor = 'purple'
    b.style.display = 'flex'
    b.style.marginLeft = "30%"
}
// https://github.com/rough-stuff/rough?tab=readme-ov-file
// https://github.com/rough-stuff/rough/wiki

let roughSVG = rough.svg(document.getElementById("svg"))
// const svg = document.getElementById()
var globalY=140
var globalX=300
const line = roughSVG.line(0,0,100,100)
// svg.appendChild(line)

// const rect = roughSVG.rectangle(20,20,400,400,{
//     fill: 'rgba(255,0,200,0.6)',
//     fillStyle: 'zigzag-line' // solid fill   
// })
// rect.addEventListener("click", ()=>{
//     console.log("ok")
// })
// svg.appendChild(rect)

///---  +, aby środek elipsy był w dobrym mscu   -, aby elipsa była wcześniej  ---///
const ellipse = roughSVG.ellipse(globalX+150,globalY+80-160,300,100)
svg.appendChild(ellipse)


const buttonAdd = document.querySelector("#addRect")
buttonAdd.addEventListener("click", ()=>{
    console.log("okok")
    drawRect(globalX,globalY)
})


function drawRect(x,y){
    const rect = roughSVG.rectangle(x,y,300,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line' // solid fill   
    })
    rect.addEventListener("click", ()=>{
        console.log("ok")
    })
    svg.appendChild(rect)
    globalY = globalY+130
}
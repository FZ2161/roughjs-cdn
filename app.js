// https://github.com/rough-stuff/rough?tab=readme-ov-file
// https://github.com/rough-stuff/rough/wiki

let roughSVG = rough.svg(document.getElementById("svg"))



// const line = roughSVG.line(0,0,100,100)
// svg.appendChild(line)

// const rect = roughSVG.rectangle(20,20,400,400,{
//     fill: 'rgba(255,0,200,0.6)',
//     fillStyle: 'zigzag-line' // solid fill   
// })
// rect.addEventListener("click", ()=>{
//     console.log("ok")
// })
// svg.appendChild(rect)

var globalY=140
var globalX=300
//!###  +, aby środek elipsy był w dobrym mscu   -, aby elipsa była wcześniej  ###!///
const ellipse = roughSVG.ellipse(globalX+150,globalY+80-160,300,100,{
    fill: 'rgba(0,50,200,0.6)',
    hachureAngle: 6, // angle of hachure,
    hachureGap: 4  
})
svg.appendChild(ellipse)
//line
const line = roughSVG.line(globalX+150,globalY+50-80,globalX+150,globalY+50+30-80)
svg.appendChild(line)

const buttonAdd = document.querySelector("#addRect")
buttonAdd.addEventListener("click", ()=>{
    console.log("okok")
    drawRect(globalX,globalY)
})


function drawRect(x,y){
    const rect = roughSVG.rectangle(x,y,300,100,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    rect.addEventListener("click", ()=>{
        console.log("ok")
    })
    svg.appendChild(rect)
    globalY = globalY+130

    const line = roughSVG.line(globalX+150,globalY+50-80,globalX+150,globalY+50+30-80)
    svg.appendChild(line)
}


const addDiamond = document.querySelector("#addDiamond")
addDiamond.addEventListener("click", ()=>{
    drawDiamond(globalX,globalY)
})

function drawDiamond(x,y){
    x=y=1
    var d=100
    var a=d/Math.sqrt(2)
    var x=globalX+150-a/2
    var y=globalY+((d/2)-(a/2))
    var centerX = x+a/2
    var centerY = y+a/2
    const test = roughSVG.rectangle(x,y,a,a,{
        fill: 'rgba(255,0,200,0.6)',
        fillStyle: 'zigzag-line'    
    })
    test.setAttribute("transform", `rotate(45,${centerX},${centerY})`)
    svg.appendChild(test)
    globalY = globalY+130
    const line = roughSVG.line(globalX+150,globalY+50-80,globalX+150,globalY+50+30-80)
    svg.appendChild(line)
}
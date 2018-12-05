let lineColor = '#0000ff'
let levelLineColor = '#3e1170'
let lines = []

let line = false
let dotRadius = 5
class Line extends Sprite
{
    constructor(posX, posY, posX2, posY2, radius, color, type)
    {
        super(posX, posY, 0, 0, color, type)
        this.posX2 = posX2
        this.posY2 = posY2
        this.radius = radius
    }
    drawLine()
    {
        ctx.beginPath()
        
        ctx.strokeStyle = this.color
        ctx.moveTo(this.posX, this.posY)
        ctx.lineTo(this.posX2, this.posY2)
        ctx.stroke()
        
        ctx.closePath()
    }
    drawDots()
    {
        ctx.beginPath()
        
        ctx.fillStyle = this.color
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false)
        ctx.arc(this.posX2, this.posY2, this.radius, 0, Math.PI * 2, false)
        ctx.fill()
        
        ctx.closePath()
    }
    draw()
    {
        this.drawLine()
        this.drawDots()
    }
}

function drawLines()
{
    for (let i = 0; i < lines.length; ++i)
        lines[i].draw()
}
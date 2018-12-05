function drawIcons()
{
    drawStartIcon()
    drawLinesK()
    menuIcon()
}
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    guide()
    drawIcons()


    drawFlag(levels[thisLevel].flagX, levels[thisLevel].flagY, '#ff0000', '#ff0000')
    drawLines()
    ball.draw()
    drawNewLine()
    levelCompleted()
}
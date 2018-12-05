function mouseCoords(event)
{
    let rect = canvas.getBoundingClientRect()
    return [event.clientX - rect.left, event.clientY - rect.top]
}

function collisionTwoCircles(x1, y1, r1, x2, y2, r2)
{
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
    if (d < r1 + r2)
        return true
    return false
}
function dotСorrection(x, y, r)
{
    for (let i = 0; i < lines.length; ++i)
    {
        if (collisionTwoCircles(x, y, r, lines[i].posX, lines[i].posY, lines[i].radius))
            return [lines[i].posX, lines[i].posY]
        if (collisionTwoCircles(x, y, r, lines[i].posX2, lines[i].posY2, lines[i].radius))
            return [lines[i].posX2, lines[i].posY2]
    }
    return [x, y]
}

document.addEventListener('mousemove', function(event)
{
    if (line)
    {
        let coords = mouseCoords(event)
        line.posX2 = coords[0]
        line.posY2 = coords[1]
    }
})
function drawNewLine()
{
    if (line)
        line.draw()
}
let flagCoords = 
[
    [-9, 0],
    [-9, -99],
    [0, -99], 
    [50, -75],
    [0, -50]
], flag = []

function drawFlag(x, y, color1, color2)
{
    ctx.beginPath()

    ctx.strokeStyle = color1
    ctx.moveTo(x, y)
    ctx.lineTo(x + flag[0][0], y + flag[0][1])
    ctx.stroke()
    ctx.fillStyle = color2
    for (let i = 1; i < flag.length; ++i)
        ctx.lineTo(x + flag[i][0], y + flag[i][1])
    ctx.fill()

    ctx.closePath()
}
function flagLineCollision(x1, y1, x2, y2, x0, y0, r)
{
    if (x1 == x2)
    {
        let root1 = y0 + Math.sqrt(Math.pow(r, 2) - Math.pow(x1 - x0, 2))
        let root2 = y0 - Math.sqrt(Math.pow(r, 2) - Math.pow(x1 - x0, 2))
        if (root1 < y1 && y2 < root1 ||
                root1 < y2 && y1 < root1 ||
                root2 < y1 && y2 < root2 ||
                root2 < y2 && y1 < root2)
            return true
    }
    else if (collisionCircleWithLine(x1, y1, x2, y2, x0, y0, r))
        return true
    return false
}
function flagCollision(x, y)
{
    for (let i = 1; i < flag.length; ++i)
    {
        if (flagLineCollision(flag[i][0] + x, flag[i][1] + y, flag[i - 1][0] + x, flag[i - 1][1] + y, ball.posX, ball.posY, ball.radius))
                return true
    }
    return false
}
function pointRotation(x, y, angle)
{
    return [x * Math.cos(angle) + y * Math.sin(angle), y * Math.cos(angle) - x * Math.sin(angle)]
}

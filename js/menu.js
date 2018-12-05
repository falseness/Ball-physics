let menuTextRect = [250, 50]
let menuCoords = [canvas.width / 2, 50]
let menuSize = [400, 650]
let menuButtons = ['resume', 'restart', 'Levels']

function eclipse()
{
    ctx.beginPath()
    ctx.fillStyle = menuBackgroundColor
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()
    
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.closePath()
}
function collisionWithRect(x, y, x1, y1, x2, y2)
{
    return (x1 < x && x < x2 &&
       y1 < y && y < y2)
}

function menu()
{
    if (drawMenu)
    {
        eclipse()
        ctx.beginPath()
        ctx.fillStyle = '#ffffff'
        ctx.strokeStyle = '#000000'
        ctx.rect(menuCoords[0], menuCoords[1], menuSize[0], menuSize[1])
        ctx.fill()
        ctx.fillStyle = menuColor
        
        for (let i = 0; i < menuButtons.length; ++i)
        {
            ctx.fillText(menuButtons[i], menuCoords[0] + menuSize[0] / 2, menuCoords[1] + 335 + 85 * i)
            if (i == 2)
                continue
            ctx.rect(menuCoords[0] + (menuSize[0] - menuTextRect[0]) / 2, menuCoords[1] + 300 + i * 85, menuTextRect[0], menuTextRect[1])
        }
        ctx.stroke()
        ctx.closePath()
        drawLevels()
        drawLogo()
    }
}
function menuIcon()
{
    if (drawMenuIcon)
    {
        ctx.beginPath()
        ctx.strokeStyle = '#000000'
        ctx.rect(menuIconRect[0][0], menuIconRect[0][1], menuIconRect[1][0], menuIconRect[1][1])
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.fillStyle = menuColor
        for (let i = 0; i < menuIconLine.length; i += 2)
        {
            ctx.rect(menuIconRect[0][0] + menuIconLine[i][0], menuIconRect[0][1] + menuIconLine[i][1],
                        53, 8)
            ctx.fill()
        }
        ctx.closePath()
    }
}
function drawStartIcon()
{
    ctx.beginPath()
    ctx.strokeStyle = '#000000'
    ctx.rect(menuIconRect[0][0] - 73, menuIconRect[0][1], menuIconRect[1][0], menuIconRect[1][1])
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    if (physics)
        ctx.fillStyle = '#00ff00'
    else
        ctx.fillStyle = menuColor
    ctx.moveTo(startIconTriangle[startIconTriangle.length - 1][0], startIconTriangle[startIconTriangle.length - 1][1])
    for (let i = 0; i < startIconTriangle.length; ++i)
    {
        ctx.lineTo(startIconTriangle[i][0], startIconTriangle[i][1])
    }
    ctx.fill()
    ctx.closePath()
}
function drawLinesK()
{
    ctx.fillStyle = menuColor
    let textLinesKCoords = [canvas.width - 120, 63 + 20 + 30]
    ctx.textAlign = "left"
    ctx.font = "20px Arial"
    ctx.fillText('Lines: ' + linesK + ' / ' + levels[thisLevel].lineK, textLinesKCoords[0], textLinesKCoords[1])
}
function drawLogo()
{
    ctx.beginPath()
    ctx.fillStyle = menuColor
    ctx.textAling = 'center'
    ctx.fillText('Ball physics', menuCoords[0] + menuSize[0] / 2, menuCoords[1] + 50)
    ctx.rect(menuCoords[0] + 30, menuCoords[1] + 70, menuSize[0] - 30 * 2, 215)
    ctx.strokeStyle = '#000000'
    ctx.stroke()
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle = menuColor
    ctx.arc(menuCoords[0] + 220, menuCoords[1] + 180, 30, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()
    
    ctx.beginPath()
    let x1 = menuCoords[0] + 50
    let y1 = menuCoords[1] + 120
    let x2 = menuCoords[0] + 320
    let y2 = menuCoords[1] + 270
        
    ctx.strokeStyle = lineColor
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke() 
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle = lineColor
    ctx.arc(x1, y1, dotRadius, 0, Math.PI * 2, false)
    ctx.arc(x2, y2, dotRadius, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()
}
function guide()
{
    if (thisLevel == 0)
    {
        ctx.textAlign = 'center'
        ctx.font = "20px Arial"
        ctx.beginPath()
        ctx.fillStyle = menuColor
        ctx.fillText('Click here', 800, 160)
        ctx.fillText('and here', 260, 480)
        ctx.fillText('to draw line', 260, 500)
        ctx.closePath()
    }
}
let rectMarginTop = 525
let rectMarginLeft = 25
let rectSize = 50 
function drawLevels()
{
    
    let textMarginLeft = 25
    let textMarginTop = 42
    
    let rectColor = ['#4030B0', '#1E90FF', '#DC143C']

    ctx.font = "50px Arial"
    ctx.textAlign = "center"

    for (let i = 0; i < levels.length; ++i)
    {
        ctx.beginPath()

        ctx.strokeStyle = '#000000'

        ctx.fillStyle = rectColor[levels[i].unlock]
        if (i > 4)
        {
            ctx.rect(menuCoords[0] + rectMarginLeft + (rectMarginLeft + rectSize) * (i - 5) , 60 + menuCoords[1] + rectMarginTop, rectSize, rectSize)
        }
        else
            ctx.rect(menuCoords[0] + rectMarginLeft + (rectMarginLeft + rectSize) * i, menuCoords[1] + rectMarginTop, rectSize, rectSize)
        ctx.fill()
        ctx.fillStyle = '#ffffff'
        if (i > 4)
        {
            ctx.fillText(i + 1, menuCoords[0] + rectMarginLeft + (rectMarginLeft + rectSize) * (i - 5) + textMarginLeft, 60 + menuCoords[1] + rectMarginTop + textMarginTop)
        }
        else
        {
            ctx.fillText(i + 1, menuCoords[0] + rectMarginLeft + (rectMarginLeft + rectSize) * i + textMarginLeft, menuCoords[1] + rectMarginTop + textMarginTop)
        }
        ctx.stroke()
        ctx.closePath()
    }

}
function levelsRectCollision(x, y)
{
    for (let i = 0; i < levels.length; ++i)
    {
        if (levels[i].unlock && collisionWithRect(x, y, menuCoords[0] + rectMarginLeft + (rectMarginLeft + rectSize) * (i - 5 * (i > 4)),
                          menuCoords[1] + rectMarginTop + (i > 4) * 60, 
                          menuCoords[0] + rectMarginLeft + (rectMarginLeft + rectSize) * (i - 5 * (i > 4)) + rectSize,
                          menuCoords[1] + rectMarginTop + rectSize + (i > 4) * 60))
        {
            thisLevel = i
            levelChoosed(thisLevel)
            drawMenu = false
            levelCompletedWindow = false
            drawMenuIcon = true 
            return true
        }
    }
    return false
}
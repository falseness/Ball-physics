/*
Сделай гейм брейки после рестарта или перехода на след уровень
Сделай в меню показ уровней и отмечай уже пройденные
Сделай еще хотя бы 4 уровня
*/

let levelCompletedWindow = false
let blocks = [295, 370, 455]
function levelCompleted()
{
    if (levelCompletedWindow)
    {
        let textMargin = 34
        let nextLevelButton = [250]
        eclipse()
        ctx.beginPath()
        ctx.fillStyle = '#ffffff'
        ctx.strokeStyle = '#000000'
        ctx.rect(menuCoords[0], menuCoords[1], menuSize[0], menuSize[1])
        ctx.rect(menuCoords[0] + (menuSize[0] - menuTextRect[0]) / 2, menuCoords[1] + blocks[2], menuTextRect[0], menuTextRect[1])
        if (thisLevel + 1 < levels.length)
            ctx.rect(menuCoords[0] + (menuSize[0] - menuTextRect[0]) / 2, menuCoords[1] + blocks[1], menuTextRect[0], menuTextRect[1])
        ctx.fill()

        ctx.fillStyle = menuColor
        if (thisLevel + 1 < levels.length)
            ctx.fillText('next level', menuCoords[0] + menuSize[0] / 2, menuCoords[1] + blocks[1] + textMargin)
        else
            ctx.fillText('Thanks for playing!', menuCoords[0] + menuSize[0] / 2, menuCoords[1] + blocks[1] + textMargin)
        ctx.fillText('Level completed!', menuCoords[0] + menuSize[0] / 2, menuCoords[1] + blocks[0] + textMargin)
        ctx.fillText('restart', menuCoords[0] + menuSize[0] / 2, menuCoords[1] + blocks[2] + textMargin)
        ctx.stroke()
        ctx.closePath()
        drawLevels()
        drawLogo()
    }
}

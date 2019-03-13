class Sprite 
{
    constructor(posX, posY, speedX, speedY, color, type)
    {
        this.speedX = speedX
        this.speedY = speedY
        this.posX = posX
        this.posY = posY
        this.color = color
        this.type = type
      }
    move()
    {
        this.posX += this.speedX 
        this.posY += this.speedY
    }
    getX()
    {
        return this.posX
    }
    getY()
    {
        return this.posY
    }
    setX(x)
    {
        this.posX = x
    }
    setY(y)
    {
        this.posY = y
    }
    setSpeedX(speedX)
    {
        this.speedX = speedX
    }
    setSpeedY(speedY)
    {
        this.speedY = speedY
    }
}

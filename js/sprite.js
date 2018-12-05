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
}

function collisionCircleWithLine(x1, y1, x2, y2, x0, y0, r)
{
    let k = (y1 - y2) / (x1 - x2)
    let b = y1 - k * x1
    /*
    ax^2 + bx + c = 0
    */
    let a = k * k + 1
    let c = x0 * x0 + b * b - 2 * y0 * b + y0 * y0 - r * r
    b = 2 * k * b - 2 * x0 - 2 * y0 * k
    let D = b * b - 4 * a * c
    if (D >= 0)
    {
        D = Math.sqrt(D)
        let root1 = (-b - D) / (2 * a)
        let root2 = (-b + D) / (2 * a)
        // x2 > x1
        if (root1 < x2 && x1 < root1 || 
            root2 < x2 && x1 < root2 ||
            root1 < x1 && x2 < root1 ||
            root2 < x1 && x2 < root2)
            return true
    }
    return false
}

class Ball extends Sprite
{
    constructor(radius, posX, posY, speedX, speedY, color, type)
    {
        super(posX, posY, speedX, speedY, color, type)
        this.radius = radius
        this.angle = 1
    }
    draw()
    {
        
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
        
    }
    collisionWithDot(x, y)
    {
        if (Math.pow(this.posX - x, 2) + Math.pow(this.posY - y, 2) < Math.pow(this.radius, 2) - 1)
        {//-1 - костыль, который чинит физику при колизии при скатывании
            this.speedX *= -1
            this.speedY *= -1
            return true
        }
        return false
    }
    collision()
    {
        //Добавь обработку коллизий с краями прямых
        for (let i = 0; i < lines.length; ++i)
        {
            if (this.collisionWithDot(lines[i].posX, lines[i].posY) || this.collisionWithDot(lines[i].posX2, lines[i].posY2))
                break
            /*
            y1 = kx1 + b
            y2 = kx2 + b
            */
            let x1 = lines[i].posX
            let y1 = lines[i].posY
            let x2 = lines[i].posX2
            let y2 = lines[i].posY2
            /*
             y = kx + b
             (x - x0) ^ 2 + (y - y0) ^ 2 = r ^ 2
            */
            let x0 = this.posX
            let y0 = this.posY
            let r = this.radius
            
            if (x1 == x2)
            {
                let root1 = y0 + Math.sqrt(Math.pow(r, 2) - Math.pow(x1 - x0, 2))
                let root2 = y0 - Math.sqrt(Math.pow(r, 2) - Math.pow(x1 - x0, 2))
                //if (Math.pow(y1 - y0, 2) + Math.pow(x1 - x0, 2) <= Math.pow(this.radius, 2) && this.speedY > 0 ||
                 //  Math.pow(y2 - y0, 2) + Math.pow(x2 - x0, 2) <= Math.pow(this.radius, 2) && this.speedY < 0)
                 //   this.speedY *= -1
                if (root1 < y1 && y2 < root1 ||
                        root1 < y2 && y1 < root1 ||
                        root2 < y1 && y2 < root2 ||
                        root2 < y2 && y1 < root2)
                    this.speedX *= -1
            }
            else if (collisionCircleWithLine(x1, y1, x2, y2, x0, y0, r))
            {
                let lineAngle = Math.atan((y1 - y2) / (x1 - x2))

                let xn = -this.speedX
                let yn = -this.speedY

                let x = xn * Math.cos(lineAngle) + yn * Math.sin(lineAngle)
                let y = yn * Math.cos(lineAngle) - xn * Math.sin(lineAngle)

                x = -x

                xn = x * Math.cos(lineAngle) - y * Math.sin(lineAngle)
                yn = y * Math.cos(lineAngle) + x * Math.sin(lineAngle)

                this.speedX = xn
                this.speedY = yn
                this.speedX += gravitationalAcceleration * Math.cos(lineAngle) * Math.sin(lineAngle)
                this.speedY -= gravitationalAcceleration * Math.pow(Math.cos(lineAngle), 2)
            }
        }
    }
    gravity()
    {
        this.speedY += gravitationalAcceleration
    }
    physics()
    {
        this.collision()
        this.gravity()
    }
    onMap()
    {
        return !(this.posX > canvas.width || this.posX < 0 || this.posY > canvas.height || this.posY < 0)
    }
}
class Bounce
{
    constructor()
    {
        this.drawEnable = true
        this.positions = []
        
        this.pointsCount = 100
        
        this.color = '#ffb6c1'
    }
    calc(coords)
    {
        if (line)   
        {
            if (!addNewLine(coords))
                return 

            const cycles = 1000
            this.positions = []

            let ballStartX = ball.getX()
            let ballStartY = ball.getY()

            for (let i = 0; i < this.pointsCount; ++i)
            {
                for (let j = 0; j < cyclesPerTact; ++j)
                {
                    gamePhysics()
                }
                this.positions.push({x: ball.getX(), y: ball.getY()})
            }
            this.drawed = true

            ball.setX(ballStartX)
            ball.setY(ballStartY)

            ball.setSpeedX(0)
            ball.setSpeedY(0)

            unfastenLastLine()
        }
    }
    setDrawEnable(input)
    {
        this.drawEnable = input
        if (!this.drawEnable)
            this.positions = []
    }
    draw()
    {
        if (this.drawEnable)
        {
            ctx.strokeStyle = this.color
            
            let startLineWidth = ctx.lineWidth
            
            ctx.lineWidth = ball.radius
            
            for (let i = 1; i < this.positions.length; ++i)
            {
                ctx.beginPath()
                ctx.globalAlpha = (this.positions.length - i) / this.positions.length
                ctx.moveTo(this.positions[i - 1].x, this.positions[i - 1].y)
                ctx.lineTo(this.positions[i].x, this.positions[i].y)
                ctx.stroke()
                ctx.closePath()
            }
            ctx.globalAlpha = 1
            
            ctx.lineWidth = startLineWidth
        }
    }
}
let bounce = new Bounce()
let levels = []

levels.push(
{
    ballX: canvas.width / 2,
    ballY: canvas.height / 2 - 250,
    flagX: 200,
    flagY: 450,
    flagRotate: 0,
    lineK: 1,
    lines: [
        new Line(100, 450, 300, 450, dotRadius, levelLineColor, 'line'), 
        new Line(100, 450, 100, 200, dotRadius, levelLineColor, 'line')],
    unlock: 1
}, 
{
    
    ballX: 100,
    ballY: 15,
    flagX: 360,
    flagY: 400,
    flagRotate: 0,
    lineK: 1,
    lines: [
        new Line(0, 50, 200, 250, dotRadius, levelLineColor, 'line'),
        new Line(235, 235, 420, 50, dotRadius, levelLineColor, 'line'),
        new Line(450, 400, 280, 400, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 200,
    ballY: 150,
    flagX: 390,
    flagY: 340,
    flagRotate: -0.96667 + Math.PI * 1.5,
    lineK: 2,
    lines: [
        new Line(100, 400, 300, 400, dotRadius, levelLineColor, 'line'),
        new Line(300, 400, 450, 300, dotRadius, levelLineColor, 'line')],
    unlock: 0
},
{
    ballX: 200,
    ballY: 50,
    flagX: 300,
    flagY: 281,
    flagRotate: Math.PI,
    lineK: 2,
    lines: [
        new Line(250, 0, 250, 60, dotRadius, levelLineColor, 'line'),
        new Line(250, 60, 170, 70, dotRadius, levelLineColor, 'line'),
        new Line(0, 280, 450, 280, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 645,
    ballY: 50,
    flagX: 430,
    flagY: 100,
    flagRotate: Math.PI / 2,
    lineK: 1,
    lines: [
        new Line(240, 370, 80, 250, dotRadius, levelLineColor, 'line'),
        new Line(430, 250, 430, 10, dotRadius, levelLineColor, 'line'),
        new Line(430, 310, 430, 600, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 200,
    ballY: 50,
    flagX: 360,
    flagY: 400,
    flagRotate: 0,
    lineK: 3,
    lines: [
        new Line(0, 280, 450, 280, dotRadius, levelLineColor, 'line'),
        new Line(450, 280, 450, 400, dotRadius, levelLineColor, 'line'),
        new Line(450, 400, 280, 400, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 645,
    ballY: 100,
    flagX: 190,
    flagY: 260,
    flagRotate: 0,
    lineK: 1,
    lines: [
        new Line(250, 0, 420, 200, dotRadius, levelLineColor, 'line'),
        new Line(630, 200, 630, 50, dotRadius, levelLineColor, 'line'),
        new Line(280, 280, 310, 280, dotRadius, levelLineColor, 'line'),
        new Line(170, 260, 200, 260, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 350,
    ballY: 15,
    flagX: 240,
    flagY: 100,
    flagRotate: Math.PI,
    lineK: 1,
    lines: [
        new Line(100, 100, 100, 400, dotRadius, levelLineColor, 'line'),
        new Line(100, 400, 300, 400, dotRadius, levelLineColor, 'line'),
        new Line(300, 360, 300, 100, dotRadius, levelLineColor, 'line'),
        new Line(100, 100, 300, 100, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 40,
    ballY: 15,
    flagX: 370,
    flagY: 600,
    flagRotate: 0,
    lineK: 1,
    lines: [
        new Line(350, 260, 0, 0, dotRadius, levelLineColor, 'line'),
        new Line(380, 180, 380, 300, dotRadius, levelLineColor, 'line'),
        new Line(380, 300, 630, 450, dotRadius, levelLineColor, 'line'),
        new Line(800, 700, 1000, 500, dotRadius, levelLineColor, 'line'),
        new Line(340, 600, 390, 600, dotRadius, levelLineColor, 'line'),
        new Line(380, 300, 340, 600, dotRadius, levelLineColor, 'line'),
        new Line(630, 520, 630, 250, dotRadius, levelLineColor, 'line'),
        new Line(630, 650, 630, 550, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
},
{
    ballX: 40,
    ballY: 15,
    flagX: 240,
    flagY: 150,
    flagRotate: 0,
    lineK: 2,
    lines: [
        new Line(100, 10, 100, 300, dotRadius, levelLineColor, 'line'),
        new Line(100, 300, 300, 300, dotRadius, levelLineColor, 'line'),
        new Line(300, 200, 200, 200, dotRadius, levelLineColor, 'line'),
        new Line(200, 200, 200, 150, dotRadius, levelLineColor, 'line'),
        new Line(200, 150, 300, 150, dotRadius, levelLineColor, 'line'),
        new Line(300, 200, 300, 10, dotRadius, levelLineColor, 'line')
    ],
    unlock: 0
}
)
let thisLevel = 0
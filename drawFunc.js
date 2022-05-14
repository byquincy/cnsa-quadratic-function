export class DrawFunc{
    constructor() {
    }

    linearFunc(ctx, canvasWidth, canvasHeight, angle) {
        ctx.beginPath() 
        
        ctx.moveTo(0, canvasHeight/2)
        ctx.lineTo(canvasWidth, (-1*canvasWidth * Math.tan(angle * Math.PI / 180)) + (canvasHeight/2))
        ctx.stroke()

        ctx.closePath()
    }

    quadraticFunc() {

    }
}
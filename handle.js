import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        this.drawFunc = new DrawFunc()

        this.ctx = ctx

        this.beta = 0

        this.canvasWidth = 0
        this.canvasHeight = 0

        // this.ctx = ctx
    }

    updateAngle(event) {
        this.beta = event.beta

        document.getElementById("wow").textContent = this.beta

        this.reDraw()
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        
        this.reDraw()
    }

    reDraw() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.drawFunc.linearFunc(this.ctx, this.canvasWidth, this.canvasHeight, this.beta)
    }
}
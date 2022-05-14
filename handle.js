import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        this.ctx = ctx
        this.drawFunc = new DrawFunc()

        this.beta = 0

        this.canvasWidth = 0
        this.canvasHeight = 0
    }

    updateAngle(event) {
        this.beta = event.beta
        document.getElementById("wow").textContent = this.beta

        this.reDrawing()
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.reDrawing()
    }

    reDrawing() {
        this.drawFunc.linearFunc(this.ctx, this.canvasWidth, this.canvasHeight, this.beta)
    }
}
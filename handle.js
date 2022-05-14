import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        this.drawFunc = new DrawFunc()

        this.beta = 0

        this.canvasWidth = 0
        this.canvasHeight = 0

        // this.ctx = ctx
    }

    updateAngle(event) {
        this.beta = event.beta

        document.getElementById("wow").textContent = this.beta

        console.log(this)
        this.reDraw()
    }

    resize(canvasWidth, canvasHeight) {
        // document.getElementById("wow2").textContent = canvasHeight

        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.reDraw()
    }

    reDraw() {
        document.getElementById("wow2").textContent = this.beta

        // this.drawFunc.linearFunc(ctx, this.canvasWidth, this.canvasHeight, this.beta)
    }
}
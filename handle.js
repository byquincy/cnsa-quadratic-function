import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        this.ctx = ctx
        this.drawFunc = new DrawFunc()

        this.beta = 0

        this.canvasWidth = 0
        this.canvasHeight = 0
    }

    updateDraw(event) {
        this.beta = event.beta

        // this.resize(this.canvasWidth, this.canvasHeight)

        // this.drawFunc.linearFunc(this.ctx, canvasWidth, canvasHeight, 0)
        // this.drawFunc.linearFunc(this.ctx, canvasWidth, canvasHeight, this.beta)


        document.getElementById("wow").textContent = this.beta
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        document.getElementById("wow2").textContent = this.beta
    }
}
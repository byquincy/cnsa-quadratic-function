import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        this.drawFunc = new DrawFunc()

        this.beta = 0

        this.ctx = ctx

        this.canvasWidth = 0
        this.canvasHeight = 0
    }

    updateAngle(event) {
        this.beta = event.beta
        // document.getElementById("wow").textContent = this.beta
        document.getElementById("wow").textContent = event.beta

        reDraw(this.ctx)
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
    }

    reDraw(ctx) {
        document.getElementById("wow2").textContent = this.beta

        // this.drawFunc.linearFunc(ctx, this.canvasWidth, this.canvasHeight, this.beta)
    }
}

function reDraw(ctx) {
    document.getElementById("wow2").textContent = this.beta
}
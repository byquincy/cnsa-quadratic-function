import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        console.log("dd")

        this.ctx = ctx
        this.drawFunc = new DrawFunc()

        this.beta = 0

        this.canvasWidth = 0
        this.canvasHeight = 0

        console.log("ee")
    }

    updateDraw(event) {
        this.beta = event.beta
        // this.beta = 45

        this.resize(this.canvasWidth, this.canvasHeight)

        document.getElementById("wow").textContent = this.beta
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.drawFunc.linearFunc(this.ctx, canvasWidth, canvasHeight, this.beta)

        document.getElementById("wow2").textContent = this.beta
    }
}
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

        this.resize(this.canvasWidth, this.canvasWidth)
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.drawFunc.linearFunc(this.ctx, canvasWidth, canvasHeight, this.beta)
    }
}
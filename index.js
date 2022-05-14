import { Handle } from "./handle.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        this.handle = new Handle(this.ctx)

        window.addEventListener('resize', this.resize.bind(this), false)
        window.addEventListener("deviceorientation", this.handle.updateAngle.bind(this.handle))

        this.resize()
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2
        this.ctx.scale(2, 2)

        this.handle.resize(this.stageWidth, this.stageHeight)

        console.log("a")
    }
}

window.onload = () => {
    document.getElementById('body').style.backgroundColor = 'transparent'
    new App()
}
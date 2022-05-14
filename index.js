import { Handle } from "./handle.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.handle = new Handle(), 

        window.addEventListener('resize', this.resize.bind(this), false)
        window.addEventListener("deviceorientation", this.handle.updateAngle)

        this.resize()

        requestAnimationFrame(this.animate.bind(this));
        // this.handle.updateDraw("d")
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        // this.canvas.width = this.stageWidth
        // this.canvas.height = this.stageHeight

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2
        this.ctx.scale(2, 2);

        this.handle.resize(this.stageWidth, this.stageHeight)
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.handle.reDraw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}
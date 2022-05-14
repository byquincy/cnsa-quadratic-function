import { DrawFunc } from "./drawFunc.js";

export class Handle {
    constructor(ctx) {
        this.ctx = ctx

        this.drawFunc = new DrawFunc(this.ctx)

        this.beta = 0

        this.canvasWidth = 0
        this.canvasHeight = 0

        // this.ctx = ctx
    }

    updateAngle(event) {
        this.beta = event.beta
        
        document.getElementById('ddd').innerText = event.alpha
        document.getElementById('eee').innerText = event.gamma
        document.getElementById('container').style.opacity = String(event.alpha) + '%'

        this.reDraw()
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        
        this.drawFunc.resize(this.canvasWidth, this.canvasHeight)

        this.reDraw()
    }

    reDraw() {
        // 캔버스 초기화
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // 계산
        let startX = 0
        let endX = 0

        const root3 = 1.73

        let reverseNumber = false
        if(this.beta < 0){
            this.beta = -1*this.beta
            reverseNumber = true
        }

        console.log(this.beta)

        if(0 <= this.beta && this.beta <= 30){
            startX = Math.tan(this.beta * Math.PI/180) - 2/3*root3
            endX = Math.tan(this.beta * Math.PI/180) + 2/3*root3
        }else if(30 < this.beta && this.beta <= 60){
            startX = 2*Math.tan(this.beta * Math.PI/180) - root3
            endX = root3
        }

        if(reverseNumber){
            const temp = startX

            startX = -1*endX
            endX = -1*temp
        }

        console.log(startX)
        console.log(endX)

        // 물 그리기
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(105, 101, 255, 0.5)'

        this.drawFunc.linearFunc(startX, endX)
        this.drawFunc.quadraticFunc(startX, endX)

        this.ctx.fill()
        this.ctx.closePath()

        // 2차함수 그리기
        this.ctx.beginPath()
        this.drawFunc.quadraticFunc(-1*root3, root3)
        this.ctx.stroke()
        this.ctx.closePath()
    }
}
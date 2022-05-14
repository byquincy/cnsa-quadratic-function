import { GetPoint } from "./getPoint.js";

export class DrawFunc{
    constructor(ctx) {
        this.ctx = ctx

        this.getPoint = new GetPoint()
    }

    // 수평 그래프
    linearFunc(startX, endX) {
        this.ctx.moveTo(
            this.getPoint.recoordinateX(startX), 
            this.getPoint.recoordinateY(this.getPoint.getQuadratic(startX))
        )
        this.ctx.lineTo(
            this.getPoint.recoordinateX(endX), 
            this.getPoint.recoordinateY(this.getPoint.getQuadratic(endX))
        )
    }

    // y= -1/2x^2 그래프
    quadraticFunc(startX, endX) {
        let i = startX
        let distance = 0
        if(startX > endX){
            distance = -0.1
        }else{
            distance = 0.1
        }
        const DISTANCE = distance

        // 그리기 시작
        this.ctx.moveTo(
            this.getPoint.recoordinateX(startX), 
            this.getPoint.recoordinateY(this.getPoint.getQuadratic(startX))
        )

        while(i < endX){
            this.ctx.lineTo(
                this.getPoint.recoordinateX(i), 
                this.getPoint.recoordinateY(this.getPoint.getQuadratic(i))
            )

            i += DISTANCE
        }

        this.ctx.lineTo(
            this.getPoint.recoordinateX(endX), 
            this.getPoint.recoordinateY(this.getPoint.getQuadratic(endX))
        )
        // 그리기 끝
    }

    resize(canvasWidth, canvasHeight) {
        this.getPoint.resize(canvasWidth, canvasHeight)

        console.log("c")
    }
}
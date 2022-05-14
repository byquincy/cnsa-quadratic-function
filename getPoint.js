export class GetPoint {
    constructor() {
        this.canvasWidth = 0
        this.canvasHeight = 0
        this.magnificat = 1
    }

    getQuadratic(x) {
        return x * x / 2
        // 1/2 * x^2
    }

    recoordinateX(x) {
        return this.canvasWidth/2 + x*this.magnificat
    }

    recoordinateY(y) {
        return this.canvasHeight - (y*this.magnificat)
    }

    resize(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.magnificat = Math.min(this.canvasHeight / 2, this.canvasWidth / 2)
        // 루트3 대신 대충 2
    }
}
import { DrawFunc } from "./drawFunc.js"

export class Handle {
    constructor(ctx){
        this.ctx = ctx

        this.drawFunc = new DrawFunc(this.ctx)

        this.beta = 0
        this.gamma = 0

        this.canvasWidth = 0
        this.canvasHeight = 0
        
        this.frontNotice = false
        this.rotateNotice = false
    }

    updateAngle(event){
        this.beta = event.beta
        this.gamma = event.gamma
        
        if(this.gamma < 0){
            this.gamma = -1*this.gamma
        }

        if(this.gamma > 45){
            this.frontNotice = false
        }else{
            this.frontNotice = true
        }

        if(!this.noticeView()){
            this.reDraw()
        }
    }

    resize(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        if(!this.isMobile()){ // computerNotice
            document.getElementById('iconContain').style.display = 'none'
            document.getElementById('computerNoticeContain').style.display = 'flex'

            return
        }

        if(this.canvasWidth <= this.canvasHeight){
            this.rotateNotice = true
        }else{
            this.rotateNotice = false
        }

        if(!this.noticeView()){
            this.drawFunc.resize(this.canvasWidth, this.canvasHeight)

            this.reDraw()
        }
    }

    noticeView(){
        if(this.rotateNotice || this.frontNotice){
            if(this.rotateNotice){
                document.getElementById('rotateContain').style.display= 'flex'
                document.getElementById('frontContain').style.display = 'none'
            }else{  // else면 this.rotateNotice == true
                document.getElementById('rotateContain').style.display = 'none'
                document.getElementById('frontContain').style.display = 'flex'
            }

            document.getElementById('container').style.opacity = '100%'
            return true
        }else{
            document.getElementById('container').style.opacity = '0%'
            return false
        }
    }

    reDraw(){
        // 캔버스 초기화
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // 계산
        let startX = 0
        let endX = 0

        const root3 = 1.73

        console.log(this.beta)

        let reverseNumber = false

        if(this.beta < 0){
            this.beta = -1*this.beta
            reverseNumber = true
        }
        if(this.beta > 90){
            this.beta = 180 - this.beta
        }

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

        // 물 그리기
        this.ctx.beginPath()
        this.ctx.fillStyle = '#ACC7B4'

        this.drawFunc.quadraticFunc(startX, endX)

        this.ctx.fill()
        this.ctx.closePath()

        // 2차함수 그리기
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#ACC7B4'
        this.ctx.lineWidth = 3

        this.drawFunc.quadraticFunc(-1*root3, root3)
        this.ctx.stroke()
    }

    isMobile(){
        var UserAgent = navigator.userAgent;
    
        // if(UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
        if(UserAgent.match(/Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
        {
            return true;
        }else{
            return false;
        }
    }
    
}
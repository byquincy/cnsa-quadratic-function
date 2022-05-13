class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        // this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false)
        window.addEventListener("deviceorientation", this.handleOrientation)
        
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        // this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    handleOrientation(event) {
        this.beta = event.beta
        document.getElementById("bb").textContent = Math.round(this.beta)

        this.ctx.moveTo(0, this.canvas.height/2);
        this.ctx.lineTo(this.stageWidth, this.stageWidth*this.beta/360);
        this.ctx.stroke();
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
}
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
        this.alpha = event.alpha
        this.beta = event.beta
        this.gamma = event.gamma

        document.getElementById("aa").textContent = Math.round(this.alpha)
        document.getElementById("bb").textContent = Math.round(this.beta)
        document.getElementById("cc").textContent = Math.round(this.gamma)
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
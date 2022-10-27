export class DrawCanvas {
    constructor(canvas) {
        this.canvasElement = canvas;
        this.ctx = canvas.getContext('2d');
        this.isPainting = false;
        this.#prepareCanvas();
        this.#setDefaultValues();
        this.#addEventListeners();
    }
    #prepareCanvas() {
        this.canvasElement.width = this.canvasElement.parentElement.offsetWidth;
        this.canvasElement.height = this.canvasElement.parentElement.offsetHeight;
    }
    #setDefaultValues() {
        this.ctx.fillStyle = "black";
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = "round";
    }
    #addEventListeners() {
        this.canvasElement.addEventListener('mousedown', (e) => {
            this.isPainting = true;
            this.#draw(e);
        });
        this.canvasElement.addEventListener('mouseup', () => {
            this.isPainting = false;
            this.ctx.beginPath();
        });
        this.canvasElement.addEventListener('mousemove', (e) => {
            this.#draw(e);
        });
    }
    #draw(e) {
        if (!this.isPainting) return;
        const canvasPos = this.#getPosition(this.canvasElement);
        const xAxis = e.clientX - canvasPos.x;
        const yAxis = e.clientY - canvasPos.y;

        this.ctx.lineTo(xAxis, yAxis);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(xAxis, yAxis);
    }
    #getPosition() {
        var el = this.canvasElement;
        var xPosition = 0;
        var yPosition = 0;

        while (el) {
            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }
    getContext() {
        return this.ctx;
    }
}
export class CanvasCircle {
    constructor(x, y, r, fill, stroke, key) {
        this.startingAngle = 0;
        this.endAngle = 2 * Math.PI;

        this.x = x;
        this.y = y;
        this.r = r;

        this.fill = fill;
        this.stroke = stroke;
        this.key = key;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }

    intersected(mousePosition) {

        let areaX = mousePosition.x - this.x;
        let areaY = mousePosition.y - this.y;

        return (areaX * areaX + areaY * areaY <= this.r * this.r);
    }
}
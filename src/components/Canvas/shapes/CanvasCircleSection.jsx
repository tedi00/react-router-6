export class CanvasCircleSection {
    constructor(x, y, r, fill, stroke, angle, key, rotation = 0) {
        this.startingAngle = this.toRad(rotation);
        this.endAngle = this.toRad(angle) + this.toRad(rotation);
        this.angle = angle;
        this.rotation = rotation;

        this.x = x;
        this.y = y;
        this.r = r;

        this.fill = fill;
        this.stroke = stroke;
        this.key = key;
    }

    toRad(deg) {
        return deg * (Math.PI/180);
    }
    toPercentage(deg) {
        return deg * 100 / 360;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
        ctx.lineTo(this.x, this.y);
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }

    intersected(mousePosition) {
        let x = mousePosition.x - this.x;
        let y = mousePosition.y - this.y;

        let endAngle = 360 / this.toPercentage(this.angle) + this.rotation;

        let polarRadius = Math.sqrt(x * x +y * y);
        let angle = Math.atan(y / x);

        return (angle >= this.rotation && angle <= endAngle && polarRadius < this.r)
    }

}
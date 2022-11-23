export class CanvasCircleSection {
    constructor(x, y, r, fill, stroke, angle, key, rotation = 0) {
        this.rotation = rotation;
        this.angle = angle;
        this.startingAngle = this.toRad(rotation);
        this.endAngle = this.toRad(angle) + this.toRad(rotation);

        this.x = x;
        this.y = y;
        this.r = r;

        this.fill = fill;
        this.stroke = stroke;
        this.key = key;
    }

    updateCoordinates() {
        this.startingAngle = this.toRad(this.rotation);
        while(this.startingAngle > 2 * Math.PI) {
            this.startingAngle = this.startingAngle - 2 * Math.PI;
        }
        this.endAngle = this.toRad(this.angle) + this.toRad(this.rotation);
        while(this.endAngle > 2 * Math.PI) {
            this.endAngle = this.endAngle - 2 * Math.PI;
        }
        while(this.endAngle < this.startingAngle) {
            this.startingAngle = this.startingAngle - 2 * Math.PI;
        }
    }

    toRad(deg) {
        return deg * (Math.PI / 180);
    }

    draw(ctx) {
        const ctxFill = ctx.fillStyle;
        const ctxStroke = ctx.strokeStyle;
        this.updateCoordinates();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
        ctx.lineTo(this.x, this.y);
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
        ctx.fillStyle = ctxFill;
        ctx.strokeStyle = ctxStroke;
    }

    intersected(mousePosition) {
        let x = mousePosition.x - this.x;
        let y = mousePosition.y - this.y;

        let polarRadius = Math.sqrt(x * x + y * y);
        let angle = Math.atan2(y, x);

        let angle2 = (angle + (2 * Math.PI));
        while(angle2 > 2 * Math.PI) {
            angle2 = angle2 - 2 * Math.PI;
        }

        let angleCondition = ((angle >= this.startingAngle && angle <= this.endAngle) || (angle2 >= this.startingAngle && angle2 <= this.endAngle))
        return (angleCondition && polarRadius < this.r);
    }

}

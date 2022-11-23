export class CanvasRectangle {
    constructor(x, y, width, height, fill, stroke, key) {
        this.width = width;
        this.height = height;
        // Center point
        this.x = x;
        this.y = y;
        // Draw coordinates
        this.startX = x - (width / 2);
        this.startY = y - (height / 2);
        this.endX = x + (width / 2);
        this.endY = y + (height / 2);

        this.fill = fill;
        this.stroke = stroke;
        this.key = key;
    }

    updateCoordinates() {
        this.startX = this.x - (this.width / 2);
        this.startY = this.y - (this.height / 2);
        this.endX = this.x + (this.width / 2);
        this.endY = this.y + (this.height / 2);
    }

    draw(ctx) {
        const ctxFill = ctx.fillStyle;
        const ctxStroke = ctx.strokeStyle;
        this.updateCoordinates();
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.stroke;
        ctx.fillRect(this.startX, this.startY, this.width, this.height);
        ctx.strokeRect(this.startX, this.startY, this.width, this.height);
        ctx.fillStyle = ctxFill;
        ctx.strokeStyle = ctxStroke;
    }

    intersected(mousePosition) {
        let x = mousePosition.x;
        let y = mousePosition.y;
        return (x >= this.startX && x <= this.endX && y >= this.startY && y <= this.endY);
    }
}
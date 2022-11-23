export class GridCanvas {
    constructor(canvas, gridSpacing = 25, clickFn = () => {}) {
        this.canvasElement = canvas;
        this.ctx = canvas.getContext('2d');
        this.mousePosition = {};
        this.isMouseDown = false;
        this.isDragged = false;
        this.gridSpacing = gridSpacing;
        this.gridSize = {
            width: canvas.parentElement.offsetWidth,
            height: canvas.parentElement.offsetHeight
        }
        this.clickFn = clickFn;
        // Elements added should have a unique key
        // and draw(ctx) and intersected(mousePos: {x, y}) methods
        this.elements = [];
        this.focused = {
            key: 0,
            state: false
        }
        this.#prepareCanvas();
        this.#setDefaultValues();
        this.#addEventListeners();
        this.redrawCanvas();
    }

    #prepareCanvas() {
        this.canvasElement.width = this.gridSize.width;
        this.canvasElement.height = this.gridSize.height;
    }

    #setDefaultValues() {
        this.ctx.fillStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.lineCap = "round";
    }

    #addEventListeners() {
        this.canvasElement.addEventListener('mousedown', () => {
            this.isMouseDown = true;
            this.isDragged = true;
            setTimeout(() => {this.isDragged = false}, 250)
        });
        this.canvasElement.addEventListener('mouseup', () => {
            this.isMouseDown = false;
            this.#releaseFocus();
        });
        this.canvasElement.addEventListener('mousemove', (e) => {
            this.#dragElement(e);
        });
        this.canvasElement.addEventListener('click', (e) => {
            this.getIntersected(e);
            if(this.isDragged) {
                this.clickFn(e, this);
            }
            this.#releaseFocus();
        });
        this.canvasElement.addEventListener('wheel', (e) => {
            this.#rotateElement(e);
        })
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.gridSize.width, this.gridSize.height);
    }

    #drawGrid() {
        console.log(this.ctx.fillStyle);
        this.ctx.lineWidth = 1;
        for (let x = 0; x <= this.gridSize.width; x += this.gridSpacing) {
            this.ctx.moveTo(0.5 + x, 0);
            this.ctx.lineTo(0.5 + x, this.gridSize.height);
        }

        for (let x = 0; x <= this.gridSize.height; x += this.gridSpacing) {
            this.ctx.moveTo(0, 0.5 + x);
            this.ctx.lineTo(this.gridSize.width, 0.5 + x);
        }
        // this.ctx.strokeStyle = "black";
        this.ctx.stroke();
    }

    #drawElements() {
        for (let i = this.elements.length - 1; i >= 0; i--) {
            if (typeof this.elements[i]['draw'] === 'function') {
                this.elements[i]['draw'](this.ctx);
            }
        }
    }

    #getClosestAnchorPoint(x, y) {
        const xSplit = (x / this.gridSpacing).toString().split(".");
        const ySplit = (y / this.gridSpacing).toString().split(".");

        let anchorPoint = {
            x: 0,
            y: 0
        }
        if (xSplit[1] && xSplit[1].charAt(0) >= 5) {
            anchorPoint.x = (parseInt(xSplit[0]) + 1) * this.gridSpacing;
        } else {
            anchorPoint.x = xSplit[0] * this.gridSpacing;
        }
        if (ySplit[1] && ySplit[1].charAt(0) >= 5) {
            anchorPoint.y = (parseInt(ySplit[0]) + 1) * this.gridSpacing;
        } else {
            anchorPoint.y = ySplit[0] * this.gridSpacing;
        }
        return anchorPoint;
    }

    getIntersected(e) {
        this.#getMousePosition(e);
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i]['intersected'](this.mousePosition)) {
                this.focused.key = this.elements[i]['key'];// circles.move(i, 0);
                this.focused.state = true;
                break;
            }
        }
    }

    #dragElement(e) {
        if (!this.isMouseDown) {
            return;
        }
        this.#getMousePosition(e);
        const anchorPos = this.#getClosestAnchorPoint(this.mousePosition.x, this.mousePosition.y);
        //if any circle is focused
        if (this.focused.state) {
            const focusedElement = this.elements.find(el => el['key'] === this.focused.key);
            focusedElement.x = anchorPos.x;
            focusedElement.y = anchorPos.y;
            this.redrawCanvas();
            return;
        }
        //no circle currently focused check if  circle is hovered
        this.getIntersected(e);
        this.redrawCanvas();
    }
    #rotateElement(e) {
        e.preventDefault();
        this.#getMousePosition(e);

        const focusedElement = this.elements.find(el => el['key'] === this.focused.key);
        if(focusedElement.intersected(this.mousePosition) && focusedElement['rotation']) {
            focusedElement['rotation'] = focusedElement['rotation'] + 22.5;
            this.redrawCanvas();
        }
    }

    #releaseFocus() {
        this.focused.state = false;
    }

    #getMousePosition(e) {
        let rect = this.canvasElement.getBoundingClientRect();
        this.mousePosition = {
            x: Math.round(e.x - rect.left),
            y: Math.round(e.y - rect.top)
        }
    }

    getContext() {
        return this.ctx;
    }

    getElements() {
        return this.elements;
    }
    setElements(elements) {
        this.elements = elements;
        this.redrawCanvas();
    }

    redrawCanvas() {
        console.log(this.ctx.fillStyle);
        this.clearCanvas();
        this.#drawElements();
        this.#drawGrid();
    }
}
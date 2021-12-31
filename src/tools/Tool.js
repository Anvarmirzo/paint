export class Tool {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.destroyEvents();
	}

	/**
	 * @param {string} color
	 */

	set fillColor(color) {
		this.ctx.fillStyle = color;
	}

	/**
	 * @param {string} color
	 */
	set strokeColor(color) {
		this.ctx.strokeStyle = color;
	}

	/**
	 * @param {string} width
	 */
	set lineWidth(width) {
		this.ctx.lineWidth = width;
	}

	destroyEvents() {
		this.canvas.onmouseup = null;
		this.canvas.onmousedown = null;
		this.canvas.onmousemove = null;
	}
}

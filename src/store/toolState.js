import { makeAutoObservable } from 'mobx';

class ToolStateInitial {
	tool = null;
	constructor() {
		makeAutoObservable(this);
	}

	setTool(tool) {
		this.tool = tool;
	}

	setFillColor(color) {
		this.tool.fillColor = color;
	}

	setStrokeColor(color) {
		this.tool.strokeColor = color;
	}

	setLineWidth(width) {
		this.tool.lineWidth = width;
	}
}

export const ToolState = new ToolStateInitial();

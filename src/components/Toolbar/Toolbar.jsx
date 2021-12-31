import React from 'react';
import { CanvasState } from '../../store/canvasState';
import { ToolState } from '../../store/toolState';
import '../../styles/toolbar.scss';
import { Brush } from '../../tools/Brush';
import { Circle } from '../../tools/Circle';
import { Eraser } from '../../tools/Eraser';
import { Line } from '../../tools/Line';
import { Rect } from '../../tools/Rect';

export const Toolbar = () => {
	const changeColor = (e) => {
		ToolState.setStrokeColor(e.target.value);
		ToolState.setFillColor(e.target.value);
	};

	return (
		<div className='toolbar'>
			<button
				className='toolbar__btn brush'
				title='brush'
				onClick={() => ToolState.setTool(new Brush(CanvasState.canvas))}
			/>
			<button
				className='toolbar__btn rect'
				title='rect'
				onClick={() => ToolState.setTool(new Rect(CanvasState.canvas))}
			/>
			<button
				className='toolbar__btn circle'
				title='circle'
				onClick={() => ToolState.setTool(new Circle(CanvasState.canvas))}
			/>
			<button
				className='toolbar__btn eraser'
				title='eraser'
				onClick={() => ToolState.setTool(new Eraser(CanvasState.canvas))}
			/>
			<button
				className='toolbar__btn line'
				title='line'
				onClick={() => ToolState.setTool(new Line(CanvasState.canvas))}
			/>
			{/* <button className='toolbar__btn colored' title='palette' /> */}
			<input type='color' onChange={(e) => changeColor(e)} />
			<button
				className='toolbar__btn undo'
				title='Undo'
				onClick={() => CanvasState.undo()}
			/>
			<button
				className='toolbar__btn redo'
				title='Redo'
				onClick={() => CanvasState.redo()}
			/>
			<button className='toolbar__btn save' title='Save' />
		</div>
	);
};

import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { CanvasState } from '../../store/canvasState';
import { ToolState } from '../../store/toolState';
import '../../styles/canvas.scss';
import { Brush } from '../../tools/Brush';

export const Canvas = observer(() => {
	const canvasRef = useRef(null);

	useEffect(() => {
		CanvasState.setCanvas(canvasRef.current);
		ToolState.setTool(new Brush(canvasRef.current));
	}, []);

	const mouseDownHandler = () => {
		CanvasState.pushToUndo(canvasRef.current.toDataURL());
	};

	return (
		<div className='canvas'>
			<canvas
				onMouseDown={() => mouseDownHandler()}
				ref={canvasRef}
				width={600}
				height={400}
			>
				Your browser is not supported canvas
			</canvas>
		</div>
	);
});

import React from 'react';
import { ToolState } from '../../store/toolState';

export const SettingBar = () => {
	return (
		<div className='settingBar'>
			<label htmlFor='line-width'>Толщина линий</label>
			<input
				onChange={(e) => ToolState.setLineWidth(e.target.value)}
				id='line-width'
				type='number'
				defaultValue={1}
				min={1}
				max={50}
			/>
			<label htmlFor='stroke-color'>Цвет обводки</label>
			<input
				onChange={(e) => ToolState.setStrokeColor(e.target.value)}
				id='stroke-color'
				type='color'
			/>
		</div>
	);
};

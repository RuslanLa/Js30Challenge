import React from 'react';
import BaseControl from './BaseControl';
export function RangeControl(props) {
    return (<BaseControl id={props.id} title={props.title}>
        <input id={props.id} type="range" min={props.min} max={props.max} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
    </BaseControl>);
}
export default RangeControl;
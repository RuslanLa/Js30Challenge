import React from 'react';
import BaseControl from './BaseControl';
export function ColorControl(props) {
    return (<BaseControl id='base' title='Base Color'>
        <input id="base" type="color" value={props.value} onChange={(e)=>props.onChange(e.target.value)}/>
    </BaseControl>)
}
export default ColorControl;
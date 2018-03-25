import React from 'react';
import RangeControl from './RangeControl';
export function SpacingControl(props) {
    return (<RangeControl id='spacing' min='10' max='200' title='Spacing' value={props.value} onChange={props.onChange}/>);
}
export default SpacingControl;
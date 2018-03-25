import React from 'react';
import RangeControl from './RangeControl';

export function BlurControl(props){
    return (<RangeControl id='blur' min='0' max='25' title='Blur' value={props.value} onChange={props.onChange}/>);    
}
export default BlurControl;
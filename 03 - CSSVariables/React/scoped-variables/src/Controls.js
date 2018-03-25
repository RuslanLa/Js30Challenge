import React from 'react';
import SpacingControl from './SpacingControl';
import BlurControl from './BlurControl';
import ColorControl from './ColorControl';
export function Controls(props) {

    const buildStyleChange = (propertyName) => (value) => {
        props.styleOnChange(
            {
                ...props.values,
                [propertyName]: value
            }
        );
    };
    return (<div className="controls">
        <SpacingControl value={props.values.imgBorder} onChange={buildStyleChange('imgBorder')} />
        <BlurControl value={props.values.imgFilterBlur} onChange={buildStyleChange('imgFilterBlur')} />
        <ColorControl value={props.values.imgBorderColor} onChange={buildStyleChange('imgBorderColor')} />
    </div>);
}
export default Controls;
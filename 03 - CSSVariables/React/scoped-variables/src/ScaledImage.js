import React from 'react';
import img from "./black-and-white-tiles-clean-corridor.jpg";

export function ScaledImage(props) {
    const style = {
        border: `${props.style.imgBorder}px solid ${props.style.imgBorderColor}`,
        filter: `blur(${props.style.imgFilterBlur}px)`
    }
    return (<div className="img-container">
        <img className="scaled" style={style} src={img}></img>
    </div>);
}
export default ScaledImage;
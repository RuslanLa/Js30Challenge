import React from 'react';
export function BaseControl(props) {
    return (<div>
        <label htmlFor={props.id}>{props.title + ':'}</label>
        {props.children}
    </div>);
}
export default BaseControl;
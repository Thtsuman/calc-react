import React from 'react';
import './clear-button.style.css';

const ClearButton = (props) => (
    <div className="clear-btn" onClick={props.handleClear}>{props.children}</div>
);

export default ClearButton;
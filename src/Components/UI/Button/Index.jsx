import React from 'react';
import './index.css'

const button = props => <button onClick={props.clicked} className="btn">{props.children}</button>

export default button
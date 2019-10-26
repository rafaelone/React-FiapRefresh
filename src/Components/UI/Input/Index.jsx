import React from 'react'

const input = props => {
    let inputElement = null;
    switch(props.typeElement){
        case 'input':
            inputElement =  <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.changed} id={props.id}/>
        default:
            inputElement =  <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.changed} id={props.id}/>
    }
    return inputElement
}

export default input
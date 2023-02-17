import React, {FC} from 'react';
import './button.css'
export interface ButtonCProps{
    children: React.ReactNode
    onClick?: () => void

}

const ButtonClick:FC<ButtonCProps> = (props) => {
    return (
        <button onClick={props.onClick} className={"btn-click-m m-1"} style={{ borderStyle:"1px solid dark", borderRadius:"0px", width:'100px', height:"50px"}}>
            {props.children}
        </button>
    );
};

export default ButtonClick;
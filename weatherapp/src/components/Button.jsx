import React from 'react';

const Button =(props) => {
    return(
        <button className="btn" onClick={props.onCLick}>
            {props.value}
        </button>
    );
};

export default Button;
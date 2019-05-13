import React from 'react';

const Num = props => {
    return (
        <div>
            <input value={props.num} onChange={props.handleChange}/>
        </div>
    );
};

export default Num;
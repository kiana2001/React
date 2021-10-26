import React from 'react';

const User = (props) => {
   const {name} = props
    return (
        <div>
            <p> hi I'm {name} </p>
        </div>
    );
};

export default User;
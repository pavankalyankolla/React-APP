import React from 'react';

// const Button = () => {
//     return(
//         <button>

//         </button>
//     )
// }

const Button = ({title = "none"}) => (
    <div>
        <button className="button">{title}</button>
    </div>
)


export default Button;
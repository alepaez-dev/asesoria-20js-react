import React from "react";

// Cambia una prop de un componente, y el componente se vuelve a renderizar.
const Input = ({ type, label, id }) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} type={type} />
        </div>
    );
};

export default Input;

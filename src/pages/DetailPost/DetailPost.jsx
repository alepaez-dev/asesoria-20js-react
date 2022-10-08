import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { getPost } from "../../services/post"

const DetailPost = () => {

    // Local states
    const [data, setData] = useState(null)

    // Cuando cargue el compoinente
    useEffect(() => {
        getPost("6341d749765e6de9e06f76a6")
        .then((data) => {
            console.log("data en detalle de post componente", data)

            // Otro servicion/backend
            setData(data.data)
        })
    }, [])

    if(!data) {
        return <div>Cargando ....</div>
    }
    return (
        <div>
            <div>
                <p> Name: {data.user.name}</p>
                <p> Correo: {data.user.email}</p>
            </div>
            <div>
                <p>{data.post.title}</p>
                <p>{data.post.description}</p>
            </div>
        </div>
    );
};

export default DetailPost;

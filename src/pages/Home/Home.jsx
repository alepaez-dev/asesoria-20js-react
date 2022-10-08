import React, { useState, useEffect } from "react";
import { useResponsive } from "../../hooks/useResponsive"
import { useUser } from "../../hooks/useUser"
import Button from "../../components/Button";
import Card from "../../components/Card";

// ES6 -> arrow functions, const
// Class componentes
// constructors, function -> ciclo de vida
// fuincion para cuando recien entras al componente -> checked
// funcion para cuando actualizas el componente -> actualizar
// funcion para cuando te sales el componente
// Hook -> useEffect
// useState, useEffect
 
const Home = () => {
    const data = [
        {
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--UpX83H3C--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yutqst8ujn9yyen2wq6e.png",
            authorName: "Alejandra Paez",
            profileSrc:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--Q9Kwp-uC--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/609838/bc3ac0a6-8c2e-4c51-8fdd-83bd3d6ec159.jpeg",
            date: "1 Oct",
            title: "Can beginners make a simple but meaningful contribution? Some unconventional advice #hacktoberfest",
            tags: ["showdev", "typescript", "webdev", "react", "kodemia"],
            timeToRead: 6,
            reactions: {
                hearts: 4,
                comments: 7,
            },
        },
        {
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--DGQo6Ztq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5hm34sgxq0uq15z0hxm.png",
            authorName: "Freddy Andrei",
            profileSrc:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--xTIdP4S9--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/89864/cd0d2f13-df2e-41c5-85a5-c4f1a31ed66d.jpg",
            date: "30 Sep",
            title: "Celebrate Open Source with Hacktoberfest",
            tags: ["python", "web3", "backend"],
            timeToRead: 1,
            reactions: {
                hearts: 14,
                comments: 2,
            },
        },
        {
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--DGQo6Ztq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5hm34sgxq0uq15z0hxm.png",
            authorName: "Freddy Andrei",
            profileSrc:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--xTIdP4S9--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/89864/cd0d2f13-df2e-41c5-85a5-c4f1a31ed66d.jpg",
            date: "30 Sep",
            title: "Celebrate Open Source with Hacktoberfest",
            tags: ["python", "web3", "backend"],
            timeToRead: 1,
            reactions: {
                hearts: 14,
                comments: 2,
            },
        },
        {
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--DGQo6Ztq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5hm34sgxq0uq15z0hxm.png",
            authorName: "Freddy Andrei",
            profileSrc:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--xTIdP4S9--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/89864/cd0d2f13-df2e-41c5-85a5-c4f1a31ed66d.jpg",
            date: "30 Sep",
            title: "Celebrate Open Source with Hacktoberfest",
            tags: ["python", "web3", "backend"],
            timeToRead: 1,
            reactions: {
                hearts: 14,
                comments: 2,
            },
        },
        {
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--DGQo6Ztq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5hm34sgxq0uq15z0hxm.png",
            authorName: "Freddy Andrei",
            profileSrc:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--xTIdP4S9--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/89864/cd0d2f13-df2e-41c5-85a5-c4f1a31ed66d.jpg",
            date: "30 Sep",
            title: "Celebrate Open Source with Hacktoberfest",
            tags: ["python", "web3", "backend"],
            timeToRead: 1,
            reactions: {
                hearts: 14,
                comments: 2,
            },
        },
    ];
    const [posts, setPosts] = useState(data);
    const [savedPosts, setSavedPosts] = useState([]);
    // 1era Hooks -> data -> !undefined
    // Renderizar otro componente hijo -> 2da hook
    const { name , isLoading } = useResponsive()
    // useUser(name)
   
    console.log("isLoading 1", isLoading)


    // useEffect, useSate -> hooks de react
    // Custom Hooks
    // se ouede hacer mas de 1 y en donde
    // Parametros de useEffect: 1 -> callback, 2 -> lo que va a escuchar
    // arreglo vacio -> que solo se va a hacer cuando se renderice el componente

    // useEffect(() => {
    //   // Hacen peticion al backend
    //   console.log("savedPosts", savedPosts)
    //   // actualizar
    //   // aqui adentro
    // },[savedPosts])



    if(isLoading) return <div>esta cargando</div>

    // Despues
    return (
        <div>
            <Button
                style={{
                    fontWeight: "800",
                }}
                className="btnTertiary"
                text="Latest"
                onClick={() => setPosts(data)}
            />
            <Button
                style={{
                    fontWeight: "300",
                }}
                className="btnTertiary"
                text="Saved"
                onClick={() => setPosts(savedPosts)}
            />
          <section>
                {posts.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            hasImage={index === 0}
                            post={card}
                            savedPosts={savedPosts}
                            setSavedPosts={setSavedPosts}
                            index={index}
                            name={name}
                        />
                    );
                })}
            </section>
        </div>
    );
};

export default Home;

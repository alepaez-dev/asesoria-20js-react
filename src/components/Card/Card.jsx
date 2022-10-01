import React, { useState } from "react";
import "./Card.css";
import ProfilePicture from "../ProfilePicture";
import Tag from "../Tag";
import Heart from "../../assets/icons/Heart";
import Comment from "../../assets/icons/Comment";
import Save from "../../assets/icons/Save";
import Reaction from "../Reaction";

const Card = ({ 
    hasImage,
    post, 
    setSavedPosts, 
    savedPosts,
    index
}) => {
    // Local states
    const [isSaved, setIsSaved] = useState(false);

    const handlerOnSave = () => {
        const newSavedPosts = [...savedPosts, post];
        setIsSaved(true);
        setSavedPosts(newSavedPosts);
    };

    const handlerOnDelete = () => {
        console.log("index", index)
        const newSavedPosts = savedPosts.filter((post, idx) => idx !== index)
        setIsSaved(false);
        setSavedPosts(newSavedPosts);
    }
    return (
        <div className="card-container">
            {hasImage && (
                <img className="cardImage" src={post.img} alt="No hay" />
            )}
            <div className="info-container">
                <div className="author-container">
                    <ProfilePicture src={post.profileSrc} />
                    <div className="authorInfo">
                        <span>{post.authorName}</span>
                        <span>{post.date}</span>
                    </div>
                </div>
                <p className="card-title">{post.title}</p>
                <div className="tags-container">
                    {post.tags.map((tag, idx) => (
                        <Tag key={idx} text={tag} />
                    ))}
                </div>
                <div className="extra-info">
                    <div className="reaction-container">
                        <Reaction value={post.reactions.hearts}>
                            <Heart />
                        </Reaction>
                        <Reaction value={post.reactions.comments}>
                            <Comment />
                        </Reaction>
                    </div>
                    <div className="save-container">
                        <span
                            style={{
                                paddingRight: "20px",
                            }}
                        >
                            {post.timeToRead} min read
                        </span>
                        {/* () => setPosts(info) */}
                        {!isSaved ? (
                            <button
                                onClick={() => handlerOnSave()}
                                className="save-button"
                            >
                                <Save />
                            </button>
                        ) : (
                            <button
                                onClick={handlerOnDelete}
                                className="save-button"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

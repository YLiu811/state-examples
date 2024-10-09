import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
    const defaultLiked = false;
    const defaultLikeCount = 1;
    const [liked, setLiked] = useState(defaultLiked);
    const [likeCount, setLikeCount] = useState(defaultLikeCount);

    const getButton = () => {
        if (liked) {
            return "cancel like"
        } else {
            return "like"
        }
    }
    return (
        <div className="likeButton">
            <button 
                onClick = {() => {
                    setLiked(!liked);
                    setLikeCount(liked? likeCount -1 : likeCount +1)
                }}> 
            { getButton() }
            </button>
            <span> {likeCount} </span>
        </div>
    )
}

export default LikeButton;
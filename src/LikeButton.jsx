import { useState } from 'react';
import PropTypes from 'react';
import './LikeButton.css';

function LikeButton(props) {
    const defaultLiked = false;
    const defaultLikeCount = 1;
    const [liked, setLiked] = useState(props.liked);
    const [likeCount, setLikeCount] = useState(props.likeCount);

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

LikeButton.propTypes = {
    liked: PropTypes.bool,
    likeCount: PropTypes.number,
}

LikeButton.defaultProps = {
    liked: false,
    likeCount: 0,
}

export default LikeButton;
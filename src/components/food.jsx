import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './food.css'
import { addLike, addToBug } from "../features/foodSlice";

export default function Food(props) {
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const food = props.props;
    const navigate = useNavigate();
    const likedIds = useSelector(state => state.food_Slice.likedFoodIds);
    const isLiked = likedIds.includes(food.id);

    const moveToMoreDetails = () => {
        navigate(`/moreDetails/${food.id}`)
    }

    const addToCart = () => {
        dispatch(addToBug(food));
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    }

    const handleLike = () => {
        dispatch(addLike({ id: food.id }))
    }

    return (
        <div className="boutique-card">
            <div className="card-image-section">
                <img className="card-main-img" src={food.img} alt={food.name} />
                <div className="card-price-tag">{food.price} ₪</div>
                <button className="card-like-icon" onClick={handleLike}>
                    {isLiked ? '❤️' : '🤍'}
                </button>
            </div>

            <div className="card-content-section">
                <h3 className="card-item-title">{food.name}</h3>

                <p className="card-item-desc">
                    {food.description}
                </p>

                <div className="card-meta-info">
                    <span className="likes-count">אהבו את המנה: {food.like}</span>
                </div>
                <div className="card-action-links">
                    <button className="link-style-btn" onClick={moveToMoreDetails}>
                        פרטים נוספים
                    </button>
                    <button className="link-style-btn bold-gold" onClick={addToCart} disabled={isAdded}>
                        {isAdded ? "✅ נוסף!" : "הוסף לסל"}
                    </button>
                </div>
            </div>
        </div>
    );
}
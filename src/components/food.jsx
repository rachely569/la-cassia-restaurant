import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './food.css'
import { addLike, addToBug } from "../features/foodSlice";

export default function Food(props) {
    const [isAdded, setIsAdded] = useState(false);////כפתור הלחיצה של ההוספה לסל בהתחלה מכובה 
    const dispatch = useDispatch();
    const food = props.props;
    const navigate = useNavigate();
    const likedIds = useSelector(state => state.food_Slice.likedFoodIds);
    const isLiked = likedIds.includes(food.id);//cheak

    const moveToMoreDetails = () => {
        navigate(`/moreDetails/${food.id}`)
    }

    const addToCart = () => {
        dispatch(addToBug(food));
        setIsAdded(true);// עכשיו נדלק כפתור הלחיצה של ההוספה לסל
        setTimeout(() => {
            setIsAdded(false);//נכבה לאחר 3 שניות
        }, 3000);
    }

    const handleLike = () => {//הוספת לייק לפי ID
        dispatch(addLike({ id: food.id }))
    }

    return (
        <div className="boutique-card">
            {/* אזור התמונה */}
            <div className="card-image-section">
                <img className="card-main-img" src={food.img} alt={food.name} />
                <div className="card-price-tag">{food.price} ₪</div>

                {/* כפתור לייק צף על התמונה */}
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

                {/* כפתורי פעולה בסגנון קישורי Header */}
                <div className="card-action-links">
                    <button className="link-style-btn" onClick={moveToMoreDetails}>
                        פרטים נוספים
                    </button>
                    <button className="link-style-btn bold-gold" onClick={addToCart} disabled={isAdded}>
                        {isAdded ? "✅ נוסף!" : "הוסף לסל"}
                        {/*אחרת "הוסף לסל" (isAdded )אם ההוספה לסל נדלק בפונקציה */}
                    </button>
                </div>
            </div>
        </div>
    );
}
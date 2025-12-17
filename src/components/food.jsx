// // import React, { useState } from "react"
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import './food.css'
// // import { addLike, addToBug } from "../features/foodSlice";
// // import { useSelector } from "react-redux";

// // export default function Food(props) {

// //     const [isAdded, setIsAdded] = useState(false);
// //     const dispatch = useDispatch();
// //     const food = props.props
// //     const Navigate = useNavigate();
// //     const likedIds = useSelector(state => state.food_Slice.likedFoodIds);
// //     const isLiked = likedIds.includes(food.id);


// //     const moveToMoreDetails = () => {
// //         Navigate(`/moreDetails/${food.id}`)
// //     }

// //         const addToCart = () => {
// //         dispatch(addToBug(food));
// //         setIsAdded(true);
// //         setTimeout(() => {
// //             setIsAdded(false);
// //         }, 3000);
// //     }

// //     const addLiks = () => {
// //         dispatch(addLike({ id: food.id }))
// //     }

// //     return (
// //             <div className="login-page-container">
// //         <div className="card">
// //             <h1>{food.name}</h1>
// //             <div className="item-content-wrapper">
// //                 <img className="img" src={food.img} alt="img" />
// //                 <div className="item-details">
// //                     <h4>מחיר: {food.price}</h4>
// //                     <div className="item-details">
// //                     <h4>{food.description}</h4>
// //                     <div className="action-buttons">
// //                         <h5>Liked {food.like}</h5>
// //                         <button onClick={addLiks}className={isLiked ? 'liked' : ''} >
// //                             {isLiked ? '🤍' : '❤️'}
// //                         </button>
// //                         <button onClick={moveToMoreDetails}>יותר פרטים</button>
// //                         <button onClick={addToCart} disabled={isAdded}>
// //                             {isAdded ? "✅ נוסף לסל!" : "הוסף לסל"}
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //             </div>
// //         </div>
// //          </div>
// //     );
// // }



// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import './food.css'
// import { addLike, addToBug } from "../features/foodSlice";

// export default function Food(props) {
//     const [isAdded, setIsAdded] = useState(false);
//     const dispatch = useDispatch();
//     const food = props.props;
//     const Navigate = useNavigate();
//     const likedIds = useSelector(state => state.food_Slice.likedFoodIds);
//     const isLiked = likedIds.includes(food.id);

//     const moveToMoreDetails = () => {
//         Navigate(`/moreDetails/${food.id}`)
//     }

//     const addToCart = () => {
//         dispatch(addToBug(food));
//         setIsAdded(true);
//         setTimeout(() => {
//             setIsAdded(false);
//         }, 3000);
//     }

//     const addLiks = () => {
//         dispatch(addLike({ id: food.id }))
//     }

//     return (
//         <div className="food-card-wrapper">
//             <div className="food-card-inner">
//                 <div className="food-header">
//                     <h1 className="food-title">{food.name}</h1>
//                 </div>
                
//                 <div className="food-body">
//                     <img className="food-img" src={food.img} alt={food.name} />
                    
//                     <div className="food-info">
//                         <h4 className="food-price">מחיר: {food.price} ₪</h4>
//                         <p className="food-description">{food.description}</p>
                        
//                         <div className="food-actions">
//                             <div className="like-section">
//                                 <button className="like-btn" onClick={addLiks}>
//                                     {isLiked ? '❤️' : '🤍'}
//                                 </button>
//                                 <span className="like-count">אהבו: {food.like}</span>
//                             </div>
                            
//                             <div className="button-group">
//                                 <button className="more-details-btn" onClick={moveToMoreDetails}>יותר פרטים</button>
//                                 <button className="add-to-cart-btn" onClick={addToCart} disabled={isAdded}>
//                                     {isAdded ? "✅ נוסף!" : "הוסף לסל"}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

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
    
    // שליפת סטטוס הלייק מהסטור
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
                    </button>
                </div>
            </div>
        </div>
    );
}
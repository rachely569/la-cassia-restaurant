// import React, { useEffect, useState } from "react"
// import { useSelector ,useDispatch} from "react-redux";
// import { useParams } from "react-router";
// import { addToBug } from "../features/foodSlice";
// import './moreDtetails.css'

// export default function MoreDetails() {
//     const [isAdded, setIsAdded] = useState(false);
//     const dispatch = useDispatch();
//     const addToCart = () => {
//         dispatch(addToBug(detailsFromStore));
//         setIsAdded(true);
//         setTimeout(() => {
//             setIsAdded(false);
//         }, 3000);
//     }
//     const params = useParams();
//     const detailsFromStore = useSelector(details => details.food_Slice.foods.find(d => d.id === parseInt(params.id)))

//     useEffect(() => {
//     }, [detailsFromStore])
//     return <>
//         <div className="product">
//             <h1>{detailsFromStore.name}</h1>
//             <img src={detailsFromStore.img} alt="img" />
//             <h2>{detailsFromStore.description}</h2>
//             <h2>{detailsFromStore.price}</h2>
//             <button onClick={addToCart}>{isAdded ? "✅ נוסף לסל!" : "הוסף לסל"}</button>
//         </div>
//     </>
// }


import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToBug } from "../features/foodSlice";
import './moreDtetails.css'

export default function MoreDetails() {
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    
    // שליפת המוצר מהסטור
    const detailsFromStore = useSelector(state => 
        state.food_Slice.foods.find(d => d.id === parseInt(params.id))
    );

    const addToCart = () => {
        dispatch(addToBug(detailsFromStore));
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    }

        useEffect(() => {
    }, [detailsFromStore])
    if (!detailsFromStore) return <div className="details-page-container">טוען...</div>;


    return (
        <div className="details-page-container">
            <div className="product-wrapper">
                
                <div className="product-image-container">
                    <img src={detailsFromStore.img} alt={detailsFromStore.name} />
                </div>

                <div className="product-info-container">
                    <h1>{detailsFromStore.name}</h1>
                    <p className="product-description">{detailsFromStore.description}</p>
                    <div className="product-price">{detailsFromStore.price} ₪</div>
                    
                    <button 
                        className="add-to-cart-modern" 
                        onClick={addToCart} 
                        disabled={isAdded}
                    >
                        {isAdded ? "✅ נוסף לסל בהצלחה" : "הוסף למשלוח"}
                    </button>
                </div>

            </div>
        </div>
    );
}
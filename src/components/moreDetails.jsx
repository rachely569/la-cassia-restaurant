import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addToBug } from "../features/foodSlice";
import './moreDtetails.css'

export default function MoreDetails() {

    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

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
                    <div className="buttons-container">
                        <button
                            className="add-to-cart-modern"
                            onClick={addToCart}
                            disabled={isAdded}
                        >
                            {isAdded ? "✅ נוסף לסל בהצלחה" :"הוסף לסל"}
                        </button>

                        <button
                            className="add-to-cart-modern"
                            onClick={() => navigate('/foods')}
                        >
                            חזרה לתפריט
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
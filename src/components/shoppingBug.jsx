import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToBug, dellInBug } from "../features/foodSlice"; 
import './shoppingBug.css'

export default function ShoppingBug() {
    const viewShopingBug = useSelector(state => state.food_Slice.shoppingCart)
    const total = useSelector(state => state.food_Slice.totalPrice); 
    const dispatch = useDispatch();
    
    if (viewShopingBug.length === 0) {
        return <h2 className="empty-cart" dir="rtl">סל הקניות שלך ריק. הגיע הזמן להתפנק...</h2>;
    }
    
    return (
        <div className="shopping-cart-page" dir="rtl">
            <h1>YOUR ORDER</h1>
            
            <div className="cart-items-container">
                {viewShopingBug.map(item => (
                    <div key={item.id} className="cart-item-card">
                        
                        <div className="item-image">
                            <img src={item.img} alt={item.name} />
                        </div>
                        
                        <div className="item-details">
                            <h2 className="item-name">{item.name}</h2>
                            <p className="item-description">{item.description}</p>
                            <p className="item-price">מחיר יחידה: {item.price} ₪</p>
                            
                            <div className="item-quantity-control">
                                <span className="quantity-label">כמות:</span>
                                <button 
                                    onClick={() => dispatch(dellInBug(item.id))}
                                    className="quantity-btn"
                                >-</button>
                                <span className="item-quantity">{item.quantity}</span>
                                <button 
                                    onClick={() => dispatch(addToBug(item))}
                                    className="quantity-btn"
                                >+</button>
                            </div>
                        </div>

                        <div className="item-total-section">
                            <p className="item-subtotal">{(item.price * item.quantity).toFixed(2)} ₪</p>
                        </div>

                    </div>
                ))}
            </div>
            
            <div className="cart-summary">
                <h2>סיכום תענוגות</h2>
                <p className="total-price">
                    סה"כ לתשלום: {total.toFixed(2)} ₪
                </p>
                <button className="checkout-btn">המשך לתשלום מאובטח</button>
            </div>
        </div>
    );
}
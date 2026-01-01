
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

export default function Checkout() {

    const navigate = useNavigate();
    // const users = useSelector(state => state.usersSlice.users);
    const cartItems = useSelector(state => state.food_Slice.shoppingCart || []);
    const [details, setDetails] = useState({
        fullName: '',
        phone: '',
        city: '',
        address: '',
        paymentMethod: 'credit-card',
        deliveryType: 'delivery'
    });
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (!currentUser) {
            alert('עליך להיות מחובר כדי לבצע רכישה. הנך מועבר להרשמה.');
            navigate('/logIn');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ההזמנה התקבלה בהצלחה! תודה שקנית ב-La Cassia');
        navigate('/homePage');
    };

    return (
        <div className="checkout-container">
            <h2 className="boutique-title">תשלום ומשלוח</h2>
            
            <form className="checkout-layout" onSubmit={handleSubmit}>
                <div className="checkout-section">
                    <h3>פרטי משלוח</h3>
                    <div className="input-group">
                        <input type="text" placeholder="שם מלא" required 
                               onChange={e => setDetails({...details, fullName: e.target.value})} />
                        <input type="tel" placeholder="טלפון" required 
                               onChange={e => setDetails({...details, phone: e.target.value})} />
                        <input type="text" placeholder="עיר" required 
                               onChange={e => setDetails({...details, city: e.target.value})} />
                        <input type="text" placeholder="כתובת מלאה (רחוב ומספר בית)" required 
                               onChange={e => setDetails({...details, address: e.target.value})} />
                    </div>

                    <h3 className="sub-section-title">אפשרויות משלוח</h3>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input type="radio" name="delivery" value="delivery" checked={details.deliveryType === 'delivery'}
                                   onChange={() => setDetails({...details, deliveryType: 'delivery'})} />
                            משלוח עד הבית (30 ₪)
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="delivery" value="pickup" checked={details.deliveryType === 'pickup'}
                                   onChange={() => setDetails({...details, deliveryType: 'pickup'})} />
                            איסוף עצמי
                        </label>
                    </div>
                </div>

                <div className="checkout-section">
                    <h3>אמצעי תשלום</h3>
                    <div className="payment-options">
                        <select value={details.paymentMethod} onChange={e => setDetails({...details, paymentMethod: e.target.value})}>
                            <option value="credit-card">כרטיס אשראי</option>
                            <option value="bit">Bit</option>
                            <option value="cash">מזומן לשליח</option>
                        </select>
                    </div>

                    <div className="order-summary">
                        <h3>סיכום הזמנה</h3>
                        <div className="summary-row">
                            <span>סה"כ פריטים:</span>
                            <span>{totalPrice} ₪</span>
                        </div>
                        <div className="summary-row">
                            <span>דמי משלוח:</span>
                            <span>{details.deliveryType === 'delivery' ? 30 : 0} ₪</span>
                        </div>
                        <div className="summary-row total">
                            <span>לתשלום סופי:</span>
                            <span>{totalPrice + (details.deliveryType === 'delivery' ? 30 : 0)} ₪</span>
                        </div>
                    </div>

                    <div className="checkout-actions">
                        <button type="submit" className="payment-btn">בצע הזמנה</button>
                        <button type="button" className="back-link-btn" onClick={() => navigate(-1)}>חזרה לסל</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
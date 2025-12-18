import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFood, deleteItems, updateFood } from "../features/foodSlice";
import './manager.css';
// בדף הזה צריך להוריד את כל הסטייל המקומי!!!!!!!!
// לבדוק מה כל שורה עושה - למפות את כל הדף
export default function Manager() {
    const dispatch = useDispatch();
    const foodList = useSelector(state => state.food_Slice.foods);
    const [editingId, setEditingId] = useState(null);//לבדוק מה הזה 
    const [editedItem, setEditedItem] = useState({});//לבדוק מה הזה 
    const [isAdding, setIsAdding] = useState(false);//לבדוק מה הזה 
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '', img: '' });

    return (
        <div className="admin-panel">
            <h2 className="managment">MANAGEMENT</h2>
{/* kלבדוק של הרסתי את הסטייל למקרה ש..
 style={{color: '#c5a059', textAlign: 'center'}}
*/}
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
{/* לשנות כדי שזה יהיה בCSS */}
                {!isAdding && <button onClick={() => setIsAdding(true)} className="save-btn">NEW ITEM +</button>}
            </div>
{/* לבדוק מה זה  */}
            {isAdding && (
                <div className="edit-card-layout" style={{ margin: '0 auto 30px', maxWidth: '800px' }}>
                    <div className="edit-form-fields">
                        <input placeholder="שם המנה" onChange={e => setNewItem({...newItem, name: e.target.value})} />
                        <input type="number" placeholder="מחיר" onChange={e => setNewItem({...newItem, price: e.target.value})} />
                        <textarea placeholder="תיאור קצר" onChange={e => setNewItem({...newItem, description: e.target.value})} />
                        <input placeholder="URL תמונה" onChange={e => setNewItem({...newItem, img: e.target.value})} />
                        <div className="edit-actions-line">
                            <button className="save-btn" onClick={() => { dispatch(addFood({...newItem, id: Date.now()})); setIsAdding(false); }}>SAVE</button>
                            <button onClick={() => setIsAdding(false)}>CANCEL</button>
                        </div>
                    </div>
                </div>
            )}
{/* לבדוק מה זה */}
            <div className="food-list">
                {foodList.map(food => (
                    <div key={food.id} className="admin-product-card">
                        {editingId === food.id ? (
                            // editingId לבדוק מה זה- 
                            <div className="edit-card-layout">
                                <img src={editedItem.img} className="admin-card-img" style={{width: '180px'}} alt="preview" />
                                <div className="edit-form-fields">
                                    <input value={editedItem.name} onChange={e => setEditedItem({...editedItem, name: e.target.value})} />
                                    <input type="number" value={editedItem.price} onChange={e => setEditedItem({...editedItem, price: e.target.value})} />
                                    <textarea value={editedItem.description} onChange={e => setEditedItem({...editedItem, description: e.target.value})} />
                                    <div className="edit-actions-line">
                                        <button className="save-btn" onClick={() => { dispatch(updateFood(editedItem)); setEditingId(null); }}>UPDATE</button>
                                        <button onClick={() => setEditingId(null)}>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // אם זה לא(editingId) אז מה קורה
                            <>ד
                                <img src={food.img} className="admin-card-img" alt={food.name} />
                                <div className="admin-card-body">
                                    <div style={{flex: 1}}>
                                        <h3 style={{margin: '0 0 5px 0', fontSize: '1.2rem'}}>{food.name}</h3>
                                        <p style={{fontSize: '0.85rem', height: '40px', overflow: 'hidden'}}>{food.description}</p>
                                        <span style={{color: '#c5a059', fontWeight: 'bold'}}>{food.price} ₪</span>
                                    </div>
                                    <div className="edit-actions-line">
                                        <button onClick={() => { setEditingId(food.id); setEditedItem(food); }}>EDIT</button>
                                        <button style={{borderColor: '#8b0000', color: '#8b0000'}} onClick={() => dispatch(deleteItems(food.id))}>DELETE</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
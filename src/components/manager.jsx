import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFood, deleteItems, updateFood } from "../features/foodSlice";
import './manager.css';

export default function Manager() {
    const dispatch = useDispatch();
    const foodList = useSelector(state => state.food_Slice.foods);
    
    const [editingId, setEditingId] = useState(null);
    const [editedItem, setEditedItem] = useState({});
    const [isAdding, setIsAdding] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '', img: '' });

    return (
        <div className="admin-panel">
            <h2 className="managment">MANAGEMENT</h2>
            
            <div className="add-item-container">
                {!isAdding && (
                    <button onClick={() => setIsAdding(true)} className="save-btn">
                        NEW ITEM +
                    </button>
                )}
            </div>

            {isAdding && (
                <div className="edit-card-layout add-item-layout">
                    <div className="edit-form-fields">
                        <input placeholder="שם המנה" onChange={e => setNewItem({...newItem, name: e.target.value})} />
                        <input type="number" placeholder="מחיר" onChange={e => setNewItem({...newItem, price: e.target.value})} />
                        <textarea placeholder="תיאור קצר" onChange={e => setNewItem({...newItem, description: e.target.value})} />
                        <input placeholder="URL תמונה" onChange={e => setNewItem({...newItem, img: e.target.value})} />
                        <div className="edit-actions-line">
                            <button className="save-btn" onClick={() => { 
                                dispatch(addFood({...newItem, id: Date.now()})); 
                                setIsAdding(false); 
                            }}>SAVE</button>
                            <button onClick={() => setIsAdding(false)}>CANCEL</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="food-list">
                {foodList.map(food => (
                    <div key={food.id} className="admin-product-card">
                        {editingId === food.id ? (
                            <div className="edit-card-layout">
                                <img src={editedItem.img} className="admin-card-img admin-card-img-edit" alt="preview" />
                                <div className="edit-form-fields">
                                    <input value={editedItem.name} onChange={e => setEditedItem({...editedItem, name: e.target.value})} />
                                    <input type="number" value={editedItem.price} onChange={e => setEditedItem({...editedItem, price: e.target.value})} />
                                    <textarea value={editedItem.description} onChange={e => setEditedItem({...editedItem, description: e.target.value})} />
                                    <div className="edit-actions-line">
                                        <button className="save-btn" onClick={() => { 
                                            dispatch(updateFood(editedItem)); 
                                            setEditingId(null); 
                                        }}>UPDATE</button>
                                        <button onClick={() => setEditingId(null)}>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <img src={food.img} className="admin-card-img" alt={food.name} />
                                <div className="admin-card-body">
                                    <div className="admin-card-info">
                                        <h3>{food.name}</h3>
                                        <p>{food.description}</p>
                                        <span className="admin-card-price">{food.price} ₪</span>
                                    </div>
                                    <div className="edit-actions-line">
                                        <button onClick={() => { 
                                            setEditingId(food.id); 
                                            setEditedItem(food); 
                                        }}>EDIT</button>
                                        <button className="btn-delete" onClick={() => dispatch(deleteItems(food.id))}>
                                            DELETE
                                        </button>
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
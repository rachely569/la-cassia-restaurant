// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addFood, deleteItems, updateFood } from "../features/foodSlice";
// import './manager.css';

// export default function Manager() {
//     const dispatch = useDispatch();
//     const foodList = useSelector(state => state.food_Slice.foods);
//     const [editingId, setEditingId] = useState(null);
//     const [editedItem, setEditedItem] = useState({});
//     const [isAddingNew, setIsAddingNew] = useState(false);
//     const [newProductState, setNewProductState] = useState({
//         name: '',
//         price: '',
//         description: '',
//         img: ''
//     });

//     const handleNewProductChange = (e) => {
//         setNewProductState({ ...newProductState, [e.target.name]: e.target.value });
//     };

//     const addproduct = () => {
//         if (!newProductState.name || !newProductState.price) {
//             alert("אנא מלא שם מוצר ומחיר.");
//             return;
//         }
//         const productToAdd = {
//             ...newProductState, id: Date.now(), price: Number(newProductState.price)
//         };

//         dispatch(addFood(productToAdd));
//         setNewProductState({
//             name: '',
//             price: '',
//             description: '',
//             img: ''
//         });
//         setIsAddingNew(false);
//     };

//     const cancelAdd = () => {
//         setNewProductState({
//             name: '',
//             price: '',
//             description: '',
//             img: ''
//         });
//         setIsAddingNew(false);
//     };

//     const startAdding = () => {
//         setEditingId(null);
//         setIsAddingNew(true);
//     }
//     const delProduct = (id) => {
//         dispatch(deleteItems(id));
//     };

//     const updateProduct = (food) => {
//         setIsAddingNew(false);
//         setEditingId(food.id);
//         setEditedItem({ ...food });
//     };

//     const saveUpdate = () => {
//         dispatch(updateFood(editedItem));
//         setEditingId(null);
//     };

//     const handleChange = (e) => {
//         setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
//     };
//     return (
//         <div className="admin-panel">
//             <div className="admin-actions">
//                 {!isAddingNew && editingId === null && (
//                     <button onClick={startAdding}>+ הוסף מוצר חדש</button>
//                 )}
//             </div>
//             {isAddingNew && (
//                 <div className="add-new-product-form editing-mode admin-product-item">
//                     <h3>מילוי פרטי מוצר חדש</h3>

//                     <div className="field-group">
//                         <input
//                             name="img"
//                             value={newProductState.img}
//                             onChange={handleNewProductChange}
//                             placeholder="כתובת תמונה"
//                         />
//                     </div>

//                     <div className="field-group">
//                         <label>שם:</label>
//                         <input
//                             name="name"
//                             value={newProductState.name}
//                             onChange={handleNewProductChange}
//                             placeholder="שם מוצר"
//                         />
//                     </div>

//                     <div className="field-group">
//                         <label>מחיר:</label>
//                         <input
//                             name="price"
//                             type="number"
//                             value={newProductState.price}
//                             onChange={handleNewProductChange}
//                             placeholder="מחיר"
//                         />
//                     </div>

//                     <div className="field-group description-field">
//                         <label>תיאור:</label>
//                         <textarea
//                             name="description"
//                             value={newProductState.description}
//                             onChange={handleNewProductChange}
//                             placeholder="תיאור המוצר המלא"
//                         />
//                     </div>

//                     <div className="admin-actions">
//                         <button onClick={addproduct}>שמור מוצר חדש</button>
//                         <button onClick={cancelAdd}>בטל</button>
//                     </div>
//                 </div>
//             )}

//             <hr />
//             <h2>ניהול מוצרים קיימים</h2>
//             <div className="food-list-container">
//                 {foodList.map((food) => (
//                     <div key={food.id} className="admin-product-item">
//                         {editingId === food.id ? (
//                             <div className="editing-mode">
//                                 <div className="field-group">
//                                     <input
//                                         name="img"
//                                         value={editedItem.img || ''}
//                                         onChange={handleChange}
//                                         placeholder="כתובת תמונה" />
//                                 </div>
//                                 <div className="field-group">
//                                     <label>שם:</label>
//                                     <input name="name" value={editedItem.name || ''}
//                                         onChange={handleChange}
//                                         placeholder="שם מוצר " />
//                                 </div>
//                                 <div className="field-group">
//                                     <label>מחיר:</label>
//                                     <input name="price" type="number" value={editedItem.price || ''} onChange={handleChange}
//                                         placeholder="מחיר" />
//                                 </div>
//                                 <div className="field-group description-field">
//                                     <label>תיאור:</label>
//                                     <textarea
//                                         name="description"
//                                         value={editedItem.description || ''}
//                                         onChange={handleChange}
//                                         placeholder="תיאור המוצר המלא" />
//                                 </div>
//                                 <div className="admin-actions">
//                                     <button onClick={saveUpdate}>שמור</button>
//                                     <button onClick={() => setEditingId(null)}> בטל</button>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="read-mode">
//                                 <div className="product-image">
//                                     {food.img && <img src={food.img} alt={food.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
//                                 </div>
//                                 <div className="product-details">
//                                     <h3>{food.name}</h3>
//                                     <p><strong>מחיר:</strong> {food.price} ₪</p>
//                                     <p><strong>תיאור:</strong> {food.description}</p>
//                                 </div>
//                                 <div className="admin-actions">
//                                     <button onClick={() => updateProduct(food)}>✏️ עדכן</button>
//                                     <button onClick={() => delProduct(food.id)}>🗑️ מחק</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }





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
            <h2 style={{color: '#c5a059', textAlign: 'center'}}>MANAGEMENT</h2>

            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                {!isAdding && <button onClick={() => setIsAdding(true)} className="save-btn">NEW ITEM +</button>}
            </div>

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

            <div className="food-list">
                {foodList.map(food => (
                    <div key={food.id} className="admin-product-card">
                        {editingId === food.id ? (
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
                            <>
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
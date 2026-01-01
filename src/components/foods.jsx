import React, { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByCategory, sortByPrice } from '../features/foodSlice';
import Food from "./food";
import './foods.css';

export default function Foods() {
    const dispatch = useDispatch();
    const { 
        foods: foodFromStore = [], 
        filteredFoods = [], 
        selectedCategory = 'הכל',   
        // sortOrder = 'none',         
    } = useSelector(state => state.food_Slice);

    const listCategoey = useMemo(() => {
        const allCategories = foodFromStore.map(item => item.nameCategory ? item.nameCategory.trim() : '');
        return ['הכל', ...new Set(allCategories)];
    }, [foodFromStore]); 
    // const sortButtonText = `מיון מחיר ${sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : ''}`;
    const displayList = filteredFoods.length > 0 || selectedCategory !== 'הכל' ? filteredFoods : foodFromStore;

    return (
        <div className="menu-page-container dark-theme">
            <header className="menu-header">
                <h1 className="menu-title-gold">התפריט שלנו</h1>
                <div className="title-underline"></div>
            </header>

            <div className="filter-wrapper"> 
                <div className="action-buttons">
                    <button className="gold-outline-btn" onClick={() => dispatch(sortByPrice())}>
                        {/* {sortButtonText} */}
                        מיון מחיר
                    </button>

                    <div className="dropdown-container"> 
                        <button className="gold-outline-btn">
                            קטגוריה: {selectedCategory} <span className="arrow-small">▼</span>
                        </button>
                        <div className="dropdown-content-dark">

                            {listCategoey.map((cat, index) => (
                                <div
                                    key={index}
                                    className="dropdown-item-dark"
                                    onClick={() => dispatch(filterByCategory(cat))}
                                >
                                    {cat}
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
            </div>
            <div className="menu-grid-wrapper">
                {displayList.map(f => (
                    <div className="boutique-food-card" key={f.id}><Food props={f} /></div>
                ))}
                {displayList.length === 0 && (
                    <p className="no-items-msg">מכינים מנות חדשות... אין פריטים להצגה.</p>
                )}
            </div>
        </div>
    );
}
import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import './nav.css'
import { logOut } from "../features/usersSlice";
import { useDispatch } from "react-redux";

export default function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const isManager = currentUser && currentUser.isManager === true;

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/homePage');
    };

    return (
        <nav className="navbar-boutique">
            <div className="nav-logo">La Cassia</div>
            
            <div className="nav-links-container">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'minc'}>הסיפור שלנו</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'foods'}>התפריט</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'shopingBug'}>סל קניות</NavLink>
                {isManager && <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={'manager'}>ניהול</NavLink>}
                
                {!currentUser ? (
                    <>
                        <NavLink className="nav-link auth-link" to={'logIn'}>התחברות</NavLink>
                        <NavLink className="nav-link auth-link" to={'register'}>הרשמה</NavLink>
                    </>
                ) : (
                    <div className="user-section">
                        <span className="user-name">שלום, {currentUser.fullName}</span>
                        <button onClick={handleLogout} className="logout-gold-btn">התנתק</button>
                    </div>
                )}
            </div>
        </nav>
    );
}
// import React from "react"
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import './nav.css'
// import { logOut } from "../features/usersSlice";
// import { useDispatch } from "react-redux";

// export default function Nav({ currentUser }) {
//     const dispatch = useDispatch();

//     currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     const isManager = currentUser && currentUser.isManager === true;
//     const navigate = useNavigate();
//     const handleLogout = () => {
//         dispatch(logOut());
//         navigate('/homePage');
//     };
// //     return <>
// //         <div className="navbar">

// //             {currentUser && (
// //                 <><p className="user-greeting">שלום ל{currentUser.fullName}</p>
// //                     <button
// //                         onClick={handleLogout}
// //                         className="link logout-btn">
// //                         התנתק
// //                     </button>
// //                 </>
// //             )}
// //             <Link className="link" to={'minc'}>קצת עלינו</Link>
// //             <Link className="link" to={'foods'}>תפריט</Link>
// //             {!currentUser && <Link className="link" to={'register'}>הרשמה</Link>}
// //             {!currentUser && <Link className="link" to={'logIn'}>התחברות</Link>}
// //             <Link className="link" to={'shopingBug'}>סל קניות</Link>
// //             {isManager && <Link to={'manager'}>מנהל</Link>}
// //         </div>
// //     </>
// // }

// // import React from "react"
// // ... שאר האימפורטים

// // export default function Nav({ currentUser }) {
//     // ... כל הלוגיקה נשארת כפי שהיא ...

//     return <>
//         <div className="navbar">

//             {currentUser && (
//                 <><p className="user-greeting">שלום ל{currentUser.fullName}</p>
//                     <button
//                         onClick={handleLogout}
//                         className="link logout-btn">
//                         התנתק
//                     </button>
//                 </>
//             )}

//             {/* ⭐⭐ שינוי: משתמשים ב-NavLink ומוסיפים קלאס 'active' ⭐⭐ */}
//             <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={'minc'}>קצת עלינו</NavLink>
//             <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={'foods'}>תפריט</NavLink>
//             {!currentUser && <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={'register'}>הרשמה</NavLink>}
//             {!currentUser && <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={'logIn'}>התחברות</NavLink>}
//             <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={'shopingBug'}>סל קניות</NavLink>
//             {isManager && <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={'manager'}>מנהל</NavLink>}
//         </div>
//     </>
// }


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
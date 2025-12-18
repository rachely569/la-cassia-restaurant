import React, { useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './logIn.css'
import { setCurrentUser } from "../features/usersSlice";

export default function LogIn() {
  const userFromStore = useSelector(state => state.usersSlice.users);
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isExiste = () => {
    const cu = userFromStore.find(x => x.userName === nameRef.current.value);//לבדוק האם זה מיובא מהסלייס ואם לא אז מאיפה userNameה

    if (cu === undefined) {
      alert('שם המשתמש אינו קיים, הנך מועבר להרשמה.');
      navigate('/Register');
    } else if (cu.password === passwordRef.current.value) {
      localStorage.setItem('currentUser', JSON.stringify(cu));
// JSON.stringify(cu)

      dispatch(setCurrentUser(cu));
      if (cu.isManager) {
        navigate('/manager');
      } else {
        navigate('/homePage');
      }
    } else {
      alert('הסיסמה או שם המשתמש שגויים. אנא נסה שוב.');
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-form-card">
        <h2>LOGIN</h2>
        <input type="text" placeholder="שם משתמש" ref={nameRef} />
        <input type="password" placeholder="סיסמה" ref={passwordRef} />
        
        <button className="login-submit-btn" onClick={isExiste} type="button">
          כניסה למערכת
        </button>
        
        <button 
          className="register-link-btn" 
          onClick={() => navigate('/Register')}
        >
          עדיין אין לך חשבון? הרשמה
        </button>
      </div>
    </div>
  );
}



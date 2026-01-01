import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/usersSlice";
import { useNavigate } from "react-router-dom";
import './register.css'

export default function Register() {
    const nameRef = useRef();
    const userName = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userFromStore = useSelector(state => state.usersSlice.users);

    const add = () => {
        if(!nameRef.current.value || !userName.current.value || !passwordRef.current.value) {
            alert("אנא מלא את כל שדות החובה");
            return;
        }

        const user = {
            id: userFromStore.length + 1,
            fullName: nameRef.current.value,
            userName: userName.current.value,
            password: passwordRef.current.value,
            Email: emailRef.current.value,
            isManager: false
        }

        dispatch(addUser(user));
        localStorage.setItem('currentUser', JSON.stringify(user));
          alert('נרשמת בהצלחה👍🏿');
        navigate('/homePage');
    }

    return (
        <div className="register-page-container">
            <div className="form">
                <h2>SIGN UP</h2>
                <input type="text" placeholder="שם מלא" ref={nameRef} required />
                <input type="text" placeholder="שם משתמש" ref={userName} required />
                <input type="password" placeholder="סיסמה" ref={passwordRef} required />
                <input type="email" placeholder="כתובת אימייל" ref={emailRef} />
                <button onClick={add} type="button">צור חשבון</button>
            </div>
        </div>
    );
}
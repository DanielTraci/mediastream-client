import { useRef } from "react";
import { useState } from "react";
import "./register.scss";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://csilinux.com/static/media/logoW.714b4bc5.png"
                        alt="logo"
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>CSI Linux collection of good stuff</h1>
                <h2>Watch movies, TV series, documentaries and more</h2>
                <p>
                    Enter your email to create an account
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>
                            Get Started
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
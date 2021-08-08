import "./login.scss"

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://csilinux.com/static/media/logoW.714b4bc5.png"
                        alt="logo"
                    />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New around here? <b>Sign up now.</b>
                    </span>
                    <small>
                        Protected by Google reCAPTCHA. You're not a bot, right? Let's check. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}
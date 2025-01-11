import React from "react";
import "./style.css"; // Create a CSS file for this page if needed

const LoginPage: React.FC = () => {
    return (
    <div className="login-page">
        <div className="login-container">
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            
            <button type="submit" className="login-button">Login</button>
        </form>
        </div>
    </div>
    );
};

export default LoginPage;

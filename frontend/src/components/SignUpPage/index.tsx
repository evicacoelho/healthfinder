import React from "react";
import "./style.css"; // Create a CSS file for this page if needed

const SignUpPage: React.FC = () => {
    return (
    <div className="signup-page">
        <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />

            <button type="submit" className="signup-button">Sign Up</button>
        </form>
        </div>
    </div>
    );
};

export default SignUpPage;

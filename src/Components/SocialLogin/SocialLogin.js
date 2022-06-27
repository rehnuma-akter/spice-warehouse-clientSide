import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";
import {
    useSignInWithGoogle,
    useAuthState,
} from "react-firebase-hooks/auth";
import './SocialLogin.css';



const SocialLogin = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    let errorElement;
    const handleGoogle = () => {
        signInWithGoogle();
    };
    // Errors
    if (error1) {
        errorElement = (
        <div>
            <p>
            Error: {error1?.message}
            </p>
        </div>
        );
    }
    if (loading1) {
    }
    
    if(user1){
        navigate("/");
    }
    return (
        <>
        <div className="social-container">
            <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
            <p className="d-inline px-1" onClick={handleGoogle}>Connect using Google</p>
        </div>
        {errorElement}
        </>
    );
};

export default SocialLogin;

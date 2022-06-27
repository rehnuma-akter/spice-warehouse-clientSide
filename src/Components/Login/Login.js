import React, { useRef, useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useAuthState,
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import './Login.css';

const Login = () => {
    const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword, user1, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const location = useLocation();

    const [forEmail, setForEmail] = useState(false);

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (loading || sending) {
        return <Loading />;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        if (email !== "") {
        setForEmail(email);
        }
    };

    if (error) {
        errorElement = (
        <div>
            <p className="my-2">Error: {error?.message}</p>
        </div>
        );
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email).then(() => {
        toast("Reset Password Link Sent");
        });
    };

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="form-body">
                <h3 className="mb-4">Welcome Back</h3>
                <form onSubmit={handleSubmit}>
                    <input required ref={emailRef} type="email" placeholder="Email" />
                    <input
                        required
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <p className="mt-3">
                        Forgotten Password?
                        <Link
                            className="pe-auto"
                            to="/login"
                        >
                            <span
                            className="text-primary border-0 px-1"
                            onClick={resetPassword}
                            >
                            Reset password
                            </span>
                        </Link>
                    </p>
                    {errorElement}
                    <button type="submit">Log In</button>
                    <div className="d-flex align-items-center">
                        <div style={{height: '1px'}} className="bg-dark w-50"></div>
                        <p className="px-2 mt-2"> or </p>
                        <div style={{height: '1px'}} className="bg-dark w-50"></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <p>
                        New Here? 
                        <span>
                            <Link to="/register" className="text-decoration-none text-danger "> Register </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

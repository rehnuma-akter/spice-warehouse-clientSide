import React from "react";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [createUserWithEmailAndPassword, user1, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast("Send Verification!");
    };
    let errorElem;
    if (error) {
        return (errorElem = error?.message);
    }
    if (loading || updating ) {
        return <Loading />;
    }
    if (user) {
        navigate("/");
    }

    return (
        <div className="form-body">
            <div className="container-main-form " id="container">
                <div className="form-container log-in-container">
                <form action="#" onSubmit={handleRegister}>
                    <h3 className="mb-4">Create New Account</h3>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    />
                    <input type="number" name="number" placeholder="Phone Number" required />
                    <br />
                    {errorElem}
                    <button>Register</button>
                    <div className="d-flex align-items-center">
                        <div style={{height: '1px'}} className="bg-dark w-50"></div>
                        <p className="px-2 mt-2"> or </p>
                        <div style={{height: '1px'}} className="bg-dark w-50"></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <p>
                    Already have an account?
                    <span>
                        <Link to="/login" className="text-decoration-none text-danger">Log In</Link>
                    </span>
                    </p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

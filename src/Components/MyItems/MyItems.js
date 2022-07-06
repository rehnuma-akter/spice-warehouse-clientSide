import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../axiosPrivate";
import auth from "../../firebase.init";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getUser = async () => {
        const email = user?.email;
        const url = `https://safe-badlands-04519.herokuapp.com/myItems?email=${email}`;
        try {
            const { data } = await axiosPrivate.get(url);
            setItems(data);
            console.log(url);
        } catch (error) {
            console.log(error.message);
        }
        };
        getUser();
    }, [user, navigate, items]);

    const handleDelete = async (id) => {
        const url = `https://safe-badlands-04519.herokuapp.com/spices/${id}`;
        let confirm = window.confirm("Are you sure to delete?");
        if (confirm) {
        let data = await axios.delete(url).then((res) => {
            if (res.request.status === 200) {
            toast("Deleted Successfully");
            }
        });
        } else {
        return;
        }
    };

    return (
        <div style={{minHeight:'100vh'}}>
        <h2 className="text-center my-3">My Items: {user?.displayName}</h2>
        <div className="row mx-auto ps-3" style={{maxWidth:'100vw'}}>
            <div className="col-11 col-lg-6 mx-auto">
            {items?.map((uItem) => (
                <div
                className="row my-4  py-2  rounded mx-auto justify-content-center py-3"
                style={{ cursor: "pointer"}}
                >
                <div className="col-6 col-lg-3">
                    <img
                    src={uItem?.image}
                    className="img-fluid text-center d-flex align-items-center"
                    style={{ width: "100px" }}
                    alt=""
                    />
                </div>
                <div className="col-7 col-lg-5 text-center my-1">
                    <h5>Name : {uItem?.name}</h5>
                    <h5>Price : ${uItem?.price}</h5>
                </div>
                <div className="col-8 col-lg-4 text-center d-flex align-items-center">
                    <button
                    className="btn btn-danger "
                    onClick={() => handleDelete(uItem?._id)}
                    >
                    Delete{" "}
                    </button>
                    <Link to={`/inventory/${uItem?._id}`}>
                    <button className="btn btn-danger ms-1 ">Update </button>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default MyItems;
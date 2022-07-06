import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const email = e.target.email.value;
        const supplier = e.target.supplier.value;
        const item = {
            name,
            image,
            description,
            price,
            quantity,
            supplier,
            email,
        };
        fetch("https://safe-badlands-04519.herokuapp.com/spices", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(item),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                toast("Item Added Successfully!");
                }
            });
        e.target.reset();
    };

    return (
        <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <h2 className="my-4 text-center">Add A New Item</h2>
        <div className="row ">
            <div className="col-lg-6 mx-auto">
            <form onSubmit={handleSubmit}>
                {/* name */}
                <input
                type="Text"
                className="form-control"
                placeholder={user ? user?.displayName : "Your Name"}
                readOnly
                ></input>
                {/* email */}
                <input
                type="Text"
                className="form-control"
                placeholder={user ? user?.email : "Your Email"}
                readOnly
                ></input>
                <input
                type="Text"
                className="form-control"
                placeholder="Product Name"
                required
                name="name"
                ></input>
                <input
                type="number"
                className="form-control"
                placeholder="Product Quantity"
                required
                name="quantity"
                ></input>
                <input
                type="number"
                className="form-control"
                placeholder="Product Price"
                required
                name="price"
                ></input>
                <textarea
                type="Text"
                className="form-control"
                placeholder="Product Description"
                required
                name="description"
                ></textarea>
                <input
                type="Text"
                className="form-control"
                placeholder="Supplier Name"
                required
                name="supplier"
                ></input>
                <input
                type="Text"
                className="form-control"
                placeholder="Image Link"
                required
                name="image"
                ></input>
                <Button variant="primary" type="submit" className="my-4 px-4">
                    Add Item
                </Button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default AddItem;

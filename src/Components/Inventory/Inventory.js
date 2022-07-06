import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [singlePd, setSinglePd] = useState({});
  const url = ` https://safe-badlands-04519.herokuapp.com/spices/${id}`;
  let { quantity,image, price, description, supplierName } = singlePd;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSinglePd(data);
      });
  }, [url, singlePd]);

  const handleDelivered = async (e) => {
    quantity = quantity - 1;
    let data = await axios.put(url, { quantity: quantity }).then((res) => {
      if (res.request.status === 200) {
        toast(" Delivered One Product");
      }
    });
  };
  const updateRef = useRef("");

  const handleStock = async (event) => {
    quantity = parseInt(quantity) + parseInt(updateRef.current.value);
    if (quantity === 0 && quantity < 0) {
      return toast("Out Of Stock");
    } else if (parseInt(updateRef.current.value)) {
      let data = await axios.put(url, { quantity: quantity }).then((res) => {
        if (res.request.status === 200) {
          toast("Product Updated");
        }
      });
    } else {
      toast("Please input a quantity!!");
    }
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <Link to={"/manageInventory"}>
        <button className="btn btn-danger my-2">Back</button>
      </Link>
      <div className="container my-5">
        <div className="row justify-content-around">
          <div className="col-12 col-lg-4 justify-content-center align-items-center">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-lg-7 my-3">
            <h1 className="text-center my-3">{singlePd?.name}</h1>
            <h6>Product Id : {singlePd?._id}</h6>
            <h5>Price : {price}</h5>
            <h5>Quantity :{quantity} </h5>
            <h6> {description}</h6>
            <h6>Supplier: {supplierName}</h6>
            <h5> Status: {quantity > 0 ? "In Stock" : "sold Out"}</h5>
            {parseInt(quantity) === 0 ? (
              <button
                className="btn btn-danger my-4"
                disabled
                onClick={handleDelivered}
              >
                Delivered
              </button>
            ) : (
              <button className="btn btn-danger my-2" onClick={handleDelivered}>
                Delivered
              </button>
            )}
            <div className="update">
              <div className="row align-items-center">
                <div className="col-7">
                  <input
                    type="number"
                    name="update"
                    ref={updateRef}
                    required
                  />
                </div>
                <div className="col-4 ">
                  <button
                    className="px-5 py-2"
                    onClick={handleStock}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

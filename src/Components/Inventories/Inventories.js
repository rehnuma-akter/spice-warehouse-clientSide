import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inventories = ({ product }) => {
  const { _id, name, price, image, description, quantity, supplierName } = product;
  return (
    <div className="col-lg-3 px-4 pb-4 shadow rounded-lg">
      <img src={image} alt="" style={{ maxWidth: "250px" }} />
      <h5>{name}</h5>
      <p>
        {" "}
        <span className="fw-bold"></span> {description} 
      </p>
      <h6>Price: {price}</h6>
      <h6>Quantity: {quantity}</h6>
      <h6>Supplier: {supplierName}</h6>
      <Link to={`/inventory/${_id}`}>
        <Button className="pd-btn">Update Now</Button>
      </Link>
    </div>
  );
};

export default Inventories;

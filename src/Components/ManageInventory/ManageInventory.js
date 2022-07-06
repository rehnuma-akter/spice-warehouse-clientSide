import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllInventory from "../AllInventory/AllInventory";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(" https://safe-badlands-04519.herokuapp.com/spices")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <h2 className="text-center my-4 ">Manage All Inventory</h2>
      <div className="container row mx-auto">
        {
          <div className="col-12 col-lg-6 mx-auto text-center">
            {products.map((sProduct) => (
              <AllInventory
                key={sProduct._id}
                sProduct={sProduct}
              ></AllInventory>
            ))}
          </div>
        }
        <Link
          style={{ textDecoration: "none" }}
          to="/addItem"
          className="d-flex justify-content-center align-items-center "
        >
          <Button className="btn btn-primary my-4 px-4 text-center"> Add Item </Button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;

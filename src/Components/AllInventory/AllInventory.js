import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllInventory = ({ sProduct }) => {
  const url = ` https://safe-badlands-04519.herokuapp.com/spices/${sProduct._id}`;
  const handleDelete = async () => {
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
    <div
      className="row my-4 py-2 rounded mx-auto justify-content-center py-3"
      style={{cursor: "pointer" }}
    >
      <div className="col-5 col-lg-3">
        <img
          src={sProduct?.image}
          className="img-fluid text-center d-flex align-items-center"
          style={{ width: "100px" }}
          alt=""
        />
      </div>
      <div className="col-8 text-center col-lg-5">
        <h5>Name : {sProduct?.name}</h5>
        <h5>Price : {sProduct?.price}</h5>
      </div>
      <div className="col-6 col-lg-4 text-center d-flex align-items-center">
        <button className="btn btn-danger me-1" onClick={handleDelete}>
          Delete{" "}
        </button>
        <Link to={`/inventory/${sProduct._id}`}>
          <button className="btn btn-primary ">Update </button>
        </Link>
      </div>
    </div>
  );
};

export default AllInventory;

import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUserProduct } from "../utils/userSlice";
import UpdateProduct from "./UpdateProduct";

const CardRender = ({
  _id,
  title,
  category,
  price,
  image,
  onDelete,
  onUpdate,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API_URL}/products/${_id}`,
        { withCredentials: true }
      );
      console.log(response);
      onDelete(_id); // call parent handler to remove from local state
      dispatch(removeUserProduct(_id));
    } catch (error) {
      console.error(error);
    }
  };
  // to update the data on cards

  return (
    <div className="mt-4 mx-3">
      <div className="card bg-base-300 w-64 h-80 shadow-sm">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>Price {price}</p>
          <div className="card-actions justify-end">
            {/* delete Product */}
            <button
              className="btn btn-sm btn-outline btn-primary"
              onClick={deleteHandler}
            >
              Delete
            </button>

            {/* Update product */}
            <button
              className="btn btn-sm btn-outline btn-primary"
              onClick={() =>
                document.getElementById(`modal-${_id}`).showModal()
              }
            >
              Update
            </button>
            <dialog id={`modal-${_id}`} className="modal">
              <UpdateProduct
                productId={_id}
                initialData={{ title, category, price, image }}
                onClose={() => document.getElementById(`modal-${_id}`).close()}
                onUpdate={onUpdate}
              />
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRender;

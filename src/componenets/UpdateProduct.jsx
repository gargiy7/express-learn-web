import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserProduct } from "../utils/userSlice";

const UpdateProduct = ({ productId, initialData, onClose }) => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [image, setImage] = useState(initialData?.image || "");

  const submitHandler = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/products/${productId}`,
        { title, category, price, image },
        { withCredentials: true }
      );
      const updated = response.data.product;
      console.log(updated);

      if (onClose) onClose(); // close modal

      setTitle("");
      setCategory("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="modal-box flex flex-col items-center justify-center gap-3">
        <h3 className="font-bold text-xl text-center">Update Your Product!</h3>

        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          className="input input-success w-full max-w-xs"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="Category"
          className="input input-success w-full max-w-xs"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Price"
          className="input input-success w-full max-w-xs"
        />

        <label className="input">
          Path
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="grow"
            placeholder="image url"
          />
          <span className="badge badge-neutral badge-xs">Optional</span>
        </label>
        <button className="btn btn-active btn-warning" onClick={submitHandler}>
          Update Product
        </button>
      </div>
    </>
  );
};

export default UpdateProduct;

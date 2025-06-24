import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserProduct } from "../utils/userSlice";

const CreateProduct = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_API_URL+"/products/",
        { title, category, price, image, creator: userData?._id },
        { withCredentials: true }
      );
      console.log(response);
      dispatch(addUserProduct(response.data.product._id));
      document.getElementById("my_modal_2").close();
      // Optional: reset form
       setTitle("");
       setCategory("");
       setPrice("");
      // setImage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="modal-box flex flex-col items-center justify-center gap-3">
        <h3 className="font-bold text-xl text-center">Your Product!</h3>

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
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateProduct;

import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../utils/productSlice";
import CreateProduct from "./CreateProduct";

const todos = ["Learn React", "Build a project", "Deploy"];

const UserDashboard = () => {
  const userData = useSelector((store) => store.user);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="flex justify-center mt-3">
          <button className="btn btn-neutral btn-wide btn-lg mr-4">Get Products</button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-neutral btn-wide btn-lg"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Create a New Product.
          </button>
          <dialog id="my_modal_2" className="modal">
            <CreateProduct />
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        {/* Rendering the product cards */}
      </div>
    </>
  );
};

export default UserDashboard;

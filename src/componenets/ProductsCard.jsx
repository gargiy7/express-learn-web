import React from "react";

const ProductsCard = () => {
  return (
    <>
      <div>
        <div className="card bg-base-300 w-60 mt-2 shadow-sm">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>A card</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;

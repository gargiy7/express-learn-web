import React from "react";
import useSWR, { mutate } from "swr";
import axios from "axios";
import CardRender from "./CardRender";
import { useSelector } from "react-redux";

const fetcher = (url) =>
  axios
    .get(url, { withCredentials: true })
    .then((res) => res.data.userProducts);

const ProductsCard = () => {
  const userData = useSelector((store) => store.user);
  const userId = userData ? userData._id : null;

  const {
    data: prod,
    error,
    isLoading,
  } = useSWR(
    userId ?  `${import.meta.env.VITE_BACKEND_API_URL}/products/user/${userId}` : null,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const handleDelete = (deletedId) => {
    mutate(
       import.meta.env.VITE_BACKEND_API_URL+`/products/user/${userId}`,
      prod.filter((item) => item._id !== deletedId),
      false
    );
  };

  const handleUpdate = (updatedProduct) => {
    mutate(
       import.meta.env.VITE_BACKEND_API_URL+`/products/user/${userId}`,
      prod.map((item) =>
        item._id === updatedProduct._id ? updatedProduct : item
      ),
      false
    );
  };

  return (
    <div className="flex justify-center flex-wrap">
      {prod?.map((val) => (
        <CardRender
          key={val._id}
          {...val}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default ProductsCard;

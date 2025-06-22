import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRender from "./CardRender";
import { useSelector } from "react-redux";

const ProductsCard = () => {
  const userData = useSelector((store) => store.user);
  const userId = userData ? userData._id : null;
  console.log("Check userId id this====", userId);
  const [prod, setProd] = useState([]);

  const fetchproducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products/user/" + userId,
        { withCredentials: true }
      );
      console.log(response);
      setProd(response.data.userProducts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Only fetch products if userId is available
    if (userId) {
      fetchproducts();
    }
  }, [userId]); // Add userId to the dependency array

  // For handling deleted product in child component i.e CardRenderer
  const handleDelete = (deletedId) => {
    setProd((prevProd) => prevProd.filter((item) => item._id !== deletedId));
  };

 


  return (
    <>
      <div className="flex justify-center ">
        {Array.isArray(prod) &&
          // prod.map((val) => <p key={val._id}>{val.title}</p>)}
          prod.map((val) => (
            <CardRender key={val._id} {...val} onDelete={handleDelete}  />
          ))}
      </div>
    </>
  );
};

export default ProductsCard;

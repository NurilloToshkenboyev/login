import React from "react";
import { request } from "../config/request";
import { ProductCard } from "../components/ProductCards/Product";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = () => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    request.get("/messages").then((res) => {
      setState(res.data);
    });
  }, []);

  const handleDelete = (productId) => {
    request
      .delete(`/messages/${productId}`)
      .then((res) => {
        setState(state.filter((product) => product.id !== productId));
        console.log('deleted');
        toast.success('Product deleted successfully!');
      })
      .catch((error) => {
        console.error("error delete", error);
        toast.error('Error deleting product.');
      });
  };

  return (
    <>
      <div className="container">
        <div className="grid gap-5">
          <ToastContainer/>
          {state.map((item) => (
            <ProductCard key={item.id} {...item} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

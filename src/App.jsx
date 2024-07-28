import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Register } from "./pages/auth/register";
import { Login } from "./pages/auth/login";
import { Product } from "./pages/category";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

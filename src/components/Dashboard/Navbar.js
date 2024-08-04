import React, { useState } from "react";
import AddProductModal from "./AddProductModal";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userName }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="p-4 bg-transparent bg-gray-100 border-2">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-4 sm:flex-row sm:space-y-0">
        <div className="flex flex-col items-center sm:flex-row">
          <h1 className="text-sm font-bold text-gray-600 sm:text-lg">Hi,</h1>
          <p className="ml-1 text-sm text-gray-600 sm:text-lg">{userName}</p>
        </div>
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleOpenModal}
            className="text-xs sm:text-sm  py-1 sm:py-2 px-2 sm:px-4  font-semibold rounded-xl border-2 border-gray-300 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
          >
            Add New Product
          </button>
          <AddProductModal show={showModal} onClose={handleCloseModal} />
          <button
            onClick={handleLogout}
            className="text-xs sm:text-sm active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-1 sm:py-2 px-2 sm:px-4  rounded-xl bg-violet-500 text-white font-semibold"
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

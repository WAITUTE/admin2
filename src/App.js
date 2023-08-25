import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext, useState } from 'react';
import { AuthContext } from "./context/authContext/AuthContext";
import Listlist from "./pages/listlist/Listlist";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user} = useContext(AuthContext);
  
    return (
      <>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" />:<Login  />} />
      </Routes>
        {user ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/movies" element={<ProductList />} />
                <Route path="/lists" element={<Listlist />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/list/:listId" element={<List />} />
                <Route path="/newproduct" element={<NewProduct />} />
                <Route path="/newlist" element={<NewList />} />
              </Routes>
            </div>
          </>
        ) : (
          <Navigate to="/login" />
        )}
      
    </>
    
  );
}

export default App;

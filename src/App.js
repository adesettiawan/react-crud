import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import EditProducts from "./components/EditProducts";
import ProductLists from "./components/ProductLists";
import ShowProducts from "./components/ShowProducts";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ProductLists />} />
                    <Route path="add" element={<AddProducts />} />
                    <Route path="edit/:id" element={<EditProducts />} />
                    <Route path="detail/:id" element={<ShowProducts />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

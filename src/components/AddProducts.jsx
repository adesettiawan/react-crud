import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../features/productSlice";

const AddProducts = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddNewProduct = async (e) => {
        e.preventDefault();
        await dispatch(addNewProduct({ title, price }));
        navigate("/");
    };

    return (
        <div className="box mt-5">
            <form onSubmit={handleAddNewProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input
                            type="number"
                            className="input"
                            placeholder="Price..."
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-success mt-4">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productSelectors } from "../features/productSlice";
import { useParams, useNavigate } from "react-router-dom";

const ShowProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const product = useSelector((state) =>
        productSelectors.selectById(state, id)
    );

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    console.log(product);

    return (
        <div className="box mt-5">
            <h1
                style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "30px",
                }}
            >
                Detail Product
            </h1>

            <table className="table is-striped is-bordered is-hoverable is-fullwidth">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{product.id}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{product.title}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
            <div className="field">
                <button
                    onClick={() => navigate("/")}
                    className="button is-success mt-4"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default ShowProducts;

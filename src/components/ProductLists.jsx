import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    getProducts,
    deleteProduct,
    productSelectors,
} from "../features/productSlice";

const ProductLists = () => {
    const dispatch = useDispatch();
    const products = useSelector(productSelectors.selectAll);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="box mt-5">
            <div className="py-3">
                <Link to="add" className="button is-primary is-small">
                    Add New Data Product
                </Link>
            </div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link
                                    to={`detail/${product.id}`}
                                    className="button is-success is-small mr-3"
                                >
                                    Detail
                                </Link>
                                <Link
                                    to={`edit/${product.id}`}
                                    className="button is-info is-small mr-3"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() =>
                                        dispatch(deleteProduct(product.id))
                                    }
                                    className="button is-danger is-small"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductLists;

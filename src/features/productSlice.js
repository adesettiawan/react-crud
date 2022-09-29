import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const responses = await axios.get("http://localhost:5000/products");
        const datas = responses.data;
        return datas;
    }
);

export const addNewProduct = createAsyncThunk(
    "products/addNewProduct",
    async ({ title, price }) => {
        const responses = await axios.post("http://localhost:5000/products", {
            title,
            price,
        });
        const datas = responses.data;
        return datas;
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ id, title, price }) => {
        const responses = await axios.patch(
            `http://localhost:5000/products/${id}`,
            {
                title,
                price,
            }
        );
        const datas = responses.data;
        return datas;
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        return id;
    }
);

const productEntity = createEntityAdapter({
    selectId: (product) => product.id,
});

const productSlice = createSlice({
    //slice name
    name: "product",
    //initial state such as field
    initialState: productEntity.getInitialState(),
    //reducers such as action update,
    reducers: {
        // dispatch update have two parameters is state and action
        // update: (state, action) => {
        //     //Enter the initial state to be changed
        //     state.title = action.payload.title;
        //     state.price = action.payload.price;
        // },
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            productEntity.setAll(state, action.payload);
        },
        [addNewProduct.fulfilled]: (state, action) => {
            productEntity.addOne(state, action.payload);
        },
        [updateProduct.fulfilled]: (state, action) => {
            productEntity.addOne(state, {
                id: action.payload.id,
                updates: action.payload,
            });
        },
        [deleteProduct.fulfilled]: (state, action) => {
            productEntity.removeOne(state, action.payload);
        },
    },
});

//export action dispatch
// export const { update } = productSlice.actions;

//export action dispatch
export const productSelectors = productEntity.getSelectors(
    (state) => state.products
);

//export reducer
export default productSlice.reducer;

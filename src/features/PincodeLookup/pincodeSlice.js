import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data[0];
    }
);

export const pincodeSlice = createSlice({
    name: 'pincodeLookup',
    initialState: {
        loading: false,
        pincode: '',
        error: null,
        view: 'lookup',
        postOffices: [],
    },
    reducers: {
        setPincode: (state, action) => {
            state.pincode = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setView: (state, action) => {
            state.view = action.payload;
        },
        setPostOffices: (state, action) => {
            state.postOffices = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.postOffices = action.payload?.PostOffice || []; // Store the post offices
                state.view = 'result';
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.view = 'error';
            });
    },
})

export const { setPincode, setLoading, setView, setPostOffices, setError } = pincodeSlice.actions

export default pincodeSlice.reducer
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProp = {
    counter: number,
};

const initialState: StateProp = { counter: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
          .addCase(incrementAsync.pending, () => {
            console.log("incrementAsync.pending");
          })
          .addCase(
            incrementAsync.fulfilled,
            (state, action: PayloadAction<number>) => {
              state.counter += action.payload;
              console.log("incrementAsync.fulfilled");
            }
          );
      },
    
});

export default counterSlice.reducer;
export const counterSelector = (state: RootState) => state.appReducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);
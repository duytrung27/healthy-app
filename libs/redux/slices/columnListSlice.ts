import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ColumnListData } from "@/types/ColumnList";
import { recommendColumnData } from "@/libs/data/recommend-data";

interface ColumnListState {
  page: number;
  loading: boolean;
  data: ColumnListData[];
}
const initialState: ColumnListState = {
  page: 0,
  loading: false,
  data: [],
};

export const fetchColumnList = createAsyncThunk(
  "columnList/fetchColumnList",
  async ({ page }: { page: number }) => {
    // Assuming the API call takes 200ms
    await new Promise((resolve) => setTimeout(resolve, 200));

    const data = recommendColumnData.slice(page * 8, (page + 1) * 8);
    return {
      page,
      data,
    };
  }
);

export const columnListSlice = createSlice({
  name: "columnList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColumnList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchColumnList.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.page === 0) {
          state.data = action.payload.data;
        } else {
          state.data = [...state.data, ...action.payload.data];
        }
      })
      .addCase(fetchColumnList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default columnListSlice.reducer;

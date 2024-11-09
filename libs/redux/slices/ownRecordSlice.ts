import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MyDiaryData } from "@/types/OwnRercord";
import { MyDiaryListData } from "@/libs/data/my-own-data";

interface OwnRecordState {
  page: number;
  loading: boolean;
  data: MyDiaryData[];
}
const initialState: OwnRecordState = {
  page: 0,
  loading: false,
  data: [],
};

export const fetchMyDiaryList = createAsyncThunk(
  "ownRecord/fetchMyDiaryList",
  async ({ page }: { page: number }) => {
    // Assuming the API call takes 200ms
    await new Promise((resolve) => setTimeout(resolve, 200));

    const data = MyDiaryListData.slice(page * 8, (page + 1) * 8);
    return {
      page,
      data,
    };
  }
);

export const ownRecordSlice = createSlice({
  name: "ownRecord",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyDiaryList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyDiaryList.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.page === 0) {
          state.data = action.payload.data;
        } else {
          state.data = [...state.data, ...action.payload.data];
        }
      })
      .addCase(fetchMyDiaryList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ownRecordSlice.reducer;

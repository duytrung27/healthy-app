import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MealData } from "@/types/Meal";
import { MealListData } from "@/libs/data/meal-data";

interface DashboardState {
  meal: {
    page: number;
    type: string;
    loading: boolean;
    data: MealData[];
  };
}
const initialState: DashboardState = {
  meal: {
    page: 0,
    type: "",
    loading: false,
    data: [],
  },
};

export const fetchMealList = createAsyncThunk(
  "meal/fetchMealList",
  async ({ page, type }: { page: number; type: string }) => {
    // Assuming the API call takes 200ms
    await new Promise((resolve) => setTimeout(resolve, 200));

    const filteredMeals = type
      ? MealListData.filter((item) => item.type === type)
      : MealListData;

    const data = filteredMeals.slice(page * 8, (page + 1) * 8);
    return {
      page,
      data,
      type,
    };
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealList.pending, (state) => {
        state.meal.loading = true;
      })
      .addCase(fetchMealList.fulfilled, (state, action) => {
        state.meal.loading = false;
        if (action.payload.page === 0) {
          state.meal.data = action.payload.data;
        } else {
          state.meal.data = [...state.meal.data, ...action.payload.data];
        }
        state.meal.type = action.payload.type;
      })
      .addCase(fetchMealList.rejected, (state) => {
        state.meal.loading = false;
      });
  },
});

export default dashboardSlice.reducer;

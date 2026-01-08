import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "@/services/auth_service";

interface AuthState {
  loading: boolean;
  error: string | null;
  user: any;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      console.log("in register user");
      return await loginApi(data);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "login failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

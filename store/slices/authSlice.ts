import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi } from "@/services/auth_service";

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

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: { email: string; password: string; name: string }, thunkAPI) => {
    try {
      console.log("in register user");
      return await registerApi(data);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Registration failed"
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
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

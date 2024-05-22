import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterAPI = createAsyncThunk(
  "myapp/register",
  async ({ data, navigate, toast, setLoading }, { rejectWithValue }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}user/register`,
        data
      );
      toast.success("User registered successfully...");
      navigate("/verifyaccount");
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const VerifyAcc = createAsyncThunk(
  "myapp/verifyAccount",
  async ({ data, navigate, toast, setLoading }, { rejectWithValue }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}user/verifyAccount`,
        data
      );
      toast.success(response.data.message);
      navigate("/login");
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const LoginAPI = createAsyncThunk(
  "myapp/login",
  async ({ data, navigate, toast, setLoading }, { rejectWithValue }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}user/login`,
        data
      );
      localStorage.setItem("user", response.data.token);
      toast.success("User logged in successfully...");
      navigate("/");
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const ForgotPassword = createAsyncThunk(
  "myapp/forgotpassword",
  async ({ data, navigate, toast, setLoading }, { rejectWithValue }) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}user/forgotPassword`,
        data
      );
      navigate("/verifyforgotpassword");
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const VerifyForgotPass = createAsyncThunk(
  "myapp/verifyForgotPassword",
  async ({ data, navigate, toast, setLoading }, { rejectWithValue }) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}user/verifyForgotPassword`,
        data
      );
      toast.success(response.data.message);
      navigate("/reset-password");
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const ResetPassword = createAsyncThunk(
  "myapp/resetPassword",
  async ({ data, navigate, toast, setLoading }, { rejectWithValue }) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}user/resetPassword`,
        data
      );
      navigate("/welcome");
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  "myapp/loginWithGoogle",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}user/loginWithAuth`,
        data
      );
      navigate("/");
      localStorage.setItem("user", response.data.token);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loading: false,
  isAuthenticated: false,
  userData: [],
};

const reducerMain = createSlice({
  name: "myapp",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterAPI.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(RegisterAPI.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.payload;
    });
    builder.addCase(RegisterAPI.rejected, (state, action) => {
      state.loading = true;
      state.userData = null;
    });
    builder.addCase(VerifyAcc.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(VerifyAcc.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.payload;
    });
    builder.addCase(VerifyAcc.rejected, (state, action) => {
      state.loading = true;
      state.userData = null;
    });
    builder.addCase(LoginAPI.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(LoginAPI.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.payload;
    });
    builder.addCase(LoginAPI.rejected, (state, action) => {
      state.loading = false;
      state.userData = null;
    });
    builder.addCase(ForgotPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(ForgotPassword.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.meta.arg.data.email;
    });
    builder.addCase(ForgotPassword.rejected, (state, action) => {
      state.loading = true;
      state.userData = null;
    });
    builder.addCase(VerifyForgotPass.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(VerifyForgotPass.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.payload;
    });
    builder.addCase(VerifyForgotPass.rejected, (state, action) => {
      state.loading = true;
      state.userData = null;
    });
    builder.addCase(ResetPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(ResetPassword.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.meta.arg.data.email;
    });
    builder.addCase(ResetPassword.rejected, (state, action) => {
      state.loading = true;
      state.userData = null;
    });
    builder.addCase(loginWithGoogle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.loading = true;
      state.userData = action.meta.arg.data;
    });
    builder.addCase(loginWithGoogle.rejected, (state, action) => {
      state.loading = true;
      state.userData = null;
    });
  },
});

export const { setUserData } = reducerMain.actions;

export default reducerMain.reducer;

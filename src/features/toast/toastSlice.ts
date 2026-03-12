import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ToastState } from "./toast.types";

const initialState: ToastState = {
  message: "",
  type: "info",
  isVisible: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,

  reducers: {
    showToast: (
      state,
      action: PayloadAction<{ message: string; type?: ToastState["type"] }>,
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type || "info";
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;

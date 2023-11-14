import { getAddress } from "@/services/apiGeocoding";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  username: string;
  status: "idle" | "loading" | "error";
  position: {
    latitude: number;
    longitude: number;
  } | null;
  address: string;
  error: string;
};

const getPosition = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  ) as Promise<{
    coords: {
      latitude: number;
      longitude: number;
    };
  }>;

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  return { position, address };
});

const initialState: InitialState = {
  username: "",
  status: "idle",
  position: null,
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.username = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.position = action.payload.position;
      state.address = action.payload.address;
      state.status = "idle";
    });
    builder.addCase(fetchAddress.rejected, (state, action) => {
      state.error = action.error.message || "Failed to fetch address";
      state.status = "error";
    });
  },
});

export const userReducer = userSlice.reducer;

export const { updateName } = userSlice.actions;

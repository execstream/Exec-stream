import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/contributors';
const withAuth = { withCredentials: true };

// --- ASYNC THUNKS ---

// Fetch all contributors
export const fetchAllContributors = createAsyncThunk(
  'experts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/all`, withAuth);
      return response.data.contributors;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch a single contributor by ID
export const fetchContributorById = createAsyncThunk(
  'experts/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`, withAuth);
      return response.data.contributor;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Create a new contributor
export const createContributor = createAsyncThunk(
  'experts/create',
  async (contributorData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/new`, contributorData, withAuth);
      return response.data.contributor;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Update an existing contributor
export const updateContributor = createAsyncThunk(
  'experts/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/update/${id}`, data, withAuth);
      return response.data.updated;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Delete a contributor
export const deleteContributor = createAsyncThunk(
  'experts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${id}`, withAuth);
      return id; // Return the ID for removal from state
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);


// --- EXPERT SLICE ---

const initialState = {
  contributors: [],
  currentContributor: null,
  loading: false,
  error: null,
};

const expertSlice = createSlice({
  name: 'experts',
  initialState,
  reducers: {
    clearExpertError: (state) => {
      state.error = null;
    },
    clearCurrentContributor: (state) => {
      state.currentContributor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // *** FIX: All .addCase() handlers are now defined BEFORE .addMatcher() handlers ***

      // fetchAllContributors
      .addCase(fetchAllContributors.fulfilled, (state, action) => {
        state.loading = false;
        state.contributors = action.payload;
      })
      // fetchContributorById
      .addCase(fetchContributorById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentContributor = action.payload;
      })
      // createContributor
      .addCase(createContributor.fulfilled, (state, action) => {
        state.loading = false;
        state.contributors.unshift(action.payload);
      })
      // updateContributor
      .addCase(updateContributor.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.contributors = state.contributors.map((c) =>
          c._id === updated._id ? updated : c
        );
        if (state.currentContributor?._id === updated._id) {
          state.currentContributor = updated;
        }
      })
      // deleteContributor
      .addCase(deleteContributor.fulfilled, (state, action) => {
        state.loading = false;
        const deletedId = action.payload;
        state.contributors = state.contributors.filter((c) => c._id !== deletedId);
      })
      // Generic Pending/Rejected Handlers are now at the end
      .addMatcher(
        (action) => action.type.startsWith('experts/') && action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('experts/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearExpertError, clearCurrentContributor } = expertSlice.actions;

export default expertSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/newsletter';
const withAuth = { withCredentials: true };

// --- THUNKS for Subscribers ---

export const fetchSubscribers = createAsyncThunk(
  'newsletter/fetchSubscribers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/subscribers/all`, withAuth);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const removeSubscriber = createAsyncThunk(
  'newsletter/removeSubscriber',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/subscribers/remove/${id}`, withAuth);
      return id; // Return the ID to remove it from the state
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const exportSubscribers = createAsyncThunk(
  'newsletter/exportSubscribers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/subscribers/export`, {
        ...withAuth,
        responseType: 'blob', // Important for file downloads
      });
      // Create a URL for the blob and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'subscribers.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      return { success: true };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- THUNKS for Newsletter Issues ---

export const fetchAllNewsletterIssues = createAsyncThunk(
  'newsletter/fetchAllIssues',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/issue/all`, withAuth);
      return response.data.issues;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const createNewsletterIssue = createAsyncThunk(
  'newsletter/createIssue',
  async (issueData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/issue/create`, issueData, withAuth);
      return response.data.issue;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const sendTestNewsletter = createAsyncThunk(
  'newsletter/sendTest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/test-newsletter`, {}, withAuth);
      return response.data.message;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);


// --- Newsletter Slice Definition ---

const initialState = {
  subscribers: [],
  issues: [],
  loading: false,
  error: null,
  message: null, // For success/info messages like "Test sent"
};

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    clearNewsletterError: (state) => {
      state.error = null;
    },
    clearNewsletterMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // *** FIX: All .addCase() handlers are now defined BEFORE .addMatcher() handlers ***
      // fetchSubscribers
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = action.payload;
      })
      // removeSubscriber
      .addCase(removeSubscriber.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = state.subscribers.filter(
          (sub) => sub._id !== action.payload
        );
        state.message = 'Subscriber removed successfully.';
      })
      // exportSubscribers
      .addCase(exportSubscribers.fulfilled, (state) => {
        state.loading = false;
        state.message = 'Subscribers exported successfully.';
      })
      // fetchAllNewsletterIssues
      .addCase(fetchAllNewsletterIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.issues = action.payload;
      })
      // createNewsletterIssue
      .addCase(createNewsletterIssue.fulfilled, (state, action) => {
        state.loading = false;
        state.issues.unshift(action.payload); // Add new issue to the top
        state.message = 'Newsletter issue created successfully.';
      })
      // sendTestNewsletter
      .addCase(sendTestNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      // Generic pending and rejected handlers are now at the end
      .addMatcher(
        (action) => action.type.startsWith('newsletter/') && action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
          state.message = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('newsletter/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearNewsletterError, clearNewsletterMessage } = newsletterSlice.actions;

export default newsletterSlice.reducer;

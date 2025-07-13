import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const subscribeNewsletter = createAsyncThunk(
  'newsletter/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/newsletter/subscribers/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to subscribe');
      }
      const data = await response.json();
      return data.newSubscriber;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const unsubscribeNewsletter = createAsyncThunk(
  'newsletter/unsubscribe',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/v1/newsletter/subscribers/${id}/unsubscribe`, {
        method: 'PUT',
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to unsubscribe');
      }
      const data = await response.json();
      return data.subscriber;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState: {
    loading: false,
    error: null,
    subscriber: null,
    successMessage: null,
  },
  reducers: {
    clearStatus(state) {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },
    setSubscriber(state, action) {
      state.subscriber = action.payload;
    },
    clearSubscriber(state) {
      state.subscriber = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(subscribeNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.subscriber = action.payload;
        state.successMessage = 'Subscribed successfully!';
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Subscription failed';
        state.successMessage = null;
      })
      .addCase(unsubscribeNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(unsubscribeNewsletter.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.subscriber = null;
        state.successMessage = 'Unsubscribed successfully!';
      })
      .addCase(unsubscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unsubscribe failed';
        state.successMessage = null;
      });
  },
});

export const { clearStatus, setSubscriber, clearSubscriber } = newsletterSlice.actions;
export default newsletterSlice.reducer;

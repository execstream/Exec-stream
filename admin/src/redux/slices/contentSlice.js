import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base API URL
const BASE_URL = 'http://localhost:5000/api/v1/content';



// Fetch paginated content list (with optional filters)
export const fetchContents = createAsyncThunk(
  'content/fetchContents',
  async (params = {}, { rejectWithValue }) => {
    try {
      const { page = 1, limit = 10, content_type, sort = 'updated_at:desc', search } = params;
      const query = new URLSearchParams({
        page,
        limit,
        sort,
        ...(content_type && { content_type }),
        ...(search && { search }),
      }).toString();

      const response = await axios.get(`${BASE_URL}/all?${query}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch single content by ID
export const fetchContentById = createAsyncThunk(
  'content/fetchContentById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/get/${id}`, {
        withCredentials: true,
      });
      return response.data.content;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Create new content
export const createContent = createAsyncThunk(
  'content/createContent',
  async (contentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/create`, contentData, {
        withCredentials: true,
      });
      return response.data.content;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Update existing content by ID (partial update)
export const updateContent = createAsyncThunk(
  'content/updateContent',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/update/${id}`, data, {
        withCredentials: true,
      });
      return response.data.content;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Delete content by ID
export const deleteContent = createAsyncThunk(
  'content/deleteContent',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${id}`, { withCredentials: true });
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Toggle content flag (featured/popular/hero)
export const toggleContentFlag = createAsyncThunk(
  'content/toggleContentFlag',
  async ({ id, flag }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/${id}/toggle/${flag}`, null, {
        withCredentials: true,
      });
      return { id, flag, value: response.data[flag] };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Add contributor to content
export const addContributor = createAsyncThunk(
  'content/addContributor',
  async ({ contentId, contributor }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/add/${contentId}/contributors`, contributor, {
        withCredentials: true,
      });
      return { contentId, contributor: response.data.contributor };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Update contributor in content
export const updateContributor = createAsyncThunk(
  'content/updateContributor',
  async ({ contentId, contributorSubId, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/update/${contentId}/contributors/${contributorSubId}`,
        data,
        { withCredentials: true }
      );
      return { contentId, contributor: response.data.contributor };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Remove contributor from content
export const removeContributor = createAsyncThunk(
  'content/removeContributor',
  async ({ contentId, contributorSubId }, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${contentId}/contributors/${contributorSubId}`, {
        withCredentials: true,
      });
      return { contentId, contributorSubId };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- Slice ---
const contentSlice = createSlice({
  name: 'content',
  initialState: {
    contents: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    loading: false,
    error: null,
    singleContent: null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearSingleContent(state) {
      state.singleContent = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchContents
      .addCase(fetchContents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContents.fulfilled, (state, action) => {
        state.loading = false;
        state.contents = action.payload.contents;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchContentById
      .addCase(fetchContentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContentById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleContent = action.payload;
      })
      .addCase(fetchContentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // createContent
      .addCase(createContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContent.fulfilled, (state, action) => {
        state.loading = false;
        // prepend new content to contents list
        state.contents.unshift(action.payload);
        state.totalItems += 1;
      })
      .addCase(createContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // updateContent
      .addCase(updateContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        state.loading = false;
        // update content in contents list if exists
        const idx = state.contents.findIndex((c) => c._id === action.payload._id);
        if (idx !== -1) {
          state.contents[idx] = action.payload;
        }
        if (state.singleContent && state.singleContent._id === action.payload._id) {
          state.singleContent = action.payload;
        }
      })
      .addCase(updateContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // deleteContent
      .addCase(deleteContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContent.fulfilled, (state, action) => {
        state.loading = false;
        state.contents = state.contents.filter((c) => c._id !== action.payload);
        state.totalItems -= 1;
        if (state.singleContent && state.singleContent._id === action.payload) {
          state.singleContent = null;
        }
      })
      .addCase(deleteContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // toggleContentFlag
      .addCase(toggleContentFlag.fulfilled, (state, action) => {
        const { id, flag, value } = action.payload;
        const idx = state.contents.findIndex((c) => c._id === id);
        if (idx !== -1) {
          state.contents[idx][flag] = value;
        }
        if (state.singleContent && state.singleContent._id === id) {
          state.singleContent[flag] = value;
        }
      })

      // addContributor
      .addCase(addContributor.fulfilled, (state, action) => {
        const { contentId, contributor } = action.payload;
        const content = state.contents.find((c) => c._id === contentId);
        if (content) {
          content.contributors = content.contributors || [];
          content.contributors.push(contributor);
        }
        if (state.singleContent && state.singleContent._id === contentId) {
          state.singleContent.contributors = state.singleContent.contributors || [];
          state.singleContent.contributors.push(contributor);
        }
      })

      // updateContributor
      .addCase(updateContributor.fulfilled, (state, action) => {
        const { contentId, contributor } = action.payload;
        const content = state.contents.find((c) => c._id === contentId);
        if (content && content.contributors) {
          const idx = content.contributors.findIndex((con) => con._id === contributor._id);
          if (idx !== -1) content.contributors[idx] = contributor;
        }
        if (state.singleContent && state.singleContent._id === contentId && state.singleContent.contributors) {
          const idx = state.singleContent.contributors.findIndex((con) => con._id === contributor._id);
          if (idx !== -1) state.singleContent.contributors[idx] = contributor;
        }
      })

      // removeContributor
      .addCase(removeContributor.fulfilled, (state, action) => {
        const { contentId, contributorSubId } = action.payload;
        const content = state.contents.find((c) => c._id === contentId);
        if (content && content.contributors) {
          content.contributors = content.contributors.filter((con) => con._id !== contributorSubId);
        }
        if (state.singleContent && state.singleContent._id === contentId && state.singleContent.contributors) {
          state.singleContent.contributors = state.singleContent.contributors.filter((con) => con._id !== contributorSubId);
        }
      });
  },
});

export const { clearError, clearSingleContent } = contentSlice.actions;

export default contentSlice.reducer;

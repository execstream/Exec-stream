import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1/tags';
const withAuth = { withCredentials: true };

const endpoints = {
  themes: 'themes',
  subThemes: 'sub-themes',
  industries: 'industries',
  roles: 'roles',
};

const singularTypes = ['Theme', 'SubTheme', 'Industry', 'Role'];
const stateKeys = ['themes', 'subThemes', 'industries', 'roles'];

const buildCRUD = (singularType, stateKey) => {
  const endpoint = endpoints[stateKey];
  return {
    [`create${singularType}`]: createAsyncThunk(`tags/create${singularType}`, async (payload, { rejectWithValue }) => {
      try {
        const res = await axios.post(`${baseURL}/${endpoint}/new`, payload, withAuth);
        return { item: res.data.item, key: stateKey };
      } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
    }),
    [`update${singularType}`]: createAsyncThunk(`tags/update${singularType}`, async ({ id, data }, { rejectWithValue }) => {
      try {
        const res = await axios.put(`${baseURL}/${endpoint}/update/${id}`, data, withAuth);
        return { item: res.data.item, key: stateKey };
      } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
    }),
    [`delete${singularType}`]: createAsyncThunk(`tags/delete${singularType}`, async (id, { rejectWithValue }) => {
      try {
        await axios.delete(`${baseURL}/${endpoint}/delete/${id}`, withAuth);
        return { id, key: stateKey };
      } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
    }),
  };
};

const thunks = {};

singularTypes.forEach((type, i) => {
  const key = stateKeys[i];
  const endpoint = endpoints[key];

  // FIX: This now correctly pluralizes 'Industry' to 'Industries'
  const pluralType = type.endsWith('y') ? `${type.slice(0, -1)}ies` : `${type}s`;

  // This will now generate 'fetchIndustries' correctly.
  thunks[`fetch${pluralType}`] = createAsyncThunk(`tags/fetch${pluralType}`, async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseURL}/${endpoint}/all`, withAuth);
      return { items: res.data.items || [], key };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  });

  // CRUD thunks
  Object.assign(thunks, buildCRUD(type, key));
});

const initialState = {
  themes: [],
  subThemes: [],
  industries: [],
  roles: [],
  loading: false,
  error: null,
};

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    clearTagError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith('tags/') && action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('tags/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('tags/fetch') && action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          state[action.payload.key] = action.payload.items;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('tags/create') && action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          state[action.payload.key].push(action.payload.item);
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('tags/update') && action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          const { key, item } = action.payload;
          state[key] = state[key].map((i) => (i._id === item._id ? item : i));
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('tags/delete') && action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          const { key, id } = action.payload;
          state[key] = state[key].filter((i) => i._id !== id);
        }
      );
  },
});

export const { clearTagError } = tagSlice.actions;

// Exports now correctly match the generated thunk names
export const {
  fetchThemes,
  fetchSubThemes,
  fetchIndustries,
  fetchRoles,
  createTheme,
  updateTheme,
  deleteTheme,
  createSubTheme,
  updateSubTheme,
  deleteSubTheme,
  createIndustry,
  updateIndustry,
  deleteIndustry,
  createRole,
  updateRole,
  deleteRole,
} = thunks;

export default tagSlice.reducer;

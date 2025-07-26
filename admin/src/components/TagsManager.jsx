import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchThemes, fetchSubThemes, fetchIndustries, fetchRoles,
  createTheme, updateTheme, deleteTheme,
  createSubTheme, updateSubTheme, deleteSubTheme,
  createIndustry, updateIndustry, deleteIndustry,
  createRole, updateRole, deleteRole,
  clearTagError,
} from '../redux/slices/tagsSlice'; // Adjust path as needed

// A map to link section keys to their corresponding action thunks
const actionMap = {
  themes: { create: createTheme, update: updateTheme, delete: deleteTheme },
  subThemes: { create: createSubTheme, update: updateSubTheme, delete: deleteSubTheme },
  industries: { create: createIndustry, update: updateIndustry, delete: deleteIndustry },
  roles: { create: createRole, update: updateRole, delete: deleteRole },
};

// Reusable Modal Component for Adding/Editing Tags
// This component no longer has conditional hooks.
const TagModal = ({ onClose, onSave, tagData, sectionKey }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // This effect runs when the modal is opened or its data changes.
  // It correctly populates the form fields.
  useEffect(() => {
    if (tagData) {
      setName(tagData.name || '');
      setDescription(tagData.description || '');
    } else {
      // Reset for "Create" mode
      setName('');
      setDescription('');
    }
  }, [tagData]);

  const isEditing = !!tagData?._id;
  const title = `${isEditing ? 'Edit' : 'Create'} ${sectionKey.slice(0, -1)}`;

  const handleSave = () => {
    if (!name) {
      alert('Name is required.');
      return;
    }
    onSave({ name, description });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
            rows="3"
          />
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};


// Main TagsManager Component
const TagsManager = () => {
  const dispatch = useDispatch();
  const { themes, subThemes, industries, roles, loading, error } = useSelector((state) => state.tags);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    dispatch(clearTagError());
    dispatch(fetchThemes());
    dispatch(fetchSubThemes());
    dispatch(fetchIndustries());
    dispatch(fetchRoles());
  }, [dispatch]);

  const openModal = (sectionKey, item = null) => {
    setModalData({ sectionKey, item });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleSave = (data) => {
    const { sectionKey, item } = modalData;
    const actions = actionMap[sectionKey];

    if (item?._id) {
      dispatch(actions.update({ id: item._id, data }));
    } else {
      dispatch(actions.create(data));
    }
    closeModal();
  };

  const handleDelete = (sectionKey, id) => {
    const sectionName = sectionKey.slice(0, -1);
    if (window.confirm(`Are you sure you want to delete this ${sectionName}?`)) {
      const deleteThunk = actionMap[sectionKey]?.delete;
      if (deleteThunk) {
        dispatch(deleteThunk(id));
      }
    }
  };

  const sections = [
    { title: 'Themes', items: themes, key: 'themes' },
    { title: 'Sub-Themes', items: subThemes, key: 'subThemes' },
    { title: 'Industries', items: industries, key: 'industries' },
    { title: 'Executive Roles', items: roles, key: 'roles' },
  ];

  return (
    <>
      {/* FIX: The modal is now rendered conditionally here, outside the component itself. */}
      {isModalOpen && (
        <TagModal
          onClose={closeModal}
          onSave={handleSave}
          tagData={modalData?.item}
          sectionKey={modalData?.sectionKey || ''}
        />
      )}
      <div className="space-y-8 p-4 md:p-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Tags</h1>

        {loading && <p className="text-center text-gray-500">Loading tags...</p>}
        {error && <p className="text-center text-red-600 font-medium border border-red-300 bg-red-50 p-3 rounded-lg">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map(({ title, items, key }) => (
            <div key={key} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <button
                  onClick={() => openModal(key)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
                >
                  + Add
                </button>
              </div>
              {items?.length > 0 ? (
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item._id} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                      <span className="text-gray-700">{item.name}</span>
                      <div className="flex space-x-3">
                        <button className="text-gray-500 hover:text-blue-600" onClick={() => openModal(key, item)}>
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="text-gray-500 hover:text-red-600" onClick={() => handleDelete(key, item._id)}>
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No {title.toLowerCase()} yet.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagsManager;

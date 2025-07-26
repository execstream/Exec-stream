import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import the forms and the Redux actions/slice
import AddContentForm from "./AddContentForm";
import EditContentForm from "./EditContentForm"; // Assuming you have this from the previous step
import { fetchContents, deleteContent, clearError, clearSingleContent } from "../redux/slices/contentSlice"; // Adjust path to your slice file

const ContentManager = () => {
  const dispatch = useDispatch();

  // Selectors to get data from the Redux store
  const {
    contents,
    loading,
    error,
    currentPage,
    totalPages,
    totalItems,
  } = useSelector((state) => state.content);

  // --- COMPONENT STATE ---
  // State for managing which form (Add/Edit) is open
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContent, setEditingContent] = useState(null);

  // State for filters and pagination
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    content_type: "",
    search: "",
  });

  // State for debouncing the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for dropdowns (in a real app, this might also come from a slice)
  const [tags, setTags] = useState([]);
  const [contributors, setContributors] = useState([]);

  // --- DATA FETCHING & EFFECTS ---

  // Debounce search term to prevent excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: searchTerm, page: 1 }));
    }, 500); // Wait 500ms after user stops typing
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fetch content whenever filters change
  useEffect(() => {
    dispatch(fetchContents(filters));
  }, [dispatch, filters]);
  
  // Fetch mock data for form dropdowns
  useEffect(() => {
    setTags([
      { _id: "1", name: "Strategy" },
      { _id: "2", name: "Leadership" },
      { _id: "3", name: "Innovation" },
    ]);
    setContributors([
      { _id: "a1", name: "Biplab Sengupta" },
      { _id: "a2", name: "Anita Sharma" },
    ]);
  }, []);


  // --- EVENT HANDLERS ---

  const handleAddClick = () => {
    setEditingContent(null); // Ensure we're in "add" mode
    setIsFormOpen(true);
  };

  const handleEditClick = (content) => {
    setEditingContent(content); // Set the content to edit
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingContent(null);
    dispatch(clearSingleContent()); // Clear any fetched single content item
    dispatch(clearError());
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      dispatch(deleteContent(id));
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setFilters((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value, page: 1 }));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Manage Content</h1>
        <button
          onClick={isFormOpen ? handleCloseForm : handleAddClick}
          className={`${
            isFormOpen ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
          } text-white px-4 py-2 rounded transition-colors`}
        >
          <i className={`fas ${isFormOpen ? "fa-times" : "fa-plus"} mr-2`}></i>
          {isFormOpen ? "Close Form" : "Add Content"}
        </button>
      </div>

      {/* Add or Edit Form */}
      {isFormOpen && (
        <div className="my-6">
          {editingContent ? (
            <EditContentForm
              contentToEdit={editingContent}
              tags={tags}
              contributors={contributors}
              onClose={handleCloseForm}
            />
          ) : (
            <AddContentForm
              tags={tags}
              contributors={contributors}
              onClose={handleCloseForm}
            />
          )}
        </div>
      )}

      {/* Content Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-64"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
            </div>
            <div className="flex space-x-3">
              <select 
                name="content_type" 
                value={filters.content_type} 
                onChange={handleFilterChange} 
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                {['article', 'podcast', 'video', 'interview', 'webinar', 'news', 'insight', 'report', 'webcast'].map(type => (
                  <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan="5" className="text-center py-4">Loading...</td></tr>
              ) : error ? (
                <tr><td colSpan="5" className="text-center py-4 text-red-500">Error: {error}</td></tr>
              ) : contents.length === 0 ? (
                <tr><td colSpan="5" className="text-center py-4">No content found.</td></tr>
              ) : (
                contents.map((content) => (
                  <tr key={content._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{content.title}</div>
                      <div className="text-sm text-gray-500">{content.meta_description?.substring(0, 50)}...</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {content.content_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(content.status)}`}>
                        {content.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(content.updated_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button onClick={() => handleEditClick(content)} className="text-blue-600 hover:text-blue-900" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button onClick={() => handleDelete(content._id)} className="text-red-600 hover:text-red-900" title="Delete">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{(currentPage - 1) * filters.limit + 1}</span> to <span className="font-medium">{Math.min(currentPage * filters.limit, totalItems)}</span> of <span className="font-medium">{totalItems}</span> results
            </div>
            <div className="flex space-x-1">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50">
                Previous
              </button>
              {/* Simple pagination numbers - can be expanded */}
              {[...Array(totalPages).keys()].map(num => (
                  <button key={num + 1} onClick={() => handlePageChange(num + 1)} className={`px-3 py-1 border rounded-lg text-sm ${currentPage === num + 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'}`}>
                    {num + 1}
                  </button>
              ))}
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
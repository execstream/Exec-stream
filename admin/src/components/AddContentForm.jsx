import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // Content slice actions
  createContent,
  clearError as clearContentError,
} from '../redux/slices/contentSlice'; // Adjust path

import {
  // Tags slice actions
  fetchThemes,
  fetchSubThemes,
  fetchIndustries,
  fetchRoles,
} from '../redux/slices/tagsSlice'; // Adjust path

import CustomEditor from './CustomEditor'; // Assuming path is correct

const AddContentForm = ({ contributors = [] }) => {
  const dispatch = useDispatch();

  // State from the content slice
  const { loading: contentLoading, error: contentError } = useSelector((state) => state.content);

  // State from the tags slice
  const { themes, subThemes, industries, roles } = useSelector((state) => state.tags);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    ai_summary: '',
    body: '',
    content_type: '',
    media_url: '',
    pdf_url: '',
    media_duration_sec: '',
    banner_image_url: '',
    meta_description: '',
    meta_keywords: '',
    publish_date: '',
    status: 'draft',
    featured: false,
    popular: false,
    hero: false,
    theme_ids: [],
    sub_theme_ids: [],
    industry_ids: [],
    exec_role_ids: [],
    contributor_ids: [],
  });

  // Fetch all necessary tags when the component mounts
  useEffect(() => {
    dispatch(fetchThemes());
    dispatch(fetchSubThemes());
    dispatch(fetchIndustries());
    dispatch(fetchRoles());
  }, [dispatch]);

  // Clear content creation error on form field change
  useEffect(() => {
    if (contentError) dispatch(clearContentError());
  }, [formData, dispatch, contentError]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMultiSelect = (name, selectedId) => {
    setFormData((prev) => {
      const alreadySelected = prev[name].includes(selectedId);
      const updated = alreadySelected
        ? prev[name].filter((id) => id !== selectedId)
        : [...prev[name], selectedId];
      return { ...prev, [name]: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contributorsForSubmit = formData.contributor_ids.map((id) => ({
      contributor_id: id,
      role: 'author',
    }));
    const payload = { ...formData, contributors: contributorsForSubmit };

    try {
      const resultAction = await dispatch(createContent(payload));
      if (createContent.fulfilled.match(resultAction)) {
        alert('Content created successfully!');
        // Reset form
        setFormData({
          title: '', slug: '', ai_summary: '', body: '', content_type: '', media_url: '',
          pdf_url: '', media_duration_sec: '', banner_image_url: '', meta_description: '',
          meta_keywords: '', publish_date: '', status: 'draft', featured: false,
          popular: false, hero: false, theme_ids: [], sub_theme_ids: [], industry_ids: [],
          exec_role_ids: [], contributor_ids: [],
        });
      }
    } catch {
      // Error is handled by the slice's error state
    }
  };

  const MultiSelectButtons = ({ label, name, options, selectedIds }) => (
    <div>
      <label className="font-medium block mb-1">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt._id}
            type="button"
            onClick={() => handleMultiSelect(name, opt._id)}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedIds.includes(opt._id)
                ? 'bg-blue-100 text-blue-700 border-blue-300'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-900">Add New Content</h2>
      {contentError && (
        <p className="text-red-600 font-medium border border-red-400 p-2 rounded">
          {contentError}
        </p>
      )}
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border px-4 py-2 rounded" required disabled={contentLoading} />
      <input name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="w-full border px-4 py-2 rounded" required disabled={contentLoading} />
      <select name="content_type" value={formData.content_type} onChange={handleChange} className="w-full border px-4 py-2 rounded" required disabled={contentLoading}>
        <option value="">Select Content Type</option>
        {['article', 'podcast', 'video', 'interview', 'webinar', 'news', 'insight', 'report', 'webcast'].map((type) => (
          <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
        ))}
      </select>
      <select name="status" value={formData.status} onChange={handleChange} className="w-full border px-4 py-2 rounded" required disabled={contentLoading}>
        {['draft', 'scheduled', 'published'].map((status) => (
          <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
        ))}
      </select>
      {formData.status === 'scheduled' && (
        <input type="datetime-local" name="publish_date" value={formData.publish_date} onChange={handleChange} className="w-full border px-4 py-2 rounded" required disabled={contentLoading} />
      )}
      <textarea name="ai_summary" placeholder="AI Summary" value={formData.ai_summary} onChange={handleChange} className="w-full border px-4 py-2 rounded" rows={3} disabled={contentLoading} />
      <div>
        <label className="font-medium block mb-2">Body Content</label>
        <CustomEditor
          value={formData.body}
          onChange={(data) => setFormData(prev => ({ ...prev, body: data }))}
          disabled={contentLoading}
        />
      </div>
      <input name="media_url" placeholder="Media URL (video/audio)" value={formData.media_url} onChange={handleChange} className="w-full border px-4 py-2 rounded" disabled={contentLoading} />
      <input name="media_duration_sec" type="number" min="0" placeholder="Media Duration (seconds)" value={formData.media_duration_sec} onChange={handleChange} className="w-full border px-4 py-2 rounded" disabled={contentLoading} />
      <input name="pdf_url" placeholder="PDF URL" value={formData.pdf_url} onChange={handleChange} className="w-full border px-4 py-2 rounded" disabled={contentLoading} />
      <input name="banner_image_url" placeholder="Banner Image URL" value={formData.banner_image_url} onChange={handleChange} className="w-full border px-4 py-2 rounded" disabled={contentLoading} />
      <input name="meta_description" placeholder="Meta Description" value={formData.meta_description} onChange={handleChange} className="w-full border px-4 py-2 rounded" disabled={contentLoading} />
      <input name="meta_keywords" placeholder="Meta Keywords (comma-separated)" value={formData.meta_keywords} onChange={handleChange} className="w-full border px-4 py-2 rounded" disabled={contentLoading} />
      
      {/* Multi-Selects now use data from the Redux store */}
      <MultiSelectButtons label="Themes" name="theme_ids" options={themes} selectedIds={formData.theme_ids} />
      <MultiSelectButtons label="Sub-Themes" name="sub_theme_ids" options={subThemes} selectedIds={formData.sub_theme_ids} />
      <MultiSelectButtons label="Industries" name="industry_ids" options={industries} selectedIds={formData.industry_ids} />
      <MultiSelectButtons label="Executive Roles" name="exec_role_ids" options={roles} selectedIds={formData.exec_role_ids} />
      <MultiSelectButtons label="Contributors" name="contributor_ids" options={contributors} selectedIds={formData.contributor_ids} />

      <div className="flex gap-4">
        {['featured', 'popular', 'hero'].map((flag) => (
          <label key={flag} className="flex items-center gap-2">
            <input type="checkbox" name={flag} checked={formData[flag]} onChange={handleChange} disabled={contentLoading} />
            {flag.charAt(0).toUpperCase() + flag.slice(1)}
          </label>
        ))}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" disabled={contentLoading}>
        {contentLoading ? 'Submitting...' : 'Submit Content'}
      </button>
    </form>
  );
};

export default AddContentForm;

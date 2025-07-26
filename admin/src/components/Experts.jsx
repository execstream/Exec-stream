import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllContributors,
  createContributor,
  updateContributor,
  deleteContributor,
  clearExpertError,
} from '../redux/slices/expertSlice'; // Adjust path as needed

// --- FIX 1: The Modal component is now defined OUTSIDE the page component. ---
// This is the standard React practice and ensures the component behaves predictably.
const ExpertModal = ({ isOpen, onClose, onSave, expertData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [photoBase64, setPhotoBase64] = useState(null);
  const [preview, setPreview] = useState(null);

  const isEditing = !!expertData?._id;

  // This effect now reliably populates the form when the modal opens or data changes.
  useEffect(() => {
    if (isOpen) {
      if (isEditing) {
        setName(expertData.name || '');
        setEmail(expertData.email || '');
        setBio(expertData.bio || '');
        setLinkedinUrl(expertData.linkedin_url || '');
        setTwitterUrl(expertData.twitter_url || '');
        setWebsiteUrl(expertData.website_url || '');
        setCompanyName(expertData.current_employment?.company_name || '');
        setJobPosition(expertData.current_employment?.job_position || '');
        setPreview(expertData.profile_image_url || null);
        setPhotoBase64(null); // Reset photo on open
      } else {
        // Reset form for "create" mode
        setName('');
        setEmail('');
        setBio('');
        setLinkedinUrl('');
        setTwitterUrl('');
        setWebsiteUrl('');
        setCompanyName('');
        setJobPosition('');
        setPhotoBase64(null);
        setPreview(null);
      }
    }
  }, [expertData, isOpen, isEditing]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoBase64(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!name || !email) {
      alert('Name and Email are required.');
      return;
    }
    const payload = {
      name,
      email,
      bio,
      linkedin_url: linkedinUrl,
      twitter_url: twitterUrl,
      website_url: websiteUrl,
      current_employment: {
        company_name: companyName,
        job_position: jobPosition,
      },
    };
    if (photoBase64) {
      payload.photo_base64 = photoBase64;
    }
    onSave(payload);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Contributor' : 'Add New Contributor'}</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0">
              {preview ? <img src={preview} alt="Preview" className="w-full h-full rounded-full object-cover" /> : <div className="w-full h-full" />}
            </div>
            <input type="file" accept="image/*" onChange={handleFileChange} className="text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
            <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
          </div>
          <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="w-full border px-4 py-2 rounded-lg" rows="3" />
          <h3 className="text-lg font-semibold pt-2">Social Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="LinkedIn URL" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
            <input type="text" placeholder="Twitter URL" value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
            <input type="text" placeholder="Website URL" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
          </div>
          <h3 className="text-lg font-semibold pt-2">Current Employment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
            <input type="text" placeholder="Job Position" value={jobPosition} onChange={(e) => setJobPosition(e.target.value)} className="w-full border px-4 py-2 rounded-lg" />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border hover:bg-gray-100">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Save</button>
        </div>
      </div>
    </div>
  );
};

// Main Experts Page Component
const ExpertsPage = () => {
  const dispatch = useDispatch();
  const { contributors, loading, error } = useSelector((state) => state.experts || {});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExpert, setEditingExpert] = useState(null);

  useEffect(() => {
    // This function will fetch the contributors and log the result
    const fetchAndLogContributors = async () => {
      const resultAction = await dispatch(fetchAllContributors());
      if (fetchAllContributors.fulfilled.match(resultAction)) {
        console.log('Returned object from backend (fetchAllContributors):', resultAction.payload);
      }
    };
    fetchAndLogContributors();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error('An error occurred:', error);
      const timer = setTimeout(() => dispatch(clearExpertError()), 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleOpenModal = (expert = null) => {
    setEditingExpert(expert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingExpert(null);
  };

  const handleSave = async (data) => {
    let resultAction;
    if (editingExpert) {
      resultAction = await dispatch(updateContributor({ id: editingExpert._id, data }));
      if (updateContributor.fulfilled.match(resultAction)) {
        console.log('Returned object from backend (updateContributor):', resultAction.payload);
      }
    } else {
      resultAction = await dispatch(createContributor(data));
      if (createContributor.fulfilled.match(resultAction)) {
        console.log('Returned object from backend (createContributor):', resultAction.payload);
      }
    }
    handleCloseModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contributor? This action cannot be undone.')) {
      const resultAction = await dispatch(deleteContributor(id));
      if (deleteContributor.fulfilled.match(resultAction)) {
        console.log('Returned object from backend (deleteContributor):', { deletedId: resultAction.payload });
      }
    }
  };

  return (
    <>
      <ExpertModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        expertData={editingExpert}
      />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Contributors</h1>
          <button onClick={() => handleOpenModal()} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <i className="fas fa-plus mr-2"></i>Add Contributor
          </button>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

        {loading ? (
          <p className="text-center text-gray-500 mt-8">Loading contributors...</p>
        ) : !contributors || contributors.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>No contributors found.</p>
            <p className="text-sm mt-2">Click "Add Contributor" to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contributors.map((expert) => (
              <div key={expert._id} className="bg-white rounded-lg shadow-md border p-4 flex flex-col text-center">
                <img src={expert.profile_image_url || 'https://via.placeholder.com/100'} alt={expert.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-200" />
                <div className="flex-grow w-full">
                  <h3 className="text-lg font-semibold text-gray-800">{expert.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{expert.email}</p>
                  {expert.current_employment?.company_name && (
                    <div className="text-sm my-2">
                        <p className="font-semibold">{expert.current_employment.job_position}</p>
                        <p className="text-gray-500">at {expert.current_employment.company_name}</p>
                    </div>
                  )}
                  <p className="text-sm text-gray-600">{expert.bio}</p>
                </div>
                <div className="mt-4 pt-4 border-t w-full flex justify-center items-center space-x-4">
                  {expert.linkedin_url && <a href={expert.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700"><i className="fab fa-linkedin"></i></a>}
                  {expert.twitter_url && <a href={expert.twitter_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400"><i className="fab fa-twitter"></i></a>}
                  {expert.website_url && <a href={expert.website_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><i className="fas fa-globe"></i></a>}
                  <span className="border-l h-4"></span>
                  <button onClick={() => handleOpenModal(expert)} className="text-gray-500 hover:text-blue-600" title="Edit">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button onClick={() => handleDelete(expert._id)} className="text-gray-500 hover:text-red-600" title="Delete">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExpertsPage;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSubscribers,
  removeSubscriber,
  exportSubscribers,
  fetchAllNewsletterIssues,
  createNewsletterIssue,
  sendTestNewsletter,
  clearNewsletterError,
  clearNewsletterMessage,
} from '../redux/slices/newsletterSlice'; // Adjust path as needed

// Modal for creating a new newsletter issue
const CreateIssueModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [scheduledFor, setScheduledFor] = useState('');
  const [contentBlocks, setContentBlocks] = useState([
    { content_id: '', category: '', link: '', related_content_title: '', related_content_link: '' },
  ]);

  const handleBlockChange = (index, field, value) => {
    const newBlocks = [...contentBlocks];
    newBlocks[index][field] = value;
    setContentBlocks(newBlocks);
  };

  const addBlock = () => {
    setContentBlocks([
      ...contentBlocks,
      { content_id: '', category: '', link: '', related_content_title: '', related_content_link: '' },
    ]);
  };

  const removeBlock = (index) => {
    const newBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(newBlocks);
  };

  const handleSave = () => {
    if (!title || !scheduledFor) {
      alert('Title and Schedule Date are required.');
      return;
    }
    onSave({
      title,
      scheduled_for: scheduledFor,
      content_blocks: contentBlocks,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Create New Newsletter Issue</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Newsletter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="datetime-local"
            value={scheduledFor}
            onChange={(e) => setScheduledFor(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">Content Blocks</h3>
        {contentBlocks.map((block, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4 space-y-2 relative">
            <button onClick={() => removeBlock(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
              <i className="fas fa-trash"></i>
            </button>
            <input type="text" placeholder="Content ID" value={block.content_id} onChange={(e) => handleBlockChange(index, 'content_id', e.target.value)} className="w-full border px-3 py-1 rounded-md text-sm" />
            <input type="text" placeholder="Category (e.g., Top Articles)" value={block.category} onChange={(e) => handleBlockChange(index, 'category', e.target.value)} className="w-full border px-3 py-1 rounded-md text-sm" />
            <input type="text" placeholder="Link URL" value={block.link} onChange={(e) => handleBlockChange(index, 'link', e.target.value)} className="w-full border px-3 py-1 rounded-md text-sm" />
            <input type="text" placeholder="Related Content Title (Optional)" value={block.related_content_title} onChange={(e) => handleBlockChange(index, 'related_content_title', e.target.value)} className="w-full border px-3 py-1 rounded-md text-sm" />
            <input type="text" placeholder="Related Content Link (Optional)" value={block.related_content_link} onChange={(e) => handleBlockChange(index, 'related_content_link', e.target.value)} className="w-full border px-3 py-1 rounded-md text-sm" />
          </div>
        ))}
        <button onClick={addBlock} className="text-blue-600 hover:underline text-sm">+ Add another block</button>

        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border hover:bg-gray-100">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Save Issue</button>
        </div>
      </div>
    </div>
  );
};


// Main Newsletter Management Component
const NewsletterPage = () => {
  const dispatch = useDispatch();
  const { 
    subscribers = [], 
    issues = [], 
    loading = false, 
    error = null, 
    message = null 
  } = useSelector((state) => state.newsletter || {});
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for subscriber pagination
  const [subscribersPage, setSubscribersPage] = useState(1);
  const SUBSCRIBERS_PER_PAGE = 10;

  useEffect(() => {
    dispatch(fetchSubscribers());
    dispatch(fetchAllNewsletterIssues());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => dispatch(clearNewsletterError()), 5000);
      return () => clearTimeout(timer);
    }
    if (message) {
      const timer = setTimeout(() => dispatch(clearNewsletterMessage()), 5000);
      return () => clearTimeout(timer);
    }
  }, [error, message, dispatch]);

  const handleRemoveSubscriber = (id) => {
    if (window.confirm('Are you sure you want to remove this subscriber?')) {
      dispatch(removeSubscriber(id));
    }
  };

  const handleCreateIssue = (issueData) => {
    dispatch(createNewsletterIssue(issueData));
    setIsModalOpen(false);
  };

  // Pagination logic for subscribers
  const indexOfLastSubscriber = subscribersPage * SUBSCRIBERS_PER_PAGE;
  const indexOfFirstSubscriber = indexOfLastSubscriber - SUBSCRIBERS_PER_PAGE;
  const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);
  const totalSubscriberPages = Math.ceil(subscribers.length / SUBSCRIBERS_PER_PAGE);

  const paginateSubscribers = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalSubscriberPages) {
      setSubscribersPage(pageNumber);
    }
  };

  return (
    <>
      <CreateIssueModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleCreateIssue}
      />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Newsletter Management</h1>

        {/* Info/Error Messages */}
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
        {message && <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4" role="alert">{message}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subscribers Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Subscribers ({subscribers.length})</h2>
              <button onClick={() => dispatch(exportSubscribers())} disabled={loading} className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md disabled:opacity-50">
                <i className="fas fa-file-export mr-2"></i>Export
              </button>
            </div>
            <div className="flex-grow">
              {loading && !subscribers.length ? <p>Loading...</p> :
                <ul className="divide-y divide-gray-200">
                  {currentSubscribers.map(sub => (
                    <li key={sub._id} className="py-2 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{sub.email}</p>
                        <p className="text-xs text-gray-500">Subscribed: {new Date(sub.subscribed_at).toLocaleDateString()}</p>
                      </div>
                      <button onClick={() => handleRemoveSubscriber(sub._id)} disabled={loading} className="text-red-500 hover:text-red-700 disabled:opacity-50">
                        <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  ))}
                </ul>
              }
            </div>
             {/* Pagination controls for subscribers */}
             {totalSubscriberPages > 1 && (
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <button 
                        onClick={() => paginateSubscribers(subscribersPage - 1)} 
                        disabled={subscribersPage === 1 || loading}
                        className="text-sm px-3 py-1 border rounded-md disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-sm text-gray-600">
                        Page {subscribersPage} of {totalSubscriberPages}
                    </span>
                    <button 
                        onClick={() => paginateSubscribers(subscribersPage + 1)} 
                        disabled={subscribersPage === totalSubscriberPages || loading}
                        className="text-sm px-3 py-1 border rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
          </div>

          {/* Newsletter Issues Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Newsletter Issues</h2>
              <div className="space-x-2">
                <button onClick={() => dispatch(sendTestNewsletter())} disabled={loading} className="text-sm bg-green-200 hover:bg-green-300 px-3 py-1 rounded-md disabled:opacity-50">
                  <i className="fas fa-paper-plane mr-2"></i>Send Test
                </button>
                <button onClick={() => setIsModalOpen(true)} disabled={loading} className="text-sm bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded-md disabled:opacity-50">
                  <i className="fas fa-plus mr-2"></i>Create Issue
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {loading && !issues.length ? <p>Loading...</p> :
                <ul className="space-y-3">
                  {issues.map(issue => (
                    <li key={issue._id} className="p-3 border rounded-md">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-800">{issue.title}</p>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${issue.sent ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {issue.sent ? 'Sent' : 'Scheduled'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Scheduled for: {new Date(issue.scheduled_for).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Content Blocks: {issue.content_blocks.length}
                      </p>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPage;

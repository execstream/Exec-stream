import React, { useState } from 'react';
import Dashboard from './components/Dashboards';
import ContentManager from './components/ContentManager';
import TagsManager from './components/TagsManager';
import Experts from './components/Experts';
import Users from './components/Users';
import Permissions from './components/Permissions';
import Newsletter from './components/Newsletter'; // Assuming you have a Newsletter component
const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="mb-6 space-x-4">
        {['dashboard', 'content', 'tags', 'experts', 'users', 'permissions','newsletter'].map(page => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-3 py-2 rounded-md font-medium ${
              activePage === page ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>

      <main className="bg-white p-6 rounded-lg shadow-md">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'content' && <ContentManager />}
        {activePage === 'tags' && <TagsManager />}
        {activePage === 'experts' && <Experts />}
         {activePage === 'newsletter' && <Newsletter />}
        {activePage === 'users' && <Users />}
        {activePage === 'permissions' && <Permissions />}
      </main>
    </div>
  );
};

export default App;

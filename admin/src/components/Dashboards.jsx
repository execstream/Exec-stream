import React from 'react';

const Dashboard = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
      <button className="bg-blue-600 text-white px-4 py-2 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
        <i className="fas fa-plus mr-2"></i>Quick Action
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-3xl font-bold text-gray-900">2,847</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <i className="fas fa-users text-blue-600 text-xl"></i>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-green-600 text-sm font-medium">+12.5%</span>
          <span className="text-gray-500 text-sm ml-2">from last month</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Content</p>
            <p className="text-3xl font-bold text-gray-900">1,234</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <i className="fas fa-file-alt text-green-600 text-xl"></i>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-green-600 text-sm font-medium">+8.2%</span>
          <span className="text-gray-500 text-sm ml-2">from last month</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Tags</p>
            <p className="text-3xl font-bold text-gray-900">456</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <i className="fas fa-tags text-purple-600 text-xl"></i>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-green-600 text-sm font-medium">+5.7%</span>
          <span className="text-gray-500 text-sm ml-2">from last month</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Speakers</p>
            <p className="text-3xl font-bold text-gray-900">89</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-full">
            <i className="fas fa-microphone text-orange-600 text-xl"></i>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-green-600 text-sm font-medium">+3.1%</span>
          <span className="text-gray-500 text-sm ml-2">from last month</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <i className="fas fa-user text-blue-600 text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New user registered</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <i className="fas fa-file-alt text-green-600 text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Content published</p>
              <p className="text-xs text-gray-500">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <i className="fas fa-tags text-purple-600 text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Tag updated</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <i className="fas fa-microphone text-orange-600 text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Speaker profile updated</p>
              <p className="text-xs text-gray-500">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Server Status</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-green-600">Online</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Database</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-green-600">Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Storage</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-yellow-600">75% Used</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">API Status</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-green-600">Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;

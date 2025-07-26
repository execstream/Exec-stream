import React from 'react';

const Users = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
      <button className="bg-blue-600 text-white px-4 py-2 !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
        <i className="fas fa-plus mr-2"></i>Add User
      </button>
    </div>
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Alice Johnson</td>
            <td className="px-6 py-4 whitespace-nowrap">alice.johnson@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-red-600 hover:text-red-900 cursor-pointer">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Bob Williams</td>
            <td className="px-6 py-4 whitespace-nowrap">bob.williams@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">Editor</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-red-600 hover:text-red-900 cursor-pointer">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Users;

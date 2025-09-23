import React from 'react';
import { Save, User, Lock, Bell, Trash2 } from 'lucide-react';
const Profile: React.FC = () => {
  return <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Profile Settings
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings and preferences.
          </p>
          <div className="mt-6">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Update your personal details.
                  </p>
                </div>
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="first_name" id="first_name" defaultValue="Sarah" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="last_name" id="last_name" defaultValue="Johnson" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" defaultValue="sarah.johnson@example.com" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <div className="mt-1">
                      <select id="gender" name="gender" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">
                      Date of birth
                    </label>
                    <div className="mt-1">
                      <input type="date" name="date_of_birth" id="date_of_birth" defaultValue="1990-01-15" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Privacy & Security
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Manage your password and security settings.
                  </p>
                </div>
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Change Password
                    </h4>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>Update your password associated with your account.</p>
                    </div>
                    <div className="mt-3">
                      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Change Password
                      </button>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Two-factor authentication
                        </h4>
                        <div className="mt-1 max-w-xl text-sm text-gray-500">
                          <p>Add an extra layer of security to your account.</p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          Setup
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Data Privacy
                        </h4>
                        <div className="mt-1 max-w-xl text-sm text-gray-500">
                          <p>
                            Manage how your measurement data is stored and used.
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button type="button" className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Notifications
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Decide which notifications you want to receive.
                  </p>
                </div>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-900">
                      By Email
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="new_measurements" name="new_measurements" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="new_measurements" className="font-medium text-gray-700">
                            New measurements
                          </label>
                          <p className="text-gray-500">
                            Get notified when new measurements are available.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="size_updates" name="size_updates" type="checkbox" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="size_updates" className="font-medium text-gray-700">
                            Size updates
                          </label>
                          <p className="text-gray-500">
                            Receive notifications when your recommended sizes
                            change.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="marketing" name="marketing" type="checkbox" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="marketing" className="font-medium text-gray-700">
                            Marketing
                          </label>
                          <p className="text-gray-500">
                            Get notified about new features and special offers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="pt-6 border-t border-gray-200">
                    <legend className="text-sm font-medium text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">
                      These are delivered via mobile app.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input id="push_everything" name="push_notifications" type="radio" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                        <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="push_measurements" name="push_notifications" type="radio" defaultChecked className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                        <label htmlFor="push_measurements" className="ml-3 block text-sm font-medium text-gray-700">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="push_nothing" name="push_notifications" type="radio" className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300" />
                        <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Danger Zone
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Permanent actions that cannot be undone.
                  </p>
                </div>
                <Trash2 className="h-5 w-5 text-red-400" />
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Delete Measurement History
                    </h4>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>Remove all your measurement data from our servers.</p>
                    </div>
                    <div className="mt-3">
                      <button type="button" className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete Measurements
                      </button>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900">
                      Delete Account
                    </h4>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>
                        Permanently delete your account and all associated data.
                      </p>
                    </div>
                    <div className="mt-3">
                      <button type="button" className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Cancel
              </button>
              <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <Save className="h-4 w-4 mr-1" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Profile;
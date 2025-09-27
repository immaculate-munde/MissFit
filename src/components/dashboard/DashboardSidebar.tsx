import React from 'react';
import { Ruler, ShoppingBag, User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const navigation = [
    { name: 'Measurements', href: '#', icon: Ruler, tab: 'measurements' },
    { name: 'Size Recommendations', href: '#', icon: ShoppingBag, tab: 'recommendations' },
    { name: 'Profile Settings', href: '/profile', icon: User, tab: 'profile' },
  ];

  return (
    <div className="w-full lg:w-64 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors duration-300">
      <div className="p-6">
        {/* User Profile */}
        <div className="flex items-center mb-6">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User profile"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Sarah Johnson
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Member since 2023
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = activeTab === item.tab;
            return item.tab !== 'profile' ? (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.tab)}
                className={`${
                  isActive
                    ? 'bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                } group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
              >
                <item.icon
                  className={`${
                    isActive
                      ? 'text-purple-500 dark:text-purple-400'
                      : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                  } mr-3 flex-shrink-0 h-5 w-5`}
                  aria-hidden="true"
                />
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              >
                <item.icon
                  className="text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Settings & Logout */}
        <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <button className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200">
            <Settings className="text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 flex-shrink-0 h-5 w-5" />
            Account Settings
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-red-700 dark:hover:text-red-400 group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200">
            <LogOut className="text-gray-400 dark:text-gray-500 group-hover:text-red-500 dark:group-hover:text-red-400 mr-3 flex-shrink-0 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;

import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img 
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Sarah Johnson"
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sarah Johnson</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Senior HR Consultant</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                sarah.johnson@talenthuntpro.com
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={16} className="mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Info</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Briefcase className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">8+ years in HR Consulting</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Joined</h3>
                <p className="text-gray-600 dark:text-gray-400">March 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Notifications
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-primary-600" defaultChecked />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">New candidate matches</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-primary-600" defaultChecked />
                  <span className="ml-2 text-gray-600 dark:text-gray-400">Report updates</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Theme Preference
              </label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white">
                <option>System default</option>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: "Exported candidate report",
              date: "2 hours ago",
              icon: <User className="text-primary-600" />
            },
            {
              action: "Updated job role requirements",
              date: "Yesterday",
              icon: <Briefcase className="text-secondary-600" />
            },
            {
              action: "Generated market analysis",
              date: "3 days ago",
              icon: <Calendar className="text-accent-600" />
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                {activity.icon}
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
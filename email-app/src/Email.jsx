import React, { useState } from 'react';
import ComposeEmail from './component/ComposeEmail';
import EmailDetail from './component/EmailDetail';
import EmailList from './component/EmailList';

const Email = () => {
  const [emails, setEmails] = useState([
    { id: 1, subject: 'Welcome to the Email App', sender: 'admin@example.com', body: 'This is a welcome email.' },
    { id: 2, subject: 'Meeting Reminder', sender: 'hr@example.com', body: 'Don’t forget the meeting at 10 AM.' },
  ]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isComposing, setIsComposing] = useState(false);

  return (
    <div className="email-app bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Email Application</h1>

      <div className="email-layout flex">
       
        <div className="sidebar w-1/4 bg-white p-4 rounded-lg shadow-md">
          <button
            onClick={() => setIsComposing(true)}
            className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Compose
          </button>
          <ul className="mt-4">
            <li className="py-2 cursor-pointer hover:bg-gray-100">Inbox</li>
            <li className="py-2 cursor-pointer hover:bg-gray-100">Sent</li>
            <li className="py-2 cursor-pointer hover:bg-gray-100">Drafts</li>
          </ul>
        </div>

        
        <div className="main-content flex-1 ml-6">
          {isComposing ? (
            <ComposeEmail onClose={() => setIsComposing(false)} />
          ) : selectedEmail ? (
            <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />
          ) : (
            <EmailList emails={emails} onSelectEmail={setSelectedEmail} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Email;
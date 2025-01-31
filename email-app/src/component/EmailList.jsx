import React from 'react'

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="email-list bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Inbox</h2>
      <ul>
        {emails.map((email) => (
          <li
            key={email.id}
            onClick={() => onSelectEmail(email)}
            className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
          >
            <div className="font-semibold">{email.subject}</div>
            <div className="text-sm text-gray-600">{email.sender}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmailList
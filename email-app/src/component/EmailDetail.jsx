import React from 'react'

const EmailDetail = ({ email, onBack }) => {
  return (
    <div className="email-detail bg-white p-4 rounded-lg shadow-md">
      <button
        onClick={onBack}
        className="mb-4 text-teal-500 hover:text-teal-600"
      >
        &larr; Back
      </button>
      <h2 className="text-xl font-semibold mb-2">{email.subject}</h2>
      <div className="text-sm text-gray-600 mb-4">From: {email.sender}</div>
      <div className="email-body">{email.body}</div>
    </div>
  )
}

export default EmailDetail
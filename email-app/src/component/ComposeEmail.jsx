import React, { useState } from 'react'

const ComposeEmail = ({onClose}) => {
    const [subject, setSubject] = useState('');
    const [recipient, setRecipient] = useState('');
    const [body, setBody] = useState('');
  
    const handleSend = () => {
      alert(`Email sent to ${recipient} with subject: ${subject}`);
      onClose();
    };
  return (
    <div className="compose-email bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Compose Email</h2>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        rows="5"
      />
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="mr-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleSend}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ComposeEmail
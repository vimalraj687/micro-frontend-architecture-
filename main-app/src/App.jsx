 

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Chat from '../../chat-app/src/Chat';  
import Email from '../../email-app/src/Email';  
const App = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
          
            <header className="bg-teal-700 text-white p-6 shadow-xl">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-extrabold">My Awesome App</h1>
                    <p className="text-md mt-2">Your one-stop solution for seamless communication</p>
                </div>
            </header>

            
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex justify-center space-x-8 py-4">
                    <Link
                        to="/chat"
                        className="text-lg text-teal-700 hover:text-teal-900 font-medium transition duration-300"
                    >
                        Chat
                    </Link>
                    <Link
                        to="/email"
                        className="text-lg text-teal-700 hover:text-teal-900 font-medium transition duration-300"
                    >
                        Email
                    </Link>
                </div>
            </nav>

            
            <main className="flex-grow container mx-auto p-6">
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/email" element={<Email />} />
                </Routes>
            </main>
 
            <footer className="bg-teal-700 text-white p-6 mt-12 shadow-xl">
                <div className="container mx-auto text-center">
                    <p className="text-sm">© 2025 My Awesome App. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="#" className="text-sm hover:underline mx-3">Privacy Policy</a>
                        <a href="#" className="text-sm hover:underline mx-3">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;

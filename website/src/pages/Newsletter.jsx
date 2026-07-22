import React, { useState } from 'react';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            setStatus('error');
            return;
        }

        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 flex justify-center">
            <div className="bg-white p-8 shadow-sm rounded-xl border border-gray-100 w-full max-w-2xl text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Stay Updated With DishDash</h2>
                <p className="text-base text-gray-500 mb-6">
                    Get updates about our latest menus, special packages and offers.
                </p>
                
                <form onSubmit={handleSubscribe}>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-800 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-[#0b132b] hover:bg-black text-white font-medium px-8 py-3 rounded-lg text-base transition-colors shrink-0"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>

                {status === 'error' && (
                    <p className="text-red-500 text-sm mt-3">Please enter a valid email address.</p>
                )}
                {status === 'success' && (
                    <p className="text-green-600 text-sm mt-3">Thank you for staying updated with DishDash!</p>
                )}
            </div>
        </div>
    );
};
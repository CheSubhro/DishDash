
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiShield, FiArrowRight, FiLoader } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth'; // আপনার প্রজেক্টের হুক পাথ অনুযায়ী ঠিক করে নেবেন

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer' // ডিফল্ট রোল কাস্টমার
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    // যদি আপনার useAuth হুকে register ফাংশন থাকে, তবে তা এভাবে ব্যবহার করতে পারেন:
    // const { register } = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // এখানে আপনার ব্যাকএন্ড রেজিস্টার অ্যাকশন বা রিডেক্স থাঙ্ক কল হবে
            // যেমন: await register(formData);
            
            console.log('Register Data:', formData);
            
            // সাময়িক সিমুলেশন (সফল হলে হোমে বা লগইন পেজে রিডাইরেক্ট)
            setTimeout(() => {
                setLoading(false);
                navigate('/'); 
            }, 1000);

        } catch (err) {
            setError(err?.response?.data?.message || 'Something went wrong during registration.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-5rem)] bg-slate-50/70 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md w-full space-y-8">
                
                {/* ================= HEADER CARD ================= */}
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100">
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
                    
                    <div className="relative text-center space-y-2 mb-8">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-secondary text-white text-2xl font-bold shadow-lg mb-2">
                            🚀
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                            Create an Account
                        </h1>
                        <p className="text-sm text-slate-500">
                            Join DishDash and explore delicious food today
                        </p>
                    </div>

                    {/* Error Message Box */}
                    {error && (
                        <div className="mb-6 rounded-2xl bg-rose-50 p-4 border border-rose-100 text-sm font-semibold text-rose-600 text-center">
                            {error}
                        </div>
                    )}

                    {/* ================= FORM ================= */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        {/* Name Field */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiUser size={14} className="text-primary" /> Full Name
                            </label>
                            <input 
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full text-sm font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm focus:outline-none focus:border-primary focus:bg-white transition"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiMail size={14} className="text-primary" /> Email Address
                            </label>
                            <input 
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="user@dishdash.com"
                                className="w-full text-sm font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm focus:outline-none focus:border-primary focus:bg-white transition"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiLock size={14} className="text-primary" /> Password
                            </label>
                            <input 
                                type="password"
                                name="password"
                                required
                                minLength={6}
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full text-sm font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm focus:outline-none focus:border-primary focus:bg-white transition"
                            />
                        </div>

                        {/* Role Selection (Optional / If needed for testing) */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiShield size={14} className="text-primary" /> Account Role
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full text-sm font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm focus:outline-none focus:border-primary focus:bg-white transition capitalize"
                            >
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <FiLoader className="animate-spin" size={18} />
                                    <span>Creating Account...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign Up</span>
                                    <FiArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Link to Login */}
                    <div className="mt-8 text-center text-sm text-slate-500 border-t border-slate-100 pt-6">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-primary hover:underline">
                            Log in
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;
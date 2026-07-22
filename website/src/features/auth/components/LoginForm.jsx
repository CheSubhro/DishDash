
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight, FiLoader } from 'react-icons/fi';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login({ email, password });
            if (!result.error) {
                navigate('/');
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    return (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            {/* Error Message Display */}
            {error && (
                <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600 border border-red-100 text-center">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <FiMail size={18} />
                    </span>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                    Password
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <FiLock size={18} />
                    </span>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between text-sm pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span className="text-slate-600">Remember me</span>
                </label>
            </div>

            {/* Sign In Button */}
            <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center items-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 transition-all mt-2 disabled:opacity-70"
            >
                {loading ? (
                    <>
                        <FiLoader className="animate-spin" size={18} />
                        <span>Signing in...</span>
                    </>
                ) : (
                    <>
                        <span>Sign In</span>
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                    </>
                )}
            </button>
        </form>
    );
};

export default LoginForm;
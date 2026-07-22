
import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiShield, FiCalendar, FiEdit3, FiShoppingBag, FiSettings } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

    return (
        <div className="min-h-[calc(100vh-5rem)] bg-slate-50/70 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-8">
                
                {/* ================= HEADER CARD ================= */}
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100">
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl"></div>
                    
                    <div className="relative flex flex-col md:flex-row items-center gap-8">
                        {/* Avatar */}
                        <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-tr from-primary to-secondary text-white text-5xl font-bold shadow-xl border-4 border-white">
                            {user?.avatar || user?.profileImage ? (
                                <img 
                                    src={user.avatar || user.profileImage} 
                                    alt={user?.name || user?.fullName || 'User Avatar'} 
                                    className="h-full w-full object-cover"
                                />
                            ) : (user?.name || user?.fullName) ? (
                                <span>{(user?.name || user?.fullName).charAt(0).toUpperCase()}</span>
                            ) : (
                                <FiUser />
                            )}
                        </div>

                        {/* User Basic Info */}
                        <div className="text-center md:text-left flex-1 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                                            {user?.name || user?.fullName || 'DishDash User'}
                                        </h1>
                                        {isAdmin && (
                                            <span className="rounded-xl bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 border border-indigo-100 shadow-sm">
                                                Admin
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-base text-slate-500 mt-2 flex items-center justify-center md:justify-start gap-2">
                                        <FiMail size={17} className="text-primary" />
                                        {user?.email || 'user@dishdash.com'}
                                    </p>
                                </div>
                                
                                <span className="inline-flex items-center gap-2 self-center md:self-start rounded-2xl bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600 border border-emerald-100 shadow-sm">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Active Account
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= PERSONAL INFORMATION SECTION (BIG & SPACIOUS) ================= */}
                <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 gap-4">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                                Personal Information
                            </h2>
                            <p className="text-sm text-slate-500 mt-0.5">
                                Manage your personal details and account settings
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiUser size={15} className="text-primary" /> Full Name
                            </span>
                            <div className="text-base font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm">
                                {user?.name || user?.fullName || 'N/A'}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiMail size={15} className="text-primary" /> Email Address
                            </span>
                            <div className="text-base font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm">
                                {user?.email || 'N/A'}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiShield size={15} className="text-primary" /> Account Role
                            </span>
                            <div className="text-base font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm capitalize">
                                {user?.role || 'Customer'}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <FiCalendar size={15} className="text-primary" /> Member Since
                            </span>
                            <div className="text-base font-semibold text-slate-800 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 shadow-sm">
                                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
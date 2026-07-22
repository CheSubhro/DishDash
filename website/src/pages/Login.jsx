
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../features/auth/components/LoginForm';

const Login = () => {
    return (
        <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-8 sm:px-6 lg:px-8 bg-slate-50">
            <div className="w-full max-w-md space-y-6 rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-primary bg-white shadow-md mb-3">
                        <span className="text-xl font-black tracking-widest text-slate-900">
                            DD
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Welcome Back to DishDash
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Please enter your details to sign in
                    </p>
                </div>

                {/* Extracted LoginForm Component */}
                <LoginForm />

                {/* Footer Link */}
                <p className="text-center text-sm text-slate-500 pt-2">
                    Don't have an account?{' '}
                    <Link to="/contact" className="font-medium text-primary hover:underline">
                        Contact us
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
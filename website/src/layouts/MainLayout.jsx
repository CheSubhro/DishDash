
import React from 'react';
import { Navbar, Footer } from '../components/layout';

const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
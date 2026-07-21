
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full py-4 px-6 bg-white border-t border-gray-200 text-center text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
                <p>© {new Date().getFullYear()} <span className="font-semibold text-gray-700">CheSubhro's App</span>. All rights reserved.</p>
            </div>
            <div className="flex gap-4 text-xs">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
        </footer>
    );
}
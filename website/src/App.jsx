
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/common';
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <Router>
            <ErrorBoundary>
                <MainLayout>
                    <h1 className="text-2xl font-bold text-primary">
                        Welcome to CheSubhro's App
                    </h1>
                </MainLayout>
            </ErrorBoundary>
        </Router>
    );
}

export default App;
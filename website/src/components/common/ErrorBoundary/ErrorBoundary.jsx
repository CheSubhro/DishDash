
import React, { Component } from 'react';
import { Button } from "@heroui/react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    // Updates the state so the next render will show the fallback UI
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    // Used for logging error details (e.g., to console or error tracking services like Sentry)
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Renders the fallback UI when an unexpected error occurs
            return (
                <div className="flex items-center justify-center min-h-screen p-5 bg-gray-50">
                    <div className="flex flex-col items-center text-center space-y-4 max-w-md">
                        <h2 className="text-2xl font-bold text-red-500">
                            Oops! Something went wrong.
                        </h2>
                        <p className="text-base text-gray-600">
                            We encountered an unexpected error. Please try refreshing the page.
                        </p>
                        <Button 
                            color="primary" 
                            onPress={() => window.location.reload()}
                        >
                            Reload Page
                        </Button>
                    </div>
                </div>
            );
        }

        // If there is no error, renders the children components normally
        return this.props.children;
    }
}

export default ErrorBoundary;
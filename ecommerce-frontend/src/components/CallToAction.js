// CallToAction.js
import React from 'react';

const CallToAction = () => {
    return (
        <div className="call-to-action bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Updated!</h2>
                <p className="mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="p-2 border border-gray-300 rounded"
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded">Subscribe</button>
            </div>
            <style jsx>{`
                .call-to-action {
                    background-color: #f7fafc;
                    padding: 2rem 0;
                }
            `}</style>
        </div>
    );
};

export default CallToAction;
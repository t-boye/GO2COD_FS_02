import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdSection = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
  
    const handleClick = (msg) => {
        setMessage(msg);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false); // Hide the popup after a few seconds
        }, 3000); // Adjust the duration as needed
    };

    const animations = {
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 },
        },
        slideIn: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: 100, opacity: 0 },
            transition: { duration: 0.5 },
        },
        bounce: {
            initial: { scale: 0 },
            animate: { scale: 1 },
            exit: { scale: 0 },
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="ad-section flex justify-center py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl relative">
                <h2 className="text-2xl font-bold mb-4 text-center">Special Promotions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="ad bg-blue-100 p-4 rounded-lg text-center" onClick={() => handleClick('🎉 50% Off on All Items! 🎉')}>
                        <h3 className="font-semibold">50% Off on All Items!</h3>
                        <p>Limited time offer. Don't miss out!</p>
                    </div>
                    <div className="ad bg-green-100 p-4 rounded-lg text-center" onClick={() => handleClick('🎊 Buy One Get One Free! 🎊')}>
                        <h3 className="font-semibold">Buy One Get One Free!</h3>
                        <p>On selected items only.</p>
                    </div>
                    <div className="ad bg-yellow-100 p-4 rounded-lg text-center" onClick={() => handleClick('🚚 Free Shipping on Orders Over $50! 🚚')}>
                        <h3 className="font-semibold">Free Shipping on Orders Over $50!</h3>
                        <p>Shop now and save!</p>
                    </div>
                    <div className="ad bg-red-100 p-4 rounded-lg text-center" onClick={() => handleClick('🎈 20% Off Your First Order! 🎈')}>
                        <h3 className="font-semibold">20% Off Your First Order!</h3>
                        <p>Sign up today!</p>
                    </div>
                </div>
                {showMessage && (
                    <motion.div 
                        {...animations.fadeIn} 
                        className="message-popup"
                    >
                        {message}
                    </motion.div>
                )}
            </div>

            <style jsx>{`
                .message-popup {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #f0f8ff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    font-size: 1.5rem;
                    text-align: center;
                    z-index: 10;
                }
                .ad {
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                .ad:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default AdSection;
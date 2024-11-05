import React from 'react';

// Expanded testimonials data with ratings
const testimonialsData = [
    { id: 1, text: "This product changed my life!", author: "Lucy Nabarise", rating: 5 },
    { id: 2, text: "Excellent service and quality!", author: "John Kuany Deng", rating: 4 },
    { id: 3, text: "I highly recommend this to everyone!", author: "Victor Obinna", rating: 5 },
    { id: 4, text: "A fantastic experience from start to finish!", author: "Michael Brown", rating: 4 },
    { id: 5, text: "The best investment I've made this year!", author: "Beatrice Korkor", rating: 5 },
    { id: 6, text: "Customer support was incredibly helpful!", author: "Tete Boye", rating: 3 },
];

// Function to shuffle the testimonials array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Function to render star ratings
const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>
                ★
            </span>
        );
    }
    return stars;
};

const Testimonials = () => {
    // Shuffle testimonials
    const shuffledTestimonials = shuffleArray([...testimonialsData]);

    return (
        <div className="testimonials-container">
            <h2 className="text-2xl font-bold text-center mb-4">What Our Customers Say</h2>
            <div className="testimonials-wrapper">
                {shuffledTestimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-item">
                        <p className="italic">"{testimonial.text}"</p>
                        <p className="font-bold text-right">- {testimonial.author}</p>
                        <div className="flex justify-end mt-2">
                            {renderStars(testimonial.rating)}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .testimonials-container {
                    overflow: hidden;
                    position: relative;
                    background-color: #f9fafb;
                    padding: 20px 0;
                }
                .testimonials-wrapper {
                    display: flex;
                    animation: scroll 10s linear infinite;
                }
                .testimonial-item {
                    min-width: 300px; /* Adjust based on your design */
                    padding: 20px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin-right: 20px; /* Space between testimonials */
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Testimonials;
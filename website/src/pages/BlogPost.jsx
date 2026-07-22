
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiUser } from 'react-icons/fi';

const blogPosts = [
    {
        id: '1', 
        title: 'Top 5 Catering Trends for Modern Corporate Events',
        content: 'Discover the latest food presentation and menu trends that are taking corporate gatherings and modern offices by storm. In this article, we dive deep into how interactive food stations, sustainable packaging, and customized corporate lunch boxes are redefining office catering standards in 2026.',
        category: 'Corporate Events',
        author: 'Chef Tanvir Ahmed',
        date: 'June 15, 2026',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '2',
        title: 'How to Choose the Perfect Menu for Your Wedding Reception',
        content: 'Planning a wedding? Here is a complete guide to balancing diverse guest preferences while keeping your special day delicious and stress-free. From appetizers to grand desserts, learn how our master chefs curate unforgettable culinary experiences.',
        category: 'Weddings',
        author: 'Nusrat Jahan',
        date: 'June 10, 2026',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '3',
        title: 'The Art of Plating: Why Visual Appeal Matters in Catering',
        content: 'Food tastes better when it looks stunning. Learn the secrets behind our master chefs breathtaking food presentation techniques and how aesthetic plating elevates any private or public dining event.',
        category: 'Culinary Arts',
        author: 'Chef Rahat Hossain',
        date: 'May 28, 2026',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '4',
        title: 'Healthy and Flavorful: Healthy Buffet Options Your Guests Will Love',
        content: 'Who says healthy food has to be boring? Explore our vibrant, nutrient-packed catering options designed for health-conscious gatherings, corporate wellness retreats, and family celebrations.',
        category: 'Health & Nutrition',
        author: 'Dr. Sabrina Chowdhury',
        date: 'May 20, 2026',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    },
];

export default function BlogPost() {

    const { id } = useParams(); 
    const post = blogPosts.find((p) => p.id === id); s

    if (!post) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Blog post not found!</h2>
                <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">
                    &larr; Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-primary mb-8"
                >
                    <FiArrowLeft size={16} />
                    Back to Blog
                </Link>

                {/* Article Header */}
                <article className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
                    <div className="relative h-72 sm:h-96">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                        <span className="absolute top-4 left-4 rounded-xl bg-slate-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                            {post.category}
                        </span>
                    </div>

                    <div className="p-6 sm:p-10">
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                            <span className="flex items-center gap-1">
                                <FiUser size={14} />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                                <FiCalendar size={14} />
                                {post.date}
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            {post.title}
                        </h1>

                        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                            <p>{post.content}</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
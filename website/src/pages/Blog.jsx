
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
    {
        id: 1,
        title: 'Top 5 Catering Trends for Modern Corporate Events',
        excerpt: 'Discover the latest food presentation and menu trends that are taking corporate gatherings and modern offices by storm.',
        category: 'Corporate Events',
        author: 'Chef Tanvir Ahmed',
        date: 'June 15, 2026',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 2,
        title: 'How to Choose the Perfect Menu for Your Wedding Reception',
        excerpt: 'Planning a wedding? Here is a complete guide to balancing diverse guest preferences while keeping your special day delicious and stress-free.',
        category: 'Weddings',
        author: 'Nusrat Jahan',
        date: 'June 10, 2026',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 3,
        title: 'The Art of Plating: Why Visual Appeal Matters in Catering',
        excerpt: 'Food tastes better when it looks stunning. Learn the secrets behind our master chefs’ breathtaking food presentation techniques.',
        category: 'Culinary Arts',
        author: 'Chef Rahat Hossain',
        date: 'May 28, 2026',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 4,
        title: 'Healthy and Flavorful: Healthy Buffet Options Your Guests Will Love',
        excerpt: 'Who says healthy food has to be boring? Explore our vibrant, nutrient-packed catering options designed for health-conscious gatherings.',
        category: 'Health & Nutrition',
        author: 'Dr. Sabrina Chowdhury',
        date: 'May 20, 2026',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    },
];

export default function Blog() {
    
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ================= HEADER ================= */}
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Our Journal
                    </span>
                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Latest News & Culinary Insights
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                        Stay updated with expert catering tips, food trends, and behind-the-scenes stories from the DishDash kitchen.
                    </p>
                </div>

                {/* ================= BLOG GRID ================= */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                        >
                            <div className="relative h-60 overflow-hidden sm:h-72">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 rounded-xl bg-slate-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                    {post.category}
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                                <div>
                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <FiUser size={14} />
                                            {post.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiCalendar size={14} />
                                            {post.date}
                                        </span>
                                    </div>

                                    <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                                        {post.title}
                                    </h2>

                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                                    >
                                        Read Full Article
                                        <FiArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
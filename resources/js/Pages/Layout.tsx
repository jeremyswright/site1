import { Link } from '@inertiajs/react'

import { useState } from 'react';

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main>
            <header>
                <nav className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-white text-lg">
                            <Link href="/">Brand</Link>
                        </div>
                        <div className="block md:hidden">
                            <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
                            <div className="text-sm md:flex-grow">
                                <Link href="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                                    Home
                                </Link>
                                <Link href="/about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
                                    About
                                </Link>
                                <Link href="/contact" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <article>{children}</article>
        </main>
    );
}

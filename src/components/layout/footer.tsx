
'use client'
import React from "react"
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-slate-800 text-white py-12">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Directors cut</h3>
                        <p className="text-slate-300 leading-relaxed">Sharing life's Beautiful moments, personal stories, and thoughtful reflections on the things that matter most.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Quick links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Stay Connected</h4>
                        <p className="text-slate-300 mb-4">Follow along for updates</p>


                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-300 hover:text-white transition-colors" aria-label="Email">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Nathania's Corner. Made with ❤️ for sharing life's moments.
                    </p>

                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                        Back to top
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    )
}

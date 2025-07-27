import React from "react"
import HeaderComp from "../layout/header"
import { Button } from "../ui/button"

export default function Landing() {



    return (
    
    <div className="min-h-screen bg-white">
        <HeaderComp></HeaderComp>
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-8
        lg:p-16 flex flex-col justify-center">
            <div className="max-w-lg">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Life Stories</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Book Reviews</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Film Insights</span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Reflections</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">Sharing my Lifes Beautiful Moments <em className="italic font-light">and Personal Stories</em></h1>
            <p className="text-xl mb-8 txt-blue-100 leading-relaxed">
                Join me for heartfelt reflextions, authentic life updates, and thoughtful insights on the books and films that move us.
            </p>

            {/*CALL to Acion */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="border-white text-white" size="lg">Start Reading</Button>
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">Subscribe for updates</Button>
            </div>
        </div>

        <div className="lg:w-1/2 bg-gray-50 flex itens-center justify-center p-8 lg:p-16">
            <div className="max-w-md text-center">
                {/* Placeholder for sister's photo */}
                <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-xl">
                    <div className="text-blue-600 text-6xl font-light">S</div>
                </div>

                {/**About preview*/}
                <h2 className="text-2xl font-semibold text-gray-800 md-4">Hi, I'm "Your name here"</h2>
                <p className="text-gray-600 leading-relaxed">
                    Welcome to my corner of the internet where I share moments, stories, and discoveries that shape my everyday life.
                </p>
            </div>
         </div>

         {/* Coming Soon*/}
         <div className="py-16 px-8 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">What to Expect</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    While I'm just getting started, here's what you can look forward to...
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Life stories*/}
                    <div className="p-6">
                        
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Moments</h3>
                        <p className="text-gray-600">Authentic stories about daily life, experiences, and the little things that matter most.</p>
                    </div>


                    {/* Thoughts and Reflections */}
                    <div className="p-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="2-8 h-8 text-blue-600" fill="none" stroke="currectColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Deep Thoughts</h3>
                        <p className="text-gray-600">Thoughtfull reflections on lie, relationships, and the journey of growing and learning.</p>
                    </div>

                    {/* Creative Interests */}
                    <div className="p-6">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="2-8 h-8 text-blue-600" fill="none" stroke="currectColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Books & More</h3>
                        <p className="text-gray-600">Reviews and thoughts on books, films, and other creative works that inspire and move me..</p>
                    </div>
                </div>
            </div>
         </div>
    
        {/* Newsletter Section */}
        <div className="py-16 px-8 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text0el font-light text-gray-800 mb-4">Stay Connected</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Be the first to know when I share new stories and thoughts
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Subscribe
                    </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4"> No Spam, just juthentic stories and updates</p>
            </div>
        </div>
    </div>

    )
}
import React from "react"
import HeaderComp from "../layout/header"

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
        </div>
    </div>
    
    )
}
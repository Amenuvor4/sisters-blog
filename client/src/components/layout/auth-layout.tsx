import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
    children: React.ReactNode
    title: string
    subtitle: string
}


export default function AuthLayout({ children, title, subtitle} : AuthLayoutProps){
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/*For debugging purposes */}
            <Button
                asChild
                size="sm"
                variant="ghost"
                className="absolute top-4 right-3 z-10 text-gray-600 hover:text-gray-800">
                    <Link href="/">Go to Home</Link>
                </Button>

                {/*Left branding */}
                <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-t-br from-blue-500 via-blue-600 to-blue-700 text-white p-12">
                    <div className="max-w-md text-center">
                        <h1 className="text-4x; font-bold mp-4">Nathania's blog</h1>
                        <p className="text-xl opacity-90 mb-8">
                            Get insite into my life
                        </p>
                        <div className="w-24 h-1 bg-white/30 rounded-full mx-auto"></div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col justify-center items-center p-8 bg-white">
                    <div className="w-full max-w-md">
                        {/* Mobile header */}
                        <div className="lg:hidden text-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Nathania's Blog</h1>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                            <p className="text-gray-600">{subtitle}</p>
                        </div>

                        {children}
                    </div>
                </div>
        </div>
    )
}
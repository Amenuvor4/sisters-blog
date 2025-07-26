import Link from "next/link"
import { Button } from "../ui/button"

export default function HeaderComp() {
    return(
        <header className="relative z-10 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <nav className="flex items-center justify-between">
                    {/*Logo */}
                    <Link href="/" className="text-2xl font-bold text-slate-800">Directors Cut</Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/posts" className="text-slate-600 hover:text-blue-600 transition-colors">Posts</Link>
                        <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
                        <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
                        <Link href="/login" className="text-slate-600 hover:text-blue-600 transition-colors">Sign In</Link>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
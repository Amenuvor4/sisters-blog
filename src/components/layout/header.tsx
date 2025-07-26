import Link from "next/Link"
import {Button} from "@/components/ui/button"

export default function HeaderComp() {
    return(
        <header className="relative z-10 px-6 py-4">
            <div className="max-w-7x1 mx-auto">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="text-2x1 font-bold text-slate-800">Directors Cut</Link>
                    <div className="hidden md:flex items-container space-x-8">
                        <Link href="/posts" className="text-slate-600 hover:text-blue-600 transition-colors">Posts</Link>
                        <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
                        <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
                        <Link href="/login" className="text-slate-600 hover:text-blue-600 transistion-colors">Sign In</Link>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Subscribe</Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
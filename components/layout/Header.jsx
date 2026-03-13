import { Calculator } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-primary-olive to-primary-mint">
                            <Calculator className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold gradient-text from-white to-gray-400">
                                Math Tools Hub
                            </h1>
                            <p className="text-xs text-gray-400">Free Online Calculators</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/sitemap" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Calculators
                        </Link>
                        <Link href="/converter" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Converters
                        </Link>
                        <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

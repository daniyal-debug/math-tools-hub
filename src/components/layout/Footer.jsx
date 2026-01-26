import Link from 'next/link'
import { Heart, Mail, Twitter, Github } from 'lucide-react'
import { categories } from '../../utils/calculatorData'

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black/50 backdrop-blur-3xl">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-white tracking-tighter">MATH TOOLS HUB</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            A premium suite of free online calculators and converters designed for speed, accuracy, and ease of use.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="mailto:support@mathtoolshub.com" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Categories</h4>
                        <ul className="space-y-4">
                            {categories.slice(0, 5).map(cat => (
                                <li key={cat.id}>
                                    <Link href={`/category/${cat.id}`} className="text-gray-400 hover:text-primary-mint transition-colors">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Resources</h4>
                        <ul className="space-y-4 font-medium">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Legal</h4>
                        <ul className="space-y-4 font-medium">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-500">
                        © 2026 Math Tools Hub. All rights reserved. Precision guaranteed.
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        Made with <Heart className="w-4 h-4 text-primary-coral fill-current" /> by Velociti Labs Inc.
                    </p>
                </div>
            </div>
        </footer>
    )
}

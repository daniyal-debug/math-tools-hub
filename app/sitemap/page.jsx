import { categories, calculators } from '../../utils/calculatorData'

import { Map, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Sitemap - Math Tools Hub',
    description: 'Explore all calculators, categories, and utilities available on Math Tools Hub.',
}

export default function Sitemap() {
    return (
        <div className="max-w-6xl mx-auto space-y-12 py-12 px-4 animate-fade-in">
            <section className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary-mint/20">
                    <Map className="w-8 h-8 text-primary-mint" />
                </div>
                <div>
                    <h1 className="text-4xl font-black text-white">Sitemap</h1>
                    <p className="text-gray-400">All tools and pages indexed for easy navigation.</p>
                </div>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {categories.map(cat => (
                    <div key={cat.id} className="space-y-6">
                        <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                            <cat.icon className={`w-5 h-5 text-primary-${cat.color}`} />
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider">{cat.name}</h2>
                        </div>
                        <ul className="space-y-3">
                            {calculators.filter(c => c.category === cat.id).map(calc => (
                                <li key={calc.id}>
                                    <Link href={`/calculator/${calc.id}`} className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors">
                                        <span>{calc.name} Calculator</span>
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                        <div className="w-5 h-5 bg-white/10 rounded" />
                        <h2 className="text-xl font-bold text-white uppercase tracking-wider">Company</h2>
                    </div>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

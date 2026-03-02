import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Card from '../../components/ui/Card'
import { converterCategories } from '../../utils/unitDefinitions'

export const metadata = {
    title: 'Unit Converters — Free Online Conversion Tools | Math Tools Hub',
    description: 'Convert length, weight, temperature, area, volume, speed, pressure, energy, power, data storage, and more with our free, fast, SEO-optimized unit converters.',
    alternates: {
        canonical: 'https://math-tools-hub.vercel.app/converter',
    },
    openGraph: {
        title: 'Unit Converters — Free Online Conversion Tools | Math Tools Hub',
        description: 'Convert length, weight, temperature, area, volume, speed, pressure, energy, power, data storage, and more with our free, fast, SEO-optimized unit converters.',
        url: 'https://math-tools-hub.vercel.app/converter',
        siteName: 'Math Tools Hub',
        type: 'website',
    },
}

export default function ConverterIndexPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-fade-in px-4">
            {/* Hero */}
            <section className="text-center space-y-6 py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-cyan/5 blur-[120px] -z-10 animate-pulse" />

                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-primary-cyan" />
                    <span className="text-sm font-medium text-gray-300">{converterCategories.length} Converter Categories</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black gradient-text from-white via-gray-200 to-gray-500 tracking-tighter py-2">
                    Unit Converters
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Fast, accurate, and beautifully designed unit conversion tools for every measurement type.
                </p>
            </section>

            {/* Categories Grid */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-white tracking-tight">All Converter Categories</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {converterCategories.map((cat, index) => {
                        const Icon = cat.icon
                        return (
                            <Link key={cat.id} href={`/converter/${cat.id}`}>
                                <Card
                                    color={cat.color}
                                    className="group p-6 space-y-4 h-full cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 40}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-3 rounded-xl bg-primary-${cat.color}/20 ring-1 ring-primary-${cat.color}/30 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className={`w-6 h-6 text-primary-${cat.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary-mint transition-colors">
                                            {cat.name}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2">
                                        {cat.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-1">
                                        <span className="text-xs text-gray-500">{cat.units.length} units</span>
                                        <div className="flex items-center gap-1 text-primary-mint text-sm font-semibold opacity-60 group-hover:opacity-100 transition-all">
                                            <span>Convert</span>
                                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* SEO Content */}
            <section className="glass-card p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white">About Our Unit Converters</h2>
                <div className="text-gray-400 leading-relaxed space-y-4">
                    <p>
                        Math Tools Hub offers a comprehensive collection of free online unit converters covering {converterCategories.length} measurement categories.
                        Each converter provides instant, real-time results with high precision — no page reloads required.
                    </p>
                    <p>
                        Our converters support both metric (SI) and imperial measurement systems, making them ideal for students, engineers, scientists,
                        travelers, and professionals worldwide. Every converter includes a quick-reference table, swap functionality, and one-click copy for convenience.
                    </p>
                    <p>
                        From everyday conversions like kilometers to miles and kilograms to pounds, to specialized conversions like Pascal to PSI and
                        megabits to megabytes, our tools are designed for speed, accuracy, and ease of use on any device.
                    </p>
                </div>
            </section>
        </div>
    )
}

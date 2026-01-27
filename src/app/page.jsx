import Card from '../components/ui/Card'
import AdSpace from '../components/ui/AdSpace'
import { categories, calculators } from '../utils/calculatorData'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center space-y-8 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-mint/5 blur-[120px] -z-10 animate-pulse" />

                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-bounce-slow">
                    <Sparkles className="w-4 h-4 text-primary-mint" />
                    <span className="text-sm font-medium text-gray-300">50+ Professional Tools</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black gradient-text from-white via-gray-200 to-gray-500 tracking-tighter py-2">
                    Math Tools Hub
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    A premium suite of lightning-fast calculators built for precision and speed.
                </p>

                <div className="flex justify-center gap-4 pt-4">
                    <a href="#categories" className="btn btn-primary btn-wide rounded-2xl normal-case text-lg shadow-xl shadow-primary-olive/20 hover:scale-105 transition-all">
                        Browse Categories
                    </a>
                </div>
            </section>

            {/* Ad Space */}
            <AdSpace size="728x90" className="opacity-60" />

            {/* Categories Grid */}
            <section id="categories" className="space-y-10 px-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Browse by Category</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon
                        return (
                            <Link key={cat.id} href={`/category/${cat.id}`}>
                                <Card
                                    color={cat.color}
                                    className="group p-8 space-y-6 h-full cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-4 rounded-2xl bg-primary-${cat.color}/20 ring-1 ring-primary-${cat.color}/30 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className={`w-8 h-8 text-primary-${cat.color}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-mint transition-colors">
                                            {cat.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {cat.description}
                                    </p>
                                    <div className="pt-2 flex items-center gap-2 text-primary-mint font-semibold opacity-60 group-hover:opacity-100 transition-all duration-300">
                                        <span>Explore Tools</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* Popular Section (Featured) */}
            <section className="space-y-10 px-4 py-12">
                <h2 className="text-4xl font-bold text-white tracking-tight">Popular Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {calculators.slice(0, 8).map((calc) => {
                        const Icon = calc.icon
                        return (
                            <Link
                                key={calc.id}
                                href={`/calculator/${calc.id}`}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-left"
                            >
                                <div className={`p-2 rounded-lg bg-primary-${calc.color}/20`}>
                                    <Icon className={`w-5 h-5 text-primary-${calc.color}`} />
                                </div>
                                <span className="font-medium text-gray-200">{calc.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* Features Section */}
            <section className="grid md:grid-cols-3 gap-6 py-12">
                <Card color="olive" hover={false} className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white">⚡ Lightning Fast</h3>
                    <p className="text-sm text-gray-400">
                        Instant calculations with real-time results as you type.
                    </p>
                </Card>

                <Card color="purple" hover={false} className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white">📱 Mobile Friendly</h3>
                    <p className="text-sm text-gray-400">
                        Optimized for all devices - desktop, tablet, and mobile.
                    </p>
                </Card>

                <Card color="coral" hover={false} className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white">🎯 Accurate</h3>
                    <p className="text-sm text-gray-400">
                        Precise calculations with input validation and error handling.
                    </p>
                </Card>
            </section>
        </div>
    )
}

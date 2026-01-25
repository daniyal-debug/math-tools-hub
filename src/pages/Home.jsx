import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import AdSpace from '../components/ui/AdSpace'
import { calculators } from '../utils/calculatorData'
import { Sparkles } from 'lucide-react'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <Sparkles className="w-4 h-4 text-primary-mint" />
                    <span className="text-sm text-gray-300">15+ Free Calculators</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold gradient-text from-white via-gray-200 to-gray-400 text-shadow">
                    Math Tools Hub
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Your comprehensive suite of free online calculators for all your mathematical needs
                </p>
            </section>

            {/* Top Ad Space */}
            <AdSpace size="728x90" />

            {/* Calculators Grid */}
            <section id="calculators" className="space-y-6">
                <h2 className="text-3xl font-bold text-white">All Calculators</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {calculators.map((calc, index) => {
                        const Icon = calc.icon
                        return (
                            <Card
                                key={calc.id}
                                color={calc.color}
                                onClick={() => navigate(`/calculator/${calc.id}`)}
                                className="p-6 space-y-4"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="flex items-start justify-between">
                                    <div className={`p-3 rounded-xl bg-primary-${calc.color}/20`}>
                                        <Icon className={`w-6 h-6 text-primary-${calc.color}`} />
                                    </div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                                        {calc.category}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-white">
                                        {calc.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">
                                        {calc.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <span className="text-sm text-gray-500 hover:text-white transition-colors">
                                        Open Calculator →
                                    </span>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </section>

            {/* Bottom Ad Space */}
            <AdSpace size="728x90" />

            {/* Features Section */}
            <section className="grid md:grid-cols-3 gap-6 py-12">
                <Card color="olive" hover={false} className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white">⚡ Lightning Fast</h3>
                    <p className="text-sm text-gray-400">
                        Instant calculations with real-time results as you type
                    </p>
                </Card>

                <Card color="purple" hover={false} className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white">📱 Mobile Friendly</h3>
                    <p className="text-sm text-gray-400">
                        Optimized for all devices - desktop, tablet, and mobile
                    </p>
                </Card>

                <Card color="coral" hover={false} className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white">🎯 Accurate</h3>
                    <p className="text-sm text-gray-400">
                        Precise calculations with input validation and error handling
                    </p>
                </Card>
            </section>
        </div>
    )
}

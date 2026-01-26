import Card from '../../../src/components/ui/Card'
import AdSpace from '../../../src/components/ui/AdSpace'
import { getCategoryById, getCalculatorsByCategory, categories } from '../../../src/utils/calculatorData'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    const category = getCategoryById(params.id)
    if (!category) return { title: 'Category Not Found' }

    return {
        title: `${category.name} Calculators - Math Tools Hub`,
        description: category.description,
    }
}

export async function generateStaticParams() {
    return categories.map((cat) => ({
        id: cat.id,
    }))
}

export default function CategoryPage({ params }) {
    const category = getCategoryById(params.id)

    if (!category) {
        notFound()
    }

    const categoryCalculators = getCalculatorsByCategory(params.id)

    return (
        <div className="space-y-12 animate-fade-in px-4">
            {/* Header */}
            <div className="flex items-center gap-6">
                <Link
                    href="/"
                    className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-400" />
                </Link>

                <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-primary-${category.color}/20`}>
                        <category.icon className={`w-10 h-10 text-primary-${category.color}`} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">{category.name}</h1>
                        <p className="text-gray-400 text-lg mt-1">{category.description}</p>
                    </div>
                </div>
            </div>

            <AdSpace size="728x90" className="opacity-80" />

            {/* Tools Grid */}
            <section className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryCalculators.map((calc) => {
                        const Icon = calc.icon
                        return (
                            <Link key={calc.id} href={`/calculator/${calc.id}`}>
                                <Card
                                    color={calc.color}
                                    className="group p-8 space-y-6 h-full cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl bg-primary-${calc.color}/20 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className={`w-6 h-6 text-primary-${calc.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary-mint transition-colors">
                                            {calc.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm line-clamp-2">
                                        {calc.description}
                                    </p>
                                    <div className="pt-2 flex items-center gap-2 text-primary-mint text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Use Calculator</span>
                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </div>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <AdSpace size="728x90" className="opacity-80" />
        </div>
    )
}

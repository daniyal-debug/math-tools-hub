import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AdSpace from '../ui/AdSpace'
import ConverterWidget from './ConverterWidget'
import FAQSection from './FAQSection'
import { converterCategories } from '../../utils/unitDefinitions'

export default function ConverterLayout({ category }) {
    const Icon = category.icon

    // Related converters (excluding current)
    const related = converterCategories.filter(c => c.id !== category.id).slice(0, 6)

    return (
        <div className="max-w-7xl mx-auto space-y-6 animate-fade-in px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link
                        href="/converter"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-400" />
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-primary-${category.color}/20`}>
                            <Icon className={`w-6 h-6 text-primary-${category.color}`} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">{category.name} Converter</h1>
                            <p className="text-gray-400">{category.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    <AdSpace size="728x90" className="opacity-80" />

                    {/* Converter Widget — receives only the string ID so no functions cross server/client boundary */}
                    <div className="glass-card p-6 md:p-8">
                        <ConverterWidget categoryId={category.id} />
                    </div>

                    <AdSpace size="728x90" className="opacity-80" />

                    {/* SEO Content */}
                    {category.seoContent && (
                        <div className="glass-card p-8 space-y-6">
                            <h2 className="text-2xl font-bold text-white">About {category.name} Conversion</h2>
                            <p className="text-gray-400 leading-relaxed">{category.seoContent}</p>
                        </div>
                    )}

                    {/* FAQ Section */}
                    {category.faqItems && category.faqItems.length > 0 && (
                        <div className="glass-card p-8">
                            <FAQSection items={category.faqItems} color={category.color} />
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="glass-card p-6 space-y-6">
                        <h3 className="text-xl font-bold text-white">More Converters</h3>
                        <div className="space-y-3">
                            {related.map(conv => {
                                const ConvIcon = conv.icon
                                return (
                                    <Link
                                        key={conv.id}
                                        href={`/converter/${conv.id}`}
                                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group text-left"
                                    >
                                        <div className={`p-2 rounded-lg bg-primary-${conv.color}/10 group-hover:bg-primary-${conv.color}/20 transition-colors`}>
                                            <ConvIcon className={`w-5 h-5 text-primary-${conv.color}`} />
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{conv.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="glass-card p-6 space-y-4">
                        <h3 className="text-lg font-bold text-white">🔢 Quick Tips</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-mint">•</span>
                                <span>Type a value and select units for instant conversion</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-mint">•</span>
                                <span>Click the swap button to reverse direction</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-mint">•</span>
                                <span>Use the search box to quickly find units</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-mint">•</span>
                                <span>Copy results with one click</span>
                            </li>
                        </ul>
                    </div>

                    <AdSpace size="300x600" className="sticky top-6 opacity-80" />
                </div>
            </div>
        </div>
    )
}

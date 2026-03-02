'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection({ items, color = 'cyan' }) {
    const [openIndex, setOpenIndex] = useState(null)

    if (!items || items.length === 0) return null

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

            <div className="space-y-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-white/5' : 'bg-white/[0.02]'}`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between px-5 py-4 text-left group"
                            type="button"
                        >
                            <h3 className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors pr-4">
                                {item.q}
                            </h3>
                            <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="px-5 pb-4 text-gray-400 leading-relaxed">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* JSON-LD FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: items.map(item => ({
                            '@type': 'Question',
                            name: item.q,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: item.a,
                            },
                        })),
                    }),
                }}
            />
        </div>
    )
}

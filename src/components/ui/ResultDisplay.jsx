'use client';

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ResultDisplay({ value, label = 'Result', color = 'white' }) {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="glass-card p-6 space-y-3">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    {label}
                </p>
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    title="Copy to clipboard"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                    ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                    )}
                </button>
            </div>
            <div className={`result-display text-${color} text-shadow`}>
                {value}
            </div>
        </div>
    )
}

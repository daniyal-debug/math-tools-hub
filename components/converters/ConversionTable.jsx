'use client'

import { formatNumber } from '../../utils/conversionEngine'

export default function ConversionTable({ data, fromSymbol, toSymbol, color = 'cyan' }) {
    if (!data || data.length === 0) return null

    return (
        <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-white/5">
                        <th className={`px-4 py-3 text-left font-semibold text-primary-${color}`}>{fromSymbol}</th>
                        <th className={`px-4 py-3 text-left font-semibold text-primary-${color}`}>{toSymbol}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                            <td className="px-4 py-2.5 text-gray-300 font-mono">{formatNumber(row.input)}</td>
                            <td className="px-4 py-2.5 text-white font-mono">{formatNumber(row.output)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

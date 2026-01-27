'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateSimpleInterest } from '../../utils/financeUtils'
import { Sparkles } from 'lucide-react'

export default function SimpleInterestCalculator({ color }) {
    const [p, setP] = useState('1000')
    const [r, setR] = useState('5')
    const [t, setT] = useState('2')
    const [results, setResults] = useState(null)

    useEffect(() => {
        setResults(calculateSimpleInterest(p, r, t))
    }, [p, r, t])

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <Input
                        label="Principal Amount ($)"
                        value={p}
                        onChange={(e) => setP(e.target.value)}
                        placeholder="e.g. 1000"
                    />
                    <Input
                        label="Annual Interest Rate (%)"
                        value={r}
                        onChange={(e) => setR(e.target.value)}
                        placeholder="e.g. 5"
                    />
                    <Input
                        label="Time Period (years)"
                        value={t}
                        onChange={(e) => setT(e.target.value)}
                        placeholder="e.g. 2"
                    />
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Total Interest</span>
                        <div className="text-6xl font-black text-white">
                            {results ? format(results.interest) : '$0.00'}
                        </div>
                    </div>

                    <ResultDisplay
                        value={results ? format(results.total) : '$0.00'}
                        label="Total Final Balance"
                    />
                </div>
            </div>

            <div className="glass-card p-8 space-y-4">
                <div className="flex items-center gap-2 text-primary-mint">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-xl font-bold text-white">Understanding Simple Interest</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                    Simple interest is calculated based on the principal amount of a loan or deposit. It's determined by multiplying the daily interest rate by the number of days that elapse between payments.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 italic text-gray-500 font-mono text-center">
                    Formula: Interest = Principal × Rate × Time
                </div>
            </div>
        </div>
    )
}


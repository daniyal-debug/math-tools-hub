'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateInvestmentReturn } from '../../utils/financeUtils'
import { TrendingUp, PlusCircle, Calendar } from 'lucide-react'

export default function InvestmentReturnCalculator({ color }) {
    const [initial, setInitial] = useState('10000')
    const [monthly, setMonthly] = useState('500')
    const [rate, setRate] = useState('7')
    const [years, setYears] = useState('20')
    const [results, setResults] = useState(null)

    useEffect(() => {
        setResults(calculateInvestmentReturn(initial, monthly, rate, years))
    }, [initial, monthly, rate, years])

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <Input
                        label="Initial Investment ($)"
                        value={initial}
                        onChange={(e) => setInitial(e.target.value)}
                        placeholder="e.g. 10000"
                    />
                    <Input
                        label="Monthly Contribution ($)"
                        value={monthly}
                        onChange={(e) => setMonthly(e.target.value)}
                        placeholder="e.g. 500"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Exp. Return Rate (%)"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            placeholder="e.g. 7"
                        />
                        <Input
                            label="Years"
                            value={years}
                            onChange={(e) => setYears(e.target.value)}
                            placeholder="e.g. 20"
                        />
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4 border-primary-mint/20">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Estimated Future Value</span>
                        <div className="text-6xl font-black text-white">
                            {results ? format(results.total) : '$0.00'}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <ResultDisplay
                            value={results ? format(results.invested) : '$0.00'}
                            label="Total Invested"
                        />
                        <ResultDisplay
                            value={results ? format(results.profit) : '$0.00'}
                            label="Total Profit"
                        />
                    </div>
                </div>
            </div>

            <div className="glass-card p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Investment Strategy Summary</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary-mint/10">
                            <TrendingUp className="w-5 h-5 text-primary-mint" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Growth Factor</h4>
                            <p className="text-sm text-gray-500">Your portfolio is estimated to grow by {results ? ((results.total / results.invested - 1) * 100).toFixed(0) : 0}% through interest alone.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary-blue/10">
                            <PlusCircle className="w-5 h-5 text-primary-blue" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Monthly Habit</h4>
                            <p className="text-sm text-gray-500">Contributing {format(monthly)} monthly adds {format(monthly * 12 * years)} to your principal over {years} years.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary-purple/10">
                            <Calendar className="w-5 h-5 text-primary-purple" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Compound Effect</h4>
                            <p className="text-sm text-gray-500">The longer you hold, the faster your wealth accelerates due to compounding.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


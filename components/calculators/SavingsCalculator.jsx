'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateInvestmentReturn } from '../../utils/financeUtils'
import { Target, PiggyBank, Calendar } from 'lucide-react'

export default function SavingsCalculator({ color }) {
    const [goal, setGoal] = useState('10000')
    const [initial, setInitial] = useState('1000')
    const [rate, setRate] = useState('4.5')
    const [years, setYears] = useState('3')
    const [results, setResults] = useState(null)

    // Using Investment logic in reverse or similar for savings
    useEffect(() => {
        // Here we use the same formula but focus on regular savings
        setResults(calculateInvestmentReturn(initial, 0, rate, years))
    }, [initial, rate, years])

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <PiggyBank className="w-5 h-5 text-primary-mint" />
                        <h3 className="text-xl font-bold">Savings Variables</h3>
                    </div>
                    <Input
                        label="Initial Balance ($)"
                        value={initial}
                        onChange={(e) => setInitial(e.target.value)}
                        placeholder="e.g. 1000"
                    />
                    <Input
                        label="Annual Interest Rate (%)"
                        value={rate}
                        onChange={(e) => setR(e.target.value)}
                        placeholder="e.g. 4.5"
                    />
                    <Input
                        label="Years to Save"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        placeholder="e.g. 3"
                    />
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4 border-primary-blue/20">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Future Savings Balance</span>
                        <div className="text-6xl font-black text-white">
                            {results ? format(results.total) : '$0.00'}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <ResultDisplay
                            value={results ? format(results.profit) : '$0.00'}
                            label="Interest Earned"
                        />
                        <div className="glass-card p-4 flex flex-col justify-center items-center gap-1">
                            <span className="text-xs text-gray-500 uppercase font-bold">APY Impact</span>
                            <div className="text-primary-blue font-black flex items-center gap-1">
                                {rate}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-r from-primary-blue/10 to-transparent border-none">
                <div className="flex gap-6 items-center">
                    <div className="hidden md:block p-6 rounded-3xl bg-white/5 border border-white/10">
                        <Target className="w-12 h-12 text-primary-blue" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Savings Goal Tip</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Setting up an automatic transfer to your savings account is the most effective way to reach your goals. At a {rate}% annual return, your money is working for you 24/7.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


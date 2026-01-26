'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateCompoundInterest } from '../../utils/financeUtils'
import { Sparkles, TrendingUp } from 'lucide-react'

export default function CompoundInterestCalculator({ color }) {
    const [p, setP] = useState('5000')
    const [r, setR] = useState('8')
    const [t, setT] = useState('10')
    const [n, setN] = useState('12')
    const [results, setResults] = useState(null)

    useEffect(() => {
        setResults(calculateCompoundInterest(p, r, t, n))
    }, [p, r, t, n])

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <Input
                        label="Initial Investment ($)"
                        value={p}
                        onChange={(e) => setP(e.target.value)}
                        placeholder="e.g. 5000"
                    />
                    <Input
                        label="Interest Rate (%)"
                        value={r}
                        onChange={(e) => setR(e.target.value)}
                        placeholder="e.g. 8"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Years"
                            value={t}
                            onChange={(e) => setT(e.target.value)}
                            placeholder="e.g. 10"
                        />
                        <div className="form-control space-y-2">
                            <label className="label py-0">
                                <span className="label-text text-gray-400 font-medium">Compounding</span>
                            </label>
                            <select
                                className="select select-bordered bg-white/5 border-white/10 focus:border-white/30 text-white rounded-xl"
                                value={n}
                                onChange={(e) => setN(e.target.value)}
                            >
                                <option value="1">Annually</option>
                                <option value="2">Semi-Annually</option>
                                <option value="4">Quarterly</option>
                                <option value="12">Monthly</option>
                                <option value="365">Daily</option>
                            </select>
                        </div>
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Final Balance</span>
                        <div className="text-5xl font-black text-white">
                            {results ? format(results.total) : '$0.00'}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <ResultDisplay
                            value={results ? format(results.interest) : '$0.00'}
                            label="Total Interest"
                        />
                        <div className="glass-card p-4 flex flex-col justify-center items-center gap-1 border-primary-mint/20">
                            <span className="text-xs text-gray-500 uppercase font-bold">Growth</span>
                            <div className="text-primary-mint font-black flex items-center gap-1">
                                <TrendingUp className="w-4 h-4" />
                                {results ? (((results.total / p) - 1) * 100).toFixed(1) + '%' : '0%'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card p-8 space-y-4">
                <div className="flex items-center gap-2 text-primary-mint">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-xl font-bold text-white">The Power of Compounding</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                    Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. It allows your wealth to grow exponentially over time.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 italic text-gray-500 font-mono text-center overflow-x-auto">
                    Formula: A = P(1 + r/n)<sup>nt</sup>
                </div>
            </div>
        </div>
    )
}


'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateEMI, calculateAmortizationSchedule } from '../../utils/financeUtils'
import { PieChart, List, Calculator } from 'lucide-react'

export default function MortgageCalculator({ color }) {
    const [p, setP] = useState('250000')
    const [r, setR] = useState('6.5')
    const [y, setY] = useState('30')
    const [results, setResults] = useState(null)
    const [schedule, setSchedule] = useState([])
    const [showSchedule, setShowSchedule] = useState(false)

    useEffect(() => {
        const res = calculateEMI(p, r, y)
        if (res) {
            setResults(res)
            setSchedule(calculateAmortizationSchedule(p, r, y))
        }
    }, [p, r, y])

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Inputs */}
                <Card color={color} hover={false} className="p-8 space-y-6 self-start">
                    <div className="flex items-center gap-2 mb-2">
                        <Calculator className="w-5 h-5 text-primary-green" />
                        <h3 className="text-xl font-bold text-white">Loan Details</h3>
                    </div>
                    <Input
                        label="Home Price ($)"
                        value={p}
                        onChange={(e) => setP(e.target.value)}
                        placeholder="e.g. 250000"
                    />
                    <Input
                        label="Interest Rate (%)"
                        value={r}
                        onChange={(e) => setR(e.target.value)}
                        placeholder="e.g. 6.5"
                    />
                    <Input
                        label="Loan Term (years)"
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                        placeholder="e.g. 30"
                    />
                </Card>

                {/* Main Results */}
                <div className="space-y-6">
                    <div className="glass-card p-8 text-center space-y-4">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Estimated Monthly Payment</span>
                        <div className="text-6xl font-black text-white">
                            {results ? format(results.monthlyPayment) : '$0.00'}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <ResultDisplay
                            value={results ? format(results.totalPayment) : '$0.00'}
                            label="Total Payoff"
                        />
                        <ResultDisplay
                            value={results ? format(results.totalInterest) : '$0.00'}
                            label="Total Interest"
                        />
                    </div>
                </div>
            </div>

            {/* Amortization and Extra Details */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Amortization Schedule</h3>
                    <button
                        onClick={() => setShowSchedule(!showSchedule)}
                        className="btn btn-ghost btn-sm gap-2 text-primary-mint"
                    >
                        <List className="w-4 h-4" /> {showSchedule ? 'Hide' : 'View'} Schedule
                    </button>
                </div>

                {showSchedule && (
                    <div className="glass-card overflow-hidden">
                        <div className="overflow-x-auto max-h-[400px]">
                            <table className="table table-zebra table-pin-rows">
                                <thead>
                                    <tr className="bg-white/5 border-white/10 text-gray-300">
                                        <th>Month</th>
                                        <th>Payment</th>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schedule.slice(0, 120).map((row) => (
                                        <tr key={row.month} className="border-white/5 text-gray-400">
                                            <td className="font-bold text-white">{row.month}</td>
                                            <td>{format(row.payment)}</td>
                                            <td>{format(row.principal)}</td>
                                            <td>{format(row.interest)}</td>
                                            <td>{format(row.balance)}</td>
                                        </tr>
                                    ))}
                                    {schedule.length > 120 && (
                                        <tr className="text-center text-xs italic">
                                            <td colSpan="5">Showing first 10 years of schedule...</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


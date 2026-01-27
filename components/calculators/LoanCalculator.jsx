'use client';
import { useState } from 'react'
import ResultDisplay from '../ui/ResultDisplay'
import Input from '../ui/Input'
import Card from '../ui/Card'
import { calculateEMI } from '../../utils/financeUtils'

export default function LoanCalculator({ color }) {
    const [principal, setPrincipal] = useState('10000')
    const [rate, setRate] = useState('5.0')
    const [years, setYears] = useState('5')

    const results = calculateEMI(principal, rate, years)

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Loan Amount ($)"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Enter loan amount"
                />
                <Input
                    label="Interest Rate (%)"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Enter annual interest rate"
                />
                <Input
                    label="Loan Term (years)"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="Enter loan term"
                />
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <ResultDisplay value={results ? format(results.monthlyPayment) : '$0.00'} label="Monthly Payment" />
                <ResultDisplay value={results ? format(results.totalPayment) : '$0.00'} label="Total Payment" />
                <ResultDisplay value={results ? format(results.totalInterest) : '$0.00'} label="Total Interest" />
            </div>
        </div>
    )
}



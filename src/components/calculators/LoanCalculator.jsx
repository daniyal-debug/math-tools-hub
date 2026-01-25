import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function LoanCalculator({ color }) {
    const [principal, setPrincipal] = useState('')
    const [rate, setRate] = useState('')
    const [years, setYears] = useState('')
    const [monthly, setMonthly] = useState('$0.00')
    const [total, setTotal] = useState('$0.00')
    const [interest, setInterest] = useState('$0.00')

    const calculate = () => {
        const p = parseFloat(principal)
        const r = parseFloat(rate) / 100 / 12
        const n = parseFloat(years) * 12

        if (p && r && n) {
            const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
            const totalPayment = monthlyPayment * n
            const totalInterest = totalPayment - p

            setMonthly('$' + monthlyPayment.toFixed(2))
            setTotal('$' + totalPayment.toFixed(2))
            setInterest('$' + totalInterest.toFixed(2))
        } else {
            setMonthly('$0.00')
            setTotal('$0.00')
            setInterest('$0.00')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Loan Amount ($)"
                    value={principal}
                    onChange={(e) => { setPrincipal(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter loan amount"
                />
                <Input
                    label="Interest Rate (%)"
                    value={rate}
                    onChange={(e) => { setRate(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter annual interest rate"
                />
                <Input
                    label="Loan Term (years)"
                    value={years}
                    onChange={(e) => { setYears(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter loan term"
                />
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <ResultDisplay value={monthly} label="Monthly Payment" />
                <ResultDisplay value={total} label="Total Payment" />
                <ResultDisplay value={interest} label="Total Interest" />
            </div>
        </div>
    )
}

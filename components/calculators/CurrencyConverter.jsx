'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function CurrencyConverter({ color }) {
    const [amount, setAmount] = useState('')
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('EUR')
    const [result, setResult] = useState('0.00')

    // Simplified exchange rates (USD base)
    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 149.50,
        CAD: 1.36,
        AUD: 1.53,
        INR: 83.12
    }

    const calculate = () => {
        const amt = parseFloat(amount)
        if (amt && rates[from] && rates[to]) {
            const usdAmount = amt / rates[from]
            const converted = usdAmount * rates[to]
            setResult(converted.toFixed(2))
        } else {
            setResult('0.00')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Amount"
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter amount"
                />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
                        <select value={from} onChange={(e) => { setFrom(e.target.value); setTimeout(calculate, 0) }} className="w-full input-glass">
                            {Object.keys(rates).map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
                        <select value={to} onChange={(e) => { setTo(e.target.value); setTimeout(calculate, 0) }} className="w-full input-glass">
                            {Object.keys(rates).map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </Card>

            <ResultDisplay value={`${result} ${to}`} label="Converted Amount" />
        </div>
    )
}


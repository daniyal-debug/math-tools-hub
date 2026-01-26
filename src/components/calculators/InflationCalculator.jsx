'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { TrendingUp, AlertTriangle, Scale } from 'lucide-react'

export default function InflationCalculator({ color }) {
    const [amount, setAmount] = useState('1000')
    const [rate, setRate] = useState('3.5')
    const [years, setYears] = useState('10')
    const [futureValue, setFutureValue] = useState(0)
    const [buyingPower, setBuyingPower] = useState(0)

    useEffect(() => {
        const p = parseFloat(amount)
        const i = parseFloat(rate) / 100
        const n = parseFloat(years)

        if (p && i && n) {
            // Future cost of same item: FV = PV * (1 + i)^n
            const fv = p * Math.pow(1 + i, n)
            // Buying power of same money: PV = FV / (1 + i)^n
            const bp = p / Math.pow(1 + i, n)

            setFutureValue(fv)
            setBuyingPower(bp)
        }
    }, [amount, rate, years])

    const format = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <Input
                        label="Initial Amount ($)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g. 1000"
                    />
                    <Input
                        label="Average Inflation Rate (%)"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="e.g. 3.5"
                    />
                    <Input
                        label="Time Period (years)"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        placeholder="e.g. 10"
                    />
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4 border-primary-coral/20">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Future Cost of Item</span>
                        <div className="text-6xl font-black text-white">
                            {format(futureValue)}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <ResultDisplay
                            value={format(buyingPower)}
                            label="Buying Power Today"
                        />
                        <div className="glass-card p-4 flex flex-col justify-center items-center gap-1 border-primary-amber/20">
                            <span className="text-xs text-gray-500 uppercase font-bold">Loss in Value</span>
                            <div className="text-primary-coral font-black flex items-center gap-1">
                                {(((1 - buyingPower / amount)) * 100).toFixed(1)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-coral/10">
                        <AlertTriangle className="w-6 h-6 text-primary-coral" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Purchasing Power</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Due to inflation, your {format(amount)} today will only buy {format(buyingPower)} worth of goods in {years} years.
                        </p>
                    </div>
                </div>
                <div className="glass-card p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-mint/10">
                        <Scale className="w-6 h-6 text-primary-mint" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Cost of Living</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            An item that costs {format(amount)} today will likely cost {format(futureValue)} in {years} years.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


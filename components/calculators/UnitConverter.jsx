'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function UnitConverter({ color }) {
    const [value, setValue] = useState('')
    const [from, setFrom] = useState('m')
    const [to, setTo] = useState('ft')
    const [result, setResult] = useState('0')

    const conversions = {
        // Length
        m: { m: 1, ft: 3.28084, in: 39.3701, km: 0.001, mi: 0.000621371 },
        ft: { m: 0.3048, ft: 1, in: 12, km: 0.0003048, mi: 0.000189394 },
        in: { m: 0.0254, ft: 0.0833333, in: 1, km: 0.0000254, mi: 0.0000157828 },
        km: { m: 1000, ft: 3280.84, in: 39370.1, km: 1, mi: 0.621371 },
        mi: { m: 1609.34, ft: 5280, in: 63360, km: 1.60934, mi: 1 },
        // Weight
        kg: { kg: 1, lb: 2.20462, oz: 35.274, g: 1000 },
        lb: { kg: 0.453592, lb: 1, oz: 16, g: 453.592 },
        oz: { kg: 0.0283495, lb: 0.0625, oz: 1, g: 28.3495 },
        g: { kg: 0.001, lb: 0.00220462, oz: 0.035274, g: 1 }
    }

    const calculate = () => {
        const val = parseFloat(value)
        if (val && conversions[from] && conversions[from][to]) {
            const converted = val * conversions[from][to]
            setResult(converted.toFixed(4))
        } else {
            setResult('0')
        }
    }

    const units = ['m', 'ft', 'in', 'km', 'mi', 'kg', 'lb', 'oz', 'g']

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Value"
                    value={value}
                    onChange={(e) => { setValue(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter value"
                />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
                        <select value={from} onChange={(e) => { setFrom(e.target.value); setTimeout(calculate, 0) }} className="w-full input-glass">
                            {units.map(unit => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
                        <select value={to} onChange={(e) => { setTo(e.target.value); setTimeout(calculate, 0) }} className="w-full input-glass">
                            {units.map(unit => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </Card>

            <ResultDisplay value={`${result} ${to}`} label="Converted Value" />
        </div>
    )
}


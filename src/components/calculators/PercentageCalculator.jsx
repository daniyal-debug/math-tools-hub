'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function PercentageCalculator({ color }) {
    const [mode, setMode] = useState('basic')
    const [values, setValues] = useState({
        num: '', total: '', percent: '', number: '', original: '', newVal: ''
    })
    const [result, setResult] = useState('0%')

    const calculateBasic = () => {
        const num = parseFloat(values.num)
        const total = parseFloat(values.total)
        if (num && total && total !== 0) {
            setResult(((num / total) * 100).toFixed(2) + '%')
        } else {
            setResult('0%')
        }
    }

    const calculatePercentOf = () => {
        const percent = parseFloat(values.percent)
        const number = parseFloat(values.number)
        if (percent && number) {
            setResult(((percent / 100) * number).toFixed(2))
        } else {
            setResult('0')
        }
    }

    const calculateChange = () => {
        const original = parseFloat(values.original)
        const newVal = parseFloat(values.newVal)
        if (original && newVal && original !== 0) {
            const change = ((newVal - original) / original) * 100
            setResult((change >= 0 ? '+' : '') + change.toFixed(2) + '%')
        } else {
            setResult('0%')
        }
    }

    const handleChange = (field, value) => {
        setValues({ ...values, [field]: value })
        setTimeout(() => {
            if (mode === 'basic') calculateBasic()
            else if (mode === 'of') calculatePercentOf()
            else calculateChange()
        }, 0)
    }

    return (
        <div className="space-y-6">
            {/* Mode Selector */}
            <Card color={color} hover={false} className="p-2">
                <div className="grid grid-cols-3 gap-2">
                    {['basic', 'of', 'change'].map((m) => (
                        <button
                            key={m}
                            onClick={() => setMode(m)}
                            className={`px-4 py-2 rounded-xl font-medium transition-all ${mode === m
                                    ? 'bg-white/20 text-white'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {m === 'basic' ? 'What % of' : m === 'of' ? '% of Number' : '% Change'}
                        </button>
                    ))}
                </div>
            </Card>

            {/* Calculator */}
            <Card color={color} hover={false} className="p-8 space-y-6">
                {mode === 'basic' && (
                    <>
                        <Input
                            label="What number?"
                            value={values.num}
                            onChange={(e) => handleChange('num', e.target.value)}
                            placeholder="Enter number"
                        />
                        <Input
                            label="Is what percent of?"
                            value={values.total}
                            onChange={(e) => handleChange('total', e.target.value)}
                            placeholder="Enter total"
                        />
                    </>
                )}

                {mode === 'of' && (
                    <>
                        <Input
                            label="What percent?"
                            value={values.percent}
                            onChange={(e) => handleChange('percent', e.target.value)}
                            placeholder="Enter percentage"
                        />
                        <Input
                            label="Of what number?"
                            value={values.number}
                            onChange={(e) => handleChange('number', e.target.value)}
                            placeholder="Enter number"
                        />
                    </>
                )}

                {mode === 'change' && (
                    <>
                        <Input
                            label="Original value"
                            value={values.original}
                            onChange={(e) => handleChange('original', e.target.value)}
                            placeholder="Enter original value"
                        />
                        <Input
                            label="New value"
                            value={values.newVal}
                            onChange={(e) => handleChange('newVal', e.target.value)}
                            placeholder="Enter new value"
                        />
                    </>
                )}
            </Card>

            <ResultDisplay value={result} />
        </div>
    )
}


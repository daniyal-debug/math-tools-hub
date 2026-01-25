import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function RatioCalculator({ color }) {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')
    const [result, setResult] = useState('0')

    const calculate = () => {
        const valA = parseFloat(a)
        const valB = parseFloat(b)
        const valC = parseFloat(c)

        if (valA && valB && valC && valB !== 0) {
            const d = (valB * valC) / valA
            setResult(d.toFixed(2))
        } else {
            setResult('0')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <div className="grid grid-cols-3 gap-4 items-end">
                    <Input label="A" value={a} onChange={(e) => { setA(e.target.value); setTimeout(calculate, 0) }} placeholder="Enter A" />
                    <div className="text-center text-2xl text-gray-400 pb-3">:</div>
                    <Input label="B" value={b} onChange={(e) => { setB(e.target.value); setTimeout(calculate, 0) }} placeholder="Enter B" />
                </div>

                <div className="text-center text-gray-400 text-sm">If A is to B, then C is to D</div>

                <div className="grid grid-cols-3 gap-4 items-end">
                    <Input label="C" value={c} onChange={(e) => { setC(e.target.value); setTimeout(calculate, 0) }} placeholder="Enter C" />
                    <div className="text-center text-2xl text-gray-400 pb-3">:</div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">D (Result)</label>
                        <div className="input-glass bg-white/5 cursor-not-allowed">{result}</div>
                    </div>
                </div>
            </Card>

            <ResultDisplay value={result} label="D Value" />
        </div>
    )
}

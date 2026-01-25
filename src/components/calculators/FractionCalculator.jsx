import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'
import ResultDisplay from '../ui/ResultDisplay'

export default function FractionCalculator({ color }) {
    const [num1, setNum1] = useState('')
    const [den1, setDen1] = useState('')
    const [num2, setNum2] = useState('')
    const [den2, setDen2] = useState('')
    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState('0/1')

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

    const calculate = () => {
        const n1 = parseInt(num1) || 0
        const d1 = parseInt(den1) || 1
        const n2 = parseInt(num2) || 0
        const d2 = parseInt(den2) || 1

        let resultNum, resultDen

        if (operation === 'add') {
            resultNum = n1 * d2 + n2 * d1
            resultDen = d1 * d2
        } else if (operation === 'subtract') {
            resultNum = n1 * d2 - n2 * d1
            resultDen = d1 * d2
        } else if (operation === 'multiply') {
            resultNum = n1 * n2
            resultDen = d1 * d2
        } else {
            resultNum = n1 * d2
            resultDen = d1 * n2
        }

        const divisor = gcd(Math.abs(resultNum), Math.abs(resultDen))
        resultNum /= divisor
        resultDen /= divisor

        setResult(`${resultNum}/${resultDen}`)
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Numerator 1" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="0" />
                    <Input label="Denominator 1" value={den1} onChange={(e) => setDen1(e.target.value)} placeholder="1" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Operation</label>
                    <select
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                        className="w-full input-glass"
                    >
                        <option value="add">Add (+)</option>
                        <option value="subtract">Subtract (-)</option>
                        <option value="multiply">Multiply (×)</option>
                        <option value="divide">Divide (÷)</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Input label="Numerator 2" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="0" />
                    <Input label="Denominator 2" value={den2} onChange={(e) => setDen2(e.target.value)} placeholder="1" />
                </div>

                <Button onClick={calculate} className="w-full">Calculate</Button>
            </Card>

            <ResultDisplay value={result} />
        </div>
    )
}

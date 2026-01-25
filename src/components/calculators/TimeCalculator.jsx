import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'
import ResultDisplay from '../ui/ResultDisplay'

export default function TimeCalculator({ color }) {
    const [h1, setH1] = useState('')
    const [m1, setM1] = useState('')
    const [s1, setS1] = useState('')
    const [h2, setH2] = useState('')
    const [m2, setM2] = useState('')
    const [s2, setS2] = useState('')
    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState('0h 0m 0s')

    const calculate = () => {
        const hours1 = parseInt(h1) || 0
        const mins1 = parseInt(m1) || 0
        const secs1 = parseInt(s1) || 0
        const hours2 = parseInt(h2) || 0
        const mins2 = parseInt(m2) || 0
        const secs2 = parseInt(s2) || 0

        let totalSeconds1 = hours1 * 3600 + mins1 * 60 + secs1
        let totalSeconds2 = hours2 * 3600 + mins2 * 60 + secs2

        let resultSeconds = operation === 'add'
            ? totalSeconds1 + totalSeconds2
            : totalSeconds1 - totalSeconds2

        if (resultSeconds < 0) resultSeconds = 0

        const hours = Math.floor(resultSeconds / 3600)
        const minutes = Math.floor((resultSeconds % 3600) / 60)
        const seconds = resultSeconds % 60

        setResult(`${hours}h ${minutes}m ${seconds}s`)
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                    <Input label="Hours" value={h1} onChange={(e) => setH1(e.target.value)} placeholder="0" />
                    <Input label="Minutes" value={m1} onChange={(e) => setM1(e.target.value)} placeholder="0" />
                    <Input label="Seconds" value={s1} onChange={(e) => setS1(e.target.value)} placeholder="0" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Operation</label>
                    <select value={operation} onChange={(e) => setOperation(e.target.value)} className="w-full input-glass">
                        <option value="add">Add (+)</option>
                        <option value="subtract">Subtract (-)</option>
                    </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <Input label="Hours" value={h2} onChange={(e) => setH2(e.target.value)} placeholder="0" />
                    <Input label="Minutes" value={m2} onChange={(e) => setM2(e.target.value)} placeholder="0" />
                    <Input label="Seconds" value={s2} onChange={(e) => setS2(e.target.value)} placeholder="0" />
                </div>

                <Button onClick={calculate} className="w-full">Calculate</Button>
            </Card>

            <ResultDisplay value={result} />
        </div>
    )
}

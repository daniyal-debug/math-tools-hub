import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'
import ResultDisplay from '../ui/ResultDisplay'

export default function AverageCalculator({ color }) {
    const [numbers, setNumbers] = useState('')
    const [mean, setMean] = useState('0')
    const [median, setMedian] = useState('0')
    const [count, setCount] = useState('0')

    const calculate = () => {
        const nums = numbers.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n))

        if (nums.length === 0) {
            setMean('0')
            setMedian('0')
            setCount('0')
            return
        }

        const sum = nums.reduce((a, b) => a + b, 0)
        const meanVal = (sum / nums.length).toFixed(2)

        const sorted = [...nums].sort((a, b) => a - b)
        const medianVal = sorted.length % 2 === 0
            ? ((sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2).toFixed(2)
            : sorted[Math.floor(sorted.length / 2)].toFixed(2)

        setMean(meanVal)
        setMedian(medianVal)
        setCount(nums.length.toString())
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Enter numbers (comma separated)"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
                    placeholder="e.g., 85, 90, 78, 92, 88"
                    type="text"
                />
                <Button onClick={calculate} className="w-full">Calculate</Button>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <ResultDisplay value={mean} label="Mean (Average)" />
                <ResultDisplay value={median} label="Median" />
                <ResultDisplay value={count} label="Count" />
            </div>
        </div>
    )
}

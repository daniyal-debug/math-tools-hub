'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function BMICalculator({ color }) {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('0')
    const [category, setCategory] = useState('-')

    const calculate = () => {
        const w = parseFloat(weight)
        const h = parseFloat(height) / 100 // convert cm to m

        if (w && h && h !== 0) {
            const bmiValue = (w / (h * h)).toFixed(1)
            setBmi(bmiValue)

            let cat = 'Underweight'
            if (bmiValue >= 25) cat = 'Overweight'
            else if (bmiValue >= 18.5) cat = 'Normal'

            setCategory(cat)
        } else {
            setBmi('0')
            setCategory('-')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Weight (kg)"
                    value={weight}
                    onChange={(e) => { setWeight(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter weight in kg"
                />
                <Input
                    label="Height (cm)"
                    value={height}
                    onChange={(e) => { setHeight(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter height in cm"
                />
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <ResultDisplay value={bmi} label="BMI" />
                <ResultDisplay value={category} label="Category" />
            </div>
        </div>
    )
}


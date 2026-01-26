'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function GradeCalculator({ color }) {
    const [points, setPoints] = useState('')
    const [maxPoints, setMaxPoints] = useState('')
    const [percentage, setPercentage] = useState('0%')
    const [letterGrade, setLetterGrade] = useState('-')

    const calculate = () => {
        const earned = parseFloat(points)
        const max = parseFloat(maxPoints)

        if (earned && max && max !== 0) {
            const pct = ((earned / max) * 100).toFixed(2)
            setPercentage(pct + '%')

            let letter = 'F'
            if (pct >= 90) letter = 'A'
            else if (pct >= 80) letter = 'B'
            else if (pct >= 70) letter = 'C'
            else if (pct >= 60) letter = 'D'

            setLetterGrade(letter)
        } else {
            setPercentage('0%')
            setLetterGrade('-')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Total Points Earned"
                    value={points}
                    onChange={(e) => { setPoints(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter points earned"
                />
                <Input
                    label="Maximum Points"
                    value={maxPoints}
                    onChange={(e) => { setMaxPoints(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter maximum points"
                />
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <ResultDisplay value={percentage} label="Grade Percentage" />
                <ResultDisplay value={letterGrade} label="Letter Grade" />
            </div>
        </div>
    )
}


'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function AgeCalculator({ color }) {
    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState('0 years')
    const [days, setDays] = useState('0 days')

    const calculate = () => {
        if (!birthDate) {
            setAge('0 years')
            setDays('0 days')
            return
        }

        const birth = new Date(birthDate)
        const today = new Date()

        let years = today.getFullYear() - birth.getFullYear()
        let months = today.getMonth() - birth.getMonth()

        if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
            years--
            months += 12
        }

        const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24))

        setAge(`${years} years ${months} months`)
        setDays(`${totalDays} days`)
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Birth Date"
                    type="date"
                    value={birthDate}
                    onChange={(e) => { setBirthDate(e.target.value); setTimeout(calculate, 0) }}
                />
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <ResultDisplay value={age} label="Age" />
                <ResultDisplay value={days} label="Total Days" />
            </div>
        </div>
    )
}


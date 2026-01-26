'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function DateCalculator({ color }) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [days, setDays] = useState('0 days')
    const [weeks, setWeeks] = useState('0 weeks')
    const [months, setMonths] = useState('0 months')

    const calculate = () => {
        if (!startDate || !endDate) {
            setDays('0 days')
            setWeeks('0 weeks')
            setMonths('0 months')
            return
        }

        const start = new Date(startDate)
        const end = new Date(endDate)

        const diffTime = Math.abs(end - start)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        const diffWeeks = Math.floor(diffDays / 7)
        const diffMonths = Math.floor(diffDays / 30)

        setDays(`${diffDays} days`)
        setWeeks(`${diffWeeks} weeks`)
        setMonths(`${diffMonths} months`)
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => { setStartDate(e.target.value); setTimeout(calculate, 0) }}
                />
                <Input
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => { setEndDate(e.target.value); setTimeout(calculate, 0) }}
                />
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <ResultDisplay value={days} label="Days" />
                <ResultDisplay value={weeks} label="Weeks" />
                <ResultDisplay value={months} label="Months" />
            </div>
        </div>
    )
}


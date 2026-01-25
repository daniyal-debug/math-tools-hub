import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function TipCalculator({ color }) {
    const [bill, setBill] = useState('')
    const [tipPercent, setTipPercent] = useState('15')
    const [people, setPeople] = useState('1')
    const [tipAmount, setTipAmount] = useState('$0.00')
    const [total, setTotal] = useState('$0.00')
    const [perPerson, setPerPerson] = useState('$0.00')

    const calculate = () => {
        const billAmount = parseFloat(bill)
        const tip = parseFloat(tipPercent)
        const numPeople = parseInt(people) || 1

        if (billAmount && tip) {
            const tipAmt = (billAmount * tip) / 100
            const totalAmt = billAmount + tipAmt
            const perPersonAmt = totalAmt / numPeople

            setTipAmount('$' + tipAmt.toFixed(2))
            setTotal('$' + totalAmt.toFixed(2))
            setPerPerson('$' + perPersonAmt.toFixed(2))
        } else {
            setTipAmount('$0.00')
            setTotal('$0.00')
            setPerPerson('$0.00')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Bill Amount ($)"
                    value={bill}
                    onChange={(e) => { setBill(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter bill amount"
                />
                <Input
                    label="Tip Percentage (%)"
                    value={tipPercent}
                    onChange={(e) => { setTipPercent(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter tip percentage"
                />
                <Input
                    label="Number of People"
                    value={people}
                    onChange={(e) => { setPeople(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter number of people"
                />
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <ResultDisplay value={tipAmount} label="Tip Amount" />
                <ResultDisplay value={total} label="Total" />
                <ResultDisplay value={perPerson} label="Per Person" />
            </div>
        </div>
    )
}

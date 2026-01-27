'use client';
import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'

export default function DiscountCalculator({ color }) {
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [discountAmount, setDiscountAmount] = useState('$0.00')
    const [finalPrice, setFinalPrice] = useState('$0.00')
    const [savings, setSavings] = useState('$0.00')

    const calculate = () => {
        const originalPrice = parseFloat(price)
        const discountPercent = parseFloat(discount)

        if (originalPrice && discountPercent) {
            const discAmt = (originalPrice * discountPercent) / 100
            const final = originalPrice - discAmt

            setDiscountAmount('$' + discAmt.toFixed(2))
            setFinalPrice('$' + final.toFixed(2))
            setSavings('$' + discAmt.toFixed(2))
        } else {
            setDiscountAmount('$0.00')
            setFinalPrice('$0.00')
            setSavings('$0.00')
        }
    }

    return (
        <div className="space-y-6">
            <Card color={color} hover={false} className="p-8 space-y-6">
                <Input
                    label="Original Price"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter original price"
                />
                <Input
                    label="Discount Percentage"
                    value={discount}
                    onChange={(e) => { setDiscount(e.target.value); setTimeout(calculate, 0) }}
                    placeholder="Enter discount %"
                />
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
                <ResultDisplay value={discountAmount} label="Discount Amount" />
                <ResultDisplay value={finalPrice} label="Final Price" color="green" />
                <ResultDisplay value={savings} label="You Save" />
            </div>
        </div>
    )
}


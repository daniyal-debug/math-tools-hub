'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { solvePythagorean } from '../../utils/mathUtils'
import { Triangle, Sparkles } from 'lucide-react'

export default function PythagoreanCalculator({ color }) {
    const [a, setA] = useState('3')
    const [b, setB] = useState('4')
    const [c, setC] = useState(5)

    useEffect(() => {
        const res = solvePythagorean(parseFloat(a), parseFloat(b))
        if (!isNaN(res)) setC(res)
    }, [a, b])

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <Input
                        label="Side A"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                        placeholder="e.g. 3"
                    />
                    <Input
                        label="Side B"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                        placeholder="e.g. 4"
                    />
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4 border-primary-mint/20">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Hypotenuse (Side C)</span>
                        <div className="text-6xl font-black text-white">
                            {c ? c.toFixed(3) : '0.00'}
                        </div>
                    </div>

                    <div className="glass-card p-6 flex flex-col items-center gap-2">
                        <Triangle className="w-12 h-12 text-primary-mint" />
                        <span className="text-xs text-gray-500 uppercase font-bold">Right-Angle Geometry</span>
                    </div>
                </div>
            </div>

            <div className="glass-card p-8 space-y-4 border-primary-mint/10">
                <div className="flex items-center gap-2 text-primary-mint">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-xl font-bold text-white">The Pythagorean Theorem</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                    The fundamental relation in Euclidean geometry among the three sides of a right triangle. It states that the area of the square whose side is the hypotenuse is equal to the sum of the areas of the squares on the other two sides.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 italic text-gray-500 font-mono text-center">
                    Formula: a² + b² = c²
                </div>
            </div>
        </div>
    )
}


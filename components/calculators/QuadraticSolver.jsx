'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { solveQuadratic } from '../../utils/mathUtils'
import { Sparkles, FunctionSquare } from 'lucide-react'

export default function QuadraticSolver({ color }) {
    const [a, setA] = useState('1')
    const [b, setB] = useState('-5')
    const [c, setC] = useState('6')
    const [results, setResults] = useState(null)

    useEffect(() => {
        setResults(solveQuadratic(parseFloat(a), parseFloat(b), parseFloat(c)))
    }, [a, b, c])

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <Input label="a" value={a} onChange={(e) => setA(e.target.value)} placeholder="1" />
                        <Input label="b" value={b} onChange={(e) => setB(e.target.value)} placeholder="-5" />
                        <Input label="c" value={c} onChange={(e) => setC(e.target.value)} placeholder="6" />
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Solutions (Roots)</span>
                        {results ? (
                            <div className="flex justify-center gap-8">
                                <div className="space-y-1">
                                    <span className="text-xs text-gray-500 font-bold">x1</span>
                                    <div className="text-4xl font-black text-white">{results.x1.toFixed(3)}</div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs text-gray-500 font-bold">x2</span>
                                    <div className="text-4xl font-black text-white">{results.x2.toFixed(3)}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-xl font-bold text-primary-coral">No Real Solutions</div>
                        )}
                    </div>

                    {results && (
                        <div className="glass-card p-4 text-center">
                            <span className="text-xs text-gray-500 uppercase font-black">Discriminant</span>
                            <div className="text-xl font-bold text-white">{results.discriminant.toFixed(2)}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="glass-card p-8 bg-black/20">
                <div className="flex items-center gap-2 text-primary-purple mb-4">
                    <FunctionSquare className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-white">Equation Overview</h3>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4">
                    <p className="text-2xl font-serif text-white italic">
                        {a}x² {parseFloat(b) >= 0 ? '+' : '-'} {Math.abs(b)}x {parseFloat(c) >= 0 ? '+' : '-'} {Math.abs(c)} = 0
                    </p>
                    <p className="text-sm text-gray-500 text-center">
                        This solver uses the Quadratic Formula to find the real roots of any quadratic equation in standard form.
                    </p>
                </div>
            </div>
        </div>
    )
}


'use client';
import { useState, useEffect } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import ResultDisplay from '../ui/ResultDisplay'
import { calculateCircleArea, calculateRectangleArea, calculateTriangleArea } from '../../utils/mathUtils'
import { Shapes } from 'lucide-react'

export default function AreaCalculator({ color }) {
    const [shape, setShape] = useState('circle')
    const [val1, setVal1] = useState('10')
    const [val2, setVal2] = useState('5')
    const [results, setResults] = useState(null)

    useEffect(() => {
        let res = null
        const v1 = parseFloat(val1)
        const v2 = parseFloat(val2)

        if (shape === 'circle' && v1) res = calculateCircleArea(v1)
        if (shape === 'rectangle' && v1 && v2) res = calculateRectangleArea(v1, v2)
        if (shape === 'triangle' && v1 && v2) res = calculateTriangleArea(v1, v2)

        setResults(res)
    }, [shape, val1, val2])

    return (
        <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
                <Card color={color} hover={false} className="p-8 space-y-6">
                    <div className="form-control space-y-2">
                        <label className="label py-0">
                            <span className="label-text text-gray-400 font-medium">Select Shape</span>
                        </label>
                        <select
                            className="select select-bordered bg-white/5 border-white/10 text-white rounded-xl"
                            value={shape}
                            onChange={(e) => setShape(e.target.value)}
                        >
                            <option value="circle">Circle</option>
                            <option value="rectangle">Rectangle</option>
                            <option value="triangle">Triangle</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        <Input
                            label={shape === 'circle' ? 'Radius' : shape === 'rectangle' ? 'Width' : 'Base'}
                            value={val1}
                            onChange={(e) => setVal1(e.target.value)}
                        />
                        {(shape === 'rectangle' || shape === 'triangle') && (
                            <Input
                                label={shape === 'rectangle' ? 'Height' : 'Height'}
                                value={val2}
                                onChange={(e) => setVal2(e.target.value)}
                            />
                        )}
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="glass-card p-10 text-center space-y-4 border-primary-mint/20">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Calculated Area</span>
                        <div className="text-6xl font-black text-white">
                            {results ? results.area.toFixed(2) : '0.00'}
                        </div>
                    </div>

                    {results && results.perimeter && (
                        <ResultDisplay
                            value={results.perimeter.toFixed(2)}
                            label={shape === 'circle' ? 'Circumference' : 'Perimeter'}
                        />
                    )}
                </div>
            </div>

            <div className="glass-card p-8 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Shapes className={`w-10 h-10 text-primary-${color}`} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Geometry Insight</h3>
                    <p className="text-gray-400 text-sm mt-1">
                        Results are calculated using high-precision constants like π (Pi). Ensure your units (cm, m, in) are consistent for accurate results.
                    </p>
                </div>
            </div>
        </div>
    )
}

